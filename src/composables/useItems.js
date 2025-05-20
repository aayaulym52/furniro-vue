import { ref } from "vue";
import axios from "axios";
export default function useItems(cart) {
  const items = ref([]);
  const fetchItems = async () => {
    try {
      const { data } = await axios.get(
        "https://f800924d181b5299.mokky.dev/items"
      );
      items.value = data.map((item) => ({
        ...item,
        isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
      }));
    } catch (err) {
      console.error("Ошибка при загрузке товаров:", err);
    }
  };
  const fetchFavorites = async () => {
    try {
      const { data: favorites } = await axios.get(
        "https://f800924d181b5299.mokky.dev/favorites"
      );
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
  const addToFavorite = async (item) => {
    try {
      if (!item.isFavorite) {
        const obj = { item_id: item.id };
        const { data } = await axios.post(
          "https://f800924d181b5299.mokky.dev/favorites",
          obj
        );
        item.isFavorite = true;
        item.favoriteId = data.id;
      } else {
        await axios.delete(
          `https://f800924d181b5299.mokky.dev/favorites/${item.favoriteId}`
        );
        item.isFavorite = false;
        item.favoriteId = null;
      }
    } catch (err) {
      console.error("Ошибка при добавлении в избранное:", err);
    }
  };
  return {
    items,
    fetchItems,
    fetchFavorites,
    addToFavorite,
  };
}
