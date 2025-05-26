import { ref, watch } from "vue";

const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
const cart = ref(storedCart);
const isInCart = (id) => cart.value.some((item) => item.id === id);
const addToCart = (item) => {
  if (!isInCart(item.id)) {
    cart.value.push(item);
  }
};
const removeFromCart = (item) => {
  cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id);
};
const onClickAddPlus = (item) => {
  isInCart(item.id) ? removeFromCart(item) : addToCart(item);
};
watch(
  cart,
  () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  },
  { deep: true }
);

export function useCartActions() {
  return {
    cart,
    addToCart,
    removeFromCart,
    onClickAddPlus,
    isInCart, 
  };
}
