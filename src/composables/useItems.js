// Импортируем реактивную переменную ref из Vue и библиотеку axios для HTTP-запросов
import { ref } from "vue";
import axios from "axios";
// Создаём и экспортируем функцию useItems, в которую передаётся корзина (cart)
export default function useItems(cart) {
  // Создаём реактивный массив items, который будет содержать список товаров
  const items = ref([]);
  // Асинхронная функция для загрузки товаров с сервера
  const fetchItems = async () => {
    try {
      // Отправляем GET-запрос на сервер, получаем список всех товаров
      const { data } = await axios.get(
        "https://f800924d181b5299.mokky.dev/items"
      );
      // Обновляем список товаров, добавляя каждому свойство isAdded,
      // которое показывает, находится ли товар в корзине
      items.value = data.map((item) => ({
        ...item,
        isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
      }));
    } catch (err) {
      console.error("Ошибка при загрузке товаров:", err);
    }
  };
  // Асинхронная функция для загрузки списка избранных товаров
  const fetchFavorites = async () => {
    try {
      const { data: favorites } = await axios.get(
        "https://f800924d181b5299.mokky.dev/favorites"
      );
      // Обновляем товары, добавляя isFavorite и favoriteId,
      // если товар найден в списке избранных
      items.value = items.value.map((item) => {
        const favorite = favorites.find((fav) => fav.item_id === item.id);
        return favorite
          ? { ...item, isFavorite: true, favoriteId: favorite.id }
          : item;
      });
    } catch (err) {
      console.error("Ошибка при загрузке избранного:", err);
    }
  };
  // Асинхронная функция для добавления/удаления товара в избранное
  const addToFavorite = async (item) => {
    try {
      if (!item.isFavorite) {
        // Если товар не в избранном отправляем POST-запрос для добавления
        const obj = { item_id: item.id };
        const { data } = await axios.post(
          "https://f800924d181b5299.mokky.dev/favorites",
          obj
        );
        // Обновляем свойства товара
        item.isFavorite = true;
        item.favoriteId = data.id;
      } else {
        // Если товар уже в избранном — удаляем его с сервера
        await axios.delete(
          `https://f800924d181b5299.mokky.dev/favorites/${item.favoriteId}`
        );
        // Обновляем свойства товара
        item.isFavorite = false;
        item.favoriteId = null;
      }
    } catch (err) {
      console.error("Ошибка при добавлении в избранное:", err);
    }
  };
  // Возвращаем всё, что нужно для использования в компонентах
  return {
    items,
    fetchItems,
    fetchFavorites,
    addToFavorite,
  };
}
