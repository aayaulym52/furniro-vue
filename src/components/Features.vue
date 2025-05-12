<script setup>
const features = [
  {
    icon: "/images/icon-1.png",
    title: "High Quality",
    subtitle: "crafted from top materials",
  },
  {
    icon: "/images/icon-2.png",
    title: "Warranty Protection",
    subtitle: "Over 2 years",
  },
  {
    icon: "/images/icon-3.png",
    title: "Free Shipping",
    subtitle: "Order over 150 $",
  },
  {
    icon: "/images/icon-4.png",
    title: "24 / 7 Support",
    subtitle: "Dedicated support",
  },
];
</script>

<template>
  <div class="w-full h-auto bg-[#F9F1E7] py-10">
    <div class="max-w-[1400px] mx-auto grid grid-cols-4 gap-8 px-6">
      <div
        v-for="(item, index) in features"
        :key="index"
        class="flex items-center gap-4"
      >
        <img :src="item.icon" alt="" class="w-[60px] shrink-0" />
        <div>
          <h2 class="text-xl font-semibold">{{ item.title }}</h2>
          <span class="text-slate-500 font-medium">{{ item.subtitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
