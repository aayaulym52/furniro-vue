<script setup>
import { inject, ref, computed } from "vue";
import axios from "axios";
import CartItemList from "../components/CartItemList.vue";
import { inject, ref, computed } from "vue";
import CartItem from "../components/CartItem.vue";
import PageHeader from "../components/PageHeader.vue";

const { cart } = inject("cart");

const totalPrice = computed(() =>
  cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
);
const isCreating = ref(false);

const orderId = ref(null);

const createOrder = async () => {
  try {
    isCreating.value = true;

    const { data } = await axios.post(
      `https://f800924d181b5299.mokky.dev/orders`,
      {
        items: cart.value,
        totalPrice: totalPrice.value,
      }
    );

    cart.value = [];
    orderId.value = data.id;
  } catch (err) {
    console.log(err);
  } finally {
    isCreating.value = false;
  }
};

const cartIsEmpty = computed(() => cart.value.length === 0);
const buttonDisabled = computed(() => isCreating.value || cartIsEmpty.value);
</script>

<template>
  <PageHeader pageTitle="Cart" />
  <div
    v-if="cartIsEmpty || orderId"
    class="flex flex-col items-center gap-4 mt-20 h-screen"
  >
    <h1 class="font-bold text-2xl">
      {{ orderId ? `Your order #${orderId} is confirmed!` : "Cart is empty!" }}
    </h1>
    <p class="text-md text-slate-500">
      {{
        orderId
          ? "Thank you for your purchase!"
          : "Add items to your cart to continue."
      }}
    </p>
    <img
      :src="
        orderId ? '/images/order-success-icon.png' : '/images/package-icon.png'
      "
      alt=""
      width="120"
      height="100"
    />
  </div>

  <div
    v-else
    class="container w-full py-14 m-auto flex flex-col lg:flex-row gap-8 px-12"
  >
    <CartItemList />
    <CartItem />
    <div
      class="w-full max-w-sm mx-auto bg-[#F9F1E7] p-10 rounded text-center h-fit"
    >
      <h2 class="text-3xl font-bold mb-10">Cart Totals</h2>

      <div class="mb-4 flex justify-center items-center gap-8">
        <span class="text-lg font-semibold">Subtotal</span>
        <span class="text-gray-400 text-md"
          >{{ totalPrice.toLocaleString() }}₸</span
        >
      </div>

      <div class="mb-6 flex justify-center items-center gap-8">
        <span class="text-lg font-semibold">Total</span>
        <span class="text-yellow-600 text-lg font-semibold"
          >{{ totalPrice.toLocaleString() }}₸</span
        >
      </div>
      <router-link to="/checkout">
        <button
          class="border border-black py-2 px-10 rounded-xl hover:bg-black hover:text-white transition"
        >
          Checkout
        </button></router-link
      >
    </div>
  </div>
</template>
