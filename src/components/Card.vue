<script setup>
import { useCartActions } from "../composables/useCart";
const { isInCart } = useCartActions();
defineProps({
  id: Number,
  title: String,
  desc: String,
  imageUrl: String,
  price: Number,
  oldPrice: Number,
  discount: String,
  isNew: Boolean,
  isFavorite: Boolean,
  favoriteId: Number,
  onClickAdd: Function,
  onClickFavorite: Function,
});
</script>

<template>
  <div
    class="bg-[#f4f5f7] border w-full h-[438px] flex flex-col justify-between relative cursor-pointer"
  >
    <div class="h-[301px] relative">
      <img
        :src="imageUrl"
        alt="product image"
        class="w-full h-full object-cover"
      />

      <!-- Кнопка добавления/удаления из избранного -->
      <img
        v-if="onClickFavorite"
        :src="!isFavorite ? './images/like-1.png' : './images/like-2.png'"
        alt="Like Icon"
        class="absolute top-2 left-10 z-10"
        @click="onClickFavorite"
      />
    </div>
    <!-- Скидка или новинка -->
    <div
      v-if="discount"
      class="absolute top-2 right-2 w-12 h-12 rounded-full flex items-center justify-center bg-[#e97171] text-white text-sm font-medium"
    >
      {{ discount }}
    </div>
    <div
      v-else-if="isNew"
      class="absolute top-2 right-2 w-12 h-12 rounded-full flex items-center justify-center bg-[#2ec1ac] text-white text-sm font-medium"
    >
      NEW
    </div>

    <!-- Прозрачный слой с кнопкой -->
    <div class="absolute inset-0 hover:bg-black/50 transition">
      <button
        class="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-white text-yellow-600 font-semibold w-60 py-3 opacity-0 hover:opacity-100"
        @click="onClickAdd"
      >
        {{ isInCart(id) ? "Remove from Cart" : "Add To Cart" }}
      </button>
    </div>

    <div class="p-4 flex flex-col gap-1">
      <h5 class="text-xl font-semibold text-[#3a3a3a]">{{ title }}</h5>
      <p class="text-sm font-medium text-[#898989]">{{ desc }}</p>
      <div class="flex items-center gap-2 mt-1">
        <h6 class="text-base font-bold text-[#3a3a3a]">
          {{ price.toLocaleString() }}₸
        </h6>
        <p v-if="oldPrice" class="text-sm text-[#b0b0b0] line-through">
          {{ oldPrice.toLocaleString() }}₸
        </p>
      </div>
    </div>
  </div>
</template>
