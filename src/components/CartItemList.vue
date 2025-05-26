<script setup>
import { inject } from "vue";
import CartItem from "./CartItem.vue";

const { cart, removeFromCart } = inject("cart");
</script>

<template>
  <div class="flex-1" v-auto-animate>
    <div class="grid grid-cols-4  bg-[#F9F1E7] px-4 py-3 font-semibold">
      <span>Product</span>
      <span>Price</span>
      <span>Quantity</span>
      <span>Subtotal</span>
    </div>

    <CartItem
      v-for="item in cart"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :price="item.price"
      :image-url="item.imageUrl"
      @on-click-remove="(id) => removeFromCart({ id })"
    />
  </div>
</template>
