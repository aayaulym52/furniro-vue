import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import "./assets/style.css";
import App from "./App.vue";

import Home from "./pages/Home.vue";
import Contact from "./pages/Contact.vue";
import Shop from './pages/Shop.vue'
import Favorites from "./pages/Favorites.vue";
import Cart from "./pages/Cart.vue";
import Profile from "./pages/Profile.vue";



const app = createApp(App);
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/favorites", name: "Favorites", component: Favorites },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/shop", name: "Shop", component: Shop },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);
app.use(autoAnimatePlugin);

app.mount("#app");
