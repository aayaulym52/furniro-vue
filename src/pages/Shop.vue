<script setup>
import { inject, onMounted } from "vue";
import useItems from "../composables/useItems";
import CardList from "../components/CardList.vue";
import PageHeader from "../components/PageHeader.vue";

const { cart, onClickAddPlus } = inject("cart");

const { items, fetchItems, fetchFavorites, addToFavorite } = useItems(cart);

onMounted(async () => {
  await fetchItems();
  await fetchFavorites();
});
</script>

<template>
  <PageHeader pageTitle="Shop" />

  <CardList
    :items="items"
    @add-to-favorite="addToFavorite"
    @add-to-cart="onClickAddPlus"
    class="mt-10"
  />
</template>
