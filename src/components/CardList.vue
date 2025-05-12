<script setup>
import Card from "./Card.vue";

defineProps({
  items: Array,
  isFavorites: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function,
});
const emit = defineEmits(["addToFavorite", "addToCart"]);
</script>

<template>
  <div class="m-auto px-10 py-4">
    <div class="grid grid-cols-4 gap-5" v-auto-animate>
      <Card
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :desc="item.description"
        :price="item.price"
        :oldPrice="item.oldPrice"
        :imageUrl="item.imageUrl"
        :discount="item.discount"
        :isNew="item.isNew"
        :isFavorite="item.isFavorite"
        :onClickFavorite="
          onClickFavorite || (() => emit('addToFavorite', item))
        "
        :onClickAdd="() => emit('addToCart', item)"
      />
    </div>
  </div>
</template>
