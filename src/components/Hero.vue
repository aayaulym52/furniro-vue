<template>
  <div
    class="w-full h-screen bg-cover bg-center flex items-center justify-center pt-12"
    style="background-image: url('/images/header-banner.png')"
  >
    <div class="flex flex-wrap w-full justify-center items-center">
      <div class="hidden md:block basis-1/2"></div>
      <div class="basis-full md:basis-1/2">
        <div
          class="rounded-lg p-8 text-left max-w-xl"
          style="background-color: #fff3e3"
        >
          <h5
            class="text-[#333333] text-sm font-semibold tracking-widest mb-4 uppercase"
          >
            New arrival
          </h5>
          <h1 class="text-[#b88e2f] text-6xl font-bold leading-tight mb-4">
            Discover Our <br />
            New Collection
          </h1>
          <p class="text-[#333333] text-base font-medium leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <router-link to="/shop">
            <button
              class="text-white text-sm font-bold uppercase py-4 px-10 rounded-xs transition-transform hover:scale-110"
              style="background-color: #b88e2f"
            >
              Buy Now
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
