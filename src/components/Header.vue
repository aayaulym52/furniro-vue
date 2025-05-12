<template>
  <header
    class="flex items-center justify-between border-b border-slate-200 px-10 py-8 bg-white-400"
  >
    <!-- Логотип и название -->
    <div class="flex items-center gap-4">
      <img width="50px" height="32px" src="/images/logo.png" alt="Logo" />
      <h2 class="text-3xl font-bold">Furniro</h2>
    </div>

    <!-- Меню навигации -->
    <ul class="flex items-center gap-14 cursor-pointer">
      <router-link to="/">
        <li class="text-lg font-medium text-gray-500 hover:text-black">Home</li>
      </router-link>
      <li class="text-lg font-medium text-gray-500 hover:text-black">About</li>
      <router-link to="/shop">
        <li class="text-lg font-medium text-gray-500 hover:text-black">Shop</li>
      </router-link>
      <router-link to="/contact">
        <li class="text-lg font-medium text-gray-500 hover:text-black">
          Contact
        </li>
      </router-link>
    </ul>

    <!-- Иконки с переходами -->
    <ul class="flex items-center gap-8 cursor-pointer">
      <router-link to="/profile"
        ><li class="text-slate-200 hover:text-black">
          <img src="/images/icon1.svg" alt="Icon-1" />
        </li>
      </router-link>
      <!-- Иконка перехода на страницу Favorites -->
      <router-link to="/favorites">
        <li class="text-slate-200 hover:text-black">
          <img src="/images/icon2.svg" alt="Icon-3" />
        </li>
      </router-link>
      <!-- Иконка перехода на страницу Profile -->

      <router-link to="/cart">
        <li class="text-slate-200 hover:text-black">
          <img src="/images/icon3.svg" alt="Icon-4" />
        </li>
      </router-link>
    </ul>
  </header>
</template>
