<script setup>
const items = [
  { img: "/images/col1.png", title: "Dining" },
  { img: "/images/col2.png", title: "Living" },
  { img: "/images/col3.png", title: "Bedroom" },
];
</script>

<template>
  <div class="text-center py-10 mt-10">
    <h2 class="text-2xl md:text-3xl font-bold">Browse The Range</h2>
    <p class="text-gray-600 text-base md:text-lg mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

    <div class="flex flex-wrap justify-center gap-6 py-6 px-4">
      <div class="max-w-[480px] p-4" v-for="(item, i) in items" :key="i">
        <img :src="item.img" alt="" class="w-full block rounded-lg" />
        <h5 class="text-xl font-semibold text-gray-800 mt-3">
          {{ item.title }}
        </h5>
      </div>
    </div>
  </div>
</template>
