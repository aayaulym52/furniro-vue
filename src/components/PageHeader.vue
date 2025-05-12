<script setup>
defineProps({
  pageTitle: String,
  homeText: {
    type: String,
    default: "Home",
  },
});
</script>

<template>
  <div class="relative w-full pt-5">
    <img src="/images/shop.png" alt="shop" class="w-full h-auto" />
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center text-black">
        <img src="/images/logo.png" alt="arrow" width="36" class="mx-auto" />
        <h1 class="text-5xl font-semibold">{{ pageTitle }}</h1>
        <div class="flex items-center justify-center mt-4 text-md">
          <span class="text-gray-800 font-bold">{{ homeText }}</span>
          <img src="/images/shop-vector.png" alt="arrow" class="w-4 h-4 mx-2" />
          <span class="text-gray-700 font-medium">{{ pageTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
