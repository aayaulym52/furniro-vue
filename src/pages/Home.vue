<script setup>
import { inject, onMounted } from "vue";
import Hero from "../components/Hero.vue";
import useItems from "../composables/useItems";
import CardList from "../components/CardList.vue";
import Categories from "../components/Categories.vue";

const { cart, onClickAddPlus } = inject("cart");

const { items, fetchItems, fetchFavorites, addToFavorite } = useItems(cart);

onMounted(async () => {
  await fetchItems();
  await fetchFavorites();
});
</script>

<template>
  <Hero />
  <Categories />
  <div class="mt-2">
    <h2 class="text-3xl font-bold text-center mb-6">Our Products</h2>
    <CardList
      :items="items"
      @add-to-favorite="addToFavorite"
      @add-to-cart="onClickAddPlus"
    />
  </div>
</template>
