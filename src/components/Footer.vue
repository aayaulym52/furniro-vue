<template>
  <footer class="border-t border-gray-300 bg-white py-10 px-20 mt-10">
    <div class="flex flex-wrap justify-between gap-8">
      <div class="flex-1 min-w-[200px]">
        <h5 class="text-black text-2xl font-bold pb-2">Funiro.</h5>
        <p class="text-gray-500 text-md">
          236 5th SE Avenue, New York <br />
          NY10000 United States
        </p>
      </div>

      <div class="flex-1 min-w-[200px]">
        <h6 class="text-gray-500 text-lg font-medium mb-2">Links</h6>
        <ul class="list-none p-0">
          <li class="py-2">
            <a href="#" class="text-black text-lg font-medium">Home</a>
          </li>
          <li class="py-2">
            <a href="#" class="text-black text-lg font-medium">Shop</a>
          </li>
          <li class="py-2">
            <a href="#" class="text-black text-lg font-medium">About</a>
          </li>
          <li class="py-2">
            <a href="#" class="text-black text-lg font-medium">Contact</a>
          </li>
        </ul>
      </div>

      <div class="flex-1 min-w-[200px]">
        <h6 class="text-gray-500 text-lg font-medium mb-2">Help</h6>
        <ul class="list-none p-0">
          <li class="py-2">
            <a href="#" class="text-black text-lg font-medium"
              >Payment Options</a
            >
          </li>
          <li class="py-2">
            <a href="#" class="text-black text-lg font-medium">Returns</a>
          </li>
          <li class="py-2">
            <a href="#" class="text-black text-lg font-medium"
              >Privacy Policies</a
            >
          </li>
        </ul>
      </div>

      <div class="flex-1 min-w-[200px]">
        <h6 class="text-gray-500 text-lg font-medium mb-2">Newsletter</h6>
        <form class="flex items-center">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            class="flex-1 border-b-2 border-black text-black text-sm py-1 placeholder:text-gray-400 outline-none"
          />
          <button
            type="submit"
            class="ml-4 text-black text-sm font-medium border-b-2 border-black py-1 uppercase"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div
      class="border-t border-gray-300 mt-8 pt-2 text-left text-sm text-black"
    >
      <p>2023 Funiro. All rights reserved</p>
    </div>
  </footer>
</template>
