import { ref, watch } from "vue";

// Загружаем корзину из localStorage при запуске
const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
const cart = ref(storedCart);

// Проверка есть ли товар в корзине
const isInCart = (id) => cart.value.some((item) => item.id === id);

// Добавить в корзину
const addToCart = (item) => {
  if (!isInCart(item.id)) {
    cart.value.push(item);
  }
};

// Удалить из корзины
const removeFromCart = (item) => {
  cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id);
};

// Кнопка плюс — добавляет или удаляет
const onClickAddPlus = (item) => {
  isInCart(item.id) ? removeFromCart(item) : addToCart(item);
};

// Следим за корзиной и сохраняем в localStorage
watch(
  cart,
  () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  },
  { deep: true }
);

// Экспорт
export function useCartActions() {
  return {
    cart,
    addToCart,
    removeFromCart,
    onClickAddPlus,
    isInCart, // 
  };
}
