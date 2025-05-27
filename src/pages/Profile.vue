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

const showLogin = ref(false);

const isLoggedIn = computed(() => {
  return !!localStorage.getItem("token");
});

function toggleForm() {
  showLogin.value = !showLogin.value;
}
</script>


