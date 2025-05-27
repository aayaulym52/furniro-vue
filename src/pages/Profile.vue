<template>
  <div>
    <div v-if="!isLoggedIn">
      <Register v-if="!showLogin" @switch="toggleForm" />
      <Login v-else @switch="toggleForm" />
    </div>

    <div v-else class="mt-15 py-20">
      <p>My Orders</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";

export default {
  components: {
    Register,
    Login,
    Favorites,
  },
  data() {
    return {
      showLogin: false,
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

