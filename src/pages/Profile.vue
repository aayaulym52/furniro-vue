<template>
  <div>
    <div v-if="!isLoggedIn">
      <!-- Показываем либо страницу регистрации, либо входа в зависимости от состояния -->
      <Register v-if="!showLogin" @switch="toggleForm" />
      <Login v-else @switch="toggleForm" />
    </div>

    <div v-else class="mt-15 py-20">
      <ul class="flex gap-10">
        <li>Orders</li>
        <li>Favorites</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import Favorites from "./Favorites.vue";

export default {
  components: {
    Register,
    Login,
    Favorites,
  },
  data() {
    return {
      showLogin: false, // переключатель между формами
    };
  },
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem("token");
    },
  },
  methods: {
    toggleForm() {
      this.showLogin = !this.showLogin;
    },
  },
};
</script>
