<script setup>
import { inject } from "vue";

const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = inject("cart");
</script>

<template>
  <div class="flex-1" v-auto-animate>
    <div class="grid grid-cols-4 bg-[#F9F1E7] px-4 py-3 font-semibold">
      <span>Product</span>
      <span>Price</span>
      <span>Quantity</span>
      <span>Subtotal</span>
    </div>

    <div
      v-for="item in cart"
      :key="item.id"
      class="grid grid-cols-4 items-center border-b py-4"
    >
      <div class="flex items-center gap-4 col-span-1">
        <img
          :src="item.imageUrl"
          :alt="item.title"
          class="w-20 h-20 object-cover rounded"
        />
        <span>{{ item.title }}</span>
      </div>

      <div class="text-gray-700">{{ item.price.toLocaleString() }}₸</div>

      <div class="flex items-center bg-[#F9F1E7] rounded-full w-max select-none">
        <button
          @click="decreaseQuantity(item.id)"
          class="text-xl px-3 hover:text-green-500 transition cursor-pointer"
          aria-label="Уменьшить количество"
        >
          −
        </button>
        <span class="px-4 font-medium">{{ item.quantity }}</span>
        <button
          @click="increaseQuantity(item.id)"
          class="text-xl px-3 hover:text-green-500 transition cursor-pointer"
          aria-label="Увеличить количество"
        >
          +
        </button>
      </div>

      <div class="flex justify-between">
        <span>{{ (item.price * item.quantity).toLocaleString() }}₸</span>
        <button @click="removeFromCart({ id: item.id })">
          <img
            src="/images/vector-trash.png"
            class="w-5 h-5 opacity-70 hover:opacity-100"
            alt="Удалить"
          />
        </button>
      </div>
    </div>
  </div>
</template>

