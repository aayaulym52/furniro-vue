import { ref, watch } from "vue";

const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
const cart = ref(storedCart);

const isInCart = (id) => cart.value.some((item) => item.id === id);

const addToCart = (item) => {
  if (!isInCart(item.id)) {
    cart.value.push({ ...item, quantity: item.quantity || 1 });
  }
};
const removeFromCart = (item) => {
  cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id);
};

const increaseQuantity = (id) => {
  const item = cart.value.find((item) => item.id === id);
  if (item) item.quantity++;
};

const decreaseQuantity = (id) => {
  const item = cart.value.find((item) => item.id === id);
  if (item) {
    item.quantity--;
    if (item.quantity <= 0) {
      removeFromCart(item);
    }
  }
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
    increaseQuantity,
    decreaseQuantity,
    onClickAddPlus,
    isInCart,
  };
}
