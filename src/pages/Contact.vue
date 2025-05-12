<script setup>
import PageHeader from "../components/PageHeader.vue";
const contactInfo = [
  {
    icon: "/images/address-icon.png",
    title: "Address",
    lines: ["236 5th SE Avenue, New York NY10000", "United States"],
  },
  {
    icon: "/images/phone-icon.png",
    title: "Phone",
    lines: ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"],
  },
  {
    icon: "/images/time-icon.png",
    title: "Working Time",
    lines: ["Monday–Friday: 9:00 – 22:00", "Saturday–Sunday: 9:00 – 21:00"],
  },
];
</script>

<template>
  <PageHeader pageTitle="Contact" />

  <div class="text-center mt-10 py-10">
    <h2 class="text-3xl font-bold">Get In Touch With Us</h2>
    <p class="mt-4 text-md text-slate-400">
      For More Information About Our Product & Services. Please Feel Free To
      Drop Us An Email. <br />
      Our Staff Always Be There To Help You Out. Do Not Hesitate!
    </p>
  </div>

  <div class="mx-auto w-full max-w-[1200px] px-24 flex justify-between mt-10">
    <div class="flex flex-col gap-6">
      <div
        v-for="(item, index) in contactInfo"
        :key="index"
        class="flex flex-col gap-3"
      >
        <!-- Обёртка для иконки и заголовка на одной линии -->
        <div class="flex items-center gap-3">
          <img :src="item.icon" alt="" width="20px" />
          <h3 class="text-2xl font-semibold">{{ item.title }}</h3>
        </div>

        <div>
          <p v-for="(line, i) in item.lines" :key="i" class="text-base">
            {{ line }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div>
        <p class="text-lg font-semibold mb-4">Your name</p>
        <input
          type="text"
          placeholder="Abc"
          class="w-96 border border-slate-400 py-4 px-10 rounded-lg outline-none"
        />
      </div>
      <div>
        <p class="text-lg font-semibold mb-4">Email Address</p>
        <input
          type="email"
          placeholder="Abc@def.com"
          class="w-96 border border-slate-400 py-4 px-10 rounded-lg outline-none"
        />
      </div>
      <div>
        <p class="text-lg font-semibold mb-4">Subject</p>
        <input
          type="text"
          placeholder="This is an optional"
          class="w-96 border border-slate-400 py-4 px-10 rounded-lg outline-none"
        />
      </div>
      <div>
        <p class="text-lg font-semibold mb-4">Message</p>
        <input
          type="text"
          placeholder="Hi! i’d like to ask about"
          class="w-96 h-32 border border-slate-400 py-10 px-10 rounded-lg outline-none"
        />
      </div>
      <button
        class="w-56 h-14 text-white border py-4 rounded-xl bg-[#B88E2F] hover:bg-lime-500 transition mt-4"
      >
        Submit
      </button>
    </div>
  </div>
</template>
