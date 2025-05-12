<script setup>
import Header from "./components/Header.vue";
import Features from "./components/features.vue";
import Footer from "./components/Footer.vue";

import { provide } from "vue";
import { useCartActions } from "./composables/useCart";

const cartContext = useCartActions(); // вызываем, чтобы получить cart и функции

provide("cart", cartContext); // здесь уже можно вызывать provide()
</script>

<template>
  <div>
    <div class="bg-white w-full m-auto shadow-xl fixed z-20">
      <Header />
    </div>

    <div class="py-20">
      <router-view></router-view>
    </div>
    <Features />
    <Footer />
  </div>
</template>
