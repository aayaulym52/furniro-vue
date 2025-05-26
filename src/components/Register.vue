<template>
  <div class="mt-15 pt-20">
    <h2 class="text-3xl font-bold text-center mb-5">
      Create your free account
    </h2>
    <form @submit.prevent="register">
      <div class="p-8 flex flex-col items-center gap-3">
        <input
          class="w-80 py-3 rounded-lg outline-none p-10 bg-zinc-100 border border-slate-300 hover:border-slate-400 transition"
          type="text"
          placeholder="Full Name"
          v-model="name"
        />
        <input
          class="w-80 py-3 rounded-lg outline-none p-10 bg-zinc-100 border border-slate-300 hover:border-slate-400 transition"
          type="tel"
          placeholder="Phone"
          v-model="phone"
        />
        <input
          class="w-80 py-3 rounded-lg outline-none p-10 bg-zinc-100 border border-slate-300 hover:border-slate-400 transition"
          type="email"
          placeholder="Email Address"
          v-model="email"
        />
        <input
          class="w-80 py-3 rounded-lg outline-none p-10 bg-zinc-100 border border-slate-300 hover:border-slate-400 transition"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="text-center">
        <button
          class="w-80 transition bg-lime-500 p-14 rounded-lg py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
          type="submit"
        >
          Create account
        </button>
      </div>
    </form>
    <p class="text-center mt-4">
      Already have an account?
      <button @click="$emit('switch')" class="text-blue-500">Login</button>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const name = ref("");
const phone = ref("");
const email = ref("");
const password = ref("");

defineEmits(["switch"]);

const register = async () => {
  if (!name.value || !phone.value || !email.value || !password.value) {
    alert("Пожалуйста, заполните все поля!");
    return;
  }

  try {
    const res = await fetch("https://f800924d181b5299.mokky.dev/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: name.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
      }),
    });

    const result = await res.json();

    if (res.ok) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("currentUser", JSON.stringify(result.user));
      alert("Регистрация прошла успешно!");
      router.push("/");
    } else {
      alert("Ошибка: " + (result.message || "Не удалось зарегистрироваться"));
    }
  } catch (err) {
    alert("Ошибка регистрации: " + err.message);
  }
};
</script>
