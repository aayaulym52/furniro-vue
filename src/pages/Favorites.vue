<script setup>
import { inject, ref, onMounted } from "vue";
import PageHeader from "../components/PageHeader.vue";
import CardList from "../components/CardList.vue";
import useItems from "../composables/useItems";
import axios from "axios";

const { cart, onClickAddPlus } = inject("cart");
const { addToFavorite } = useItems(cart);
const favorites = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  isLoading.value = true;

  try {
    const { data } = await axios.get(
      "https://f800924d181b5299.mokky.dev/favorites?_relations=items"
    );

    favorites.value = data.map((obj) => ({
      ...obj.item,
      favoriteId: obj.id,
      isFavorite: true,
    }));
  } catch (err) {
    console.error("Ошибка при загрузке избранного:", err);
  } finally {
    isLoading.value = false;
  }
});

const removeFromFavorites = async (item) => {
  await addToFavorite(item);
  favorites.value = favorites.value.filter((fav) => fav.id !== item.id);
};
</script>

<template>
  <PageHeader pageTitle="Favorites" />

  <div class="px-5 mt-6">
    <div v-if="favorites.length > 0">
      <CardList
        :items="favorites"
        is-favorites
        @addToFavorite="removeFromFavorites"
        @add-to-cart="onClickAddPlus"
      />
    </div>
    <div v-else class="flex flex-col items-center mt-10 h-screen">
      <h2 class="text-2xl font-bold mt-4">
        Your favorites list is currently empty :(
      </h2>
      <p class="mt-4 text-gray-400">You haven’t added any items yet.</p>
    </div>
  </div>
</template>
