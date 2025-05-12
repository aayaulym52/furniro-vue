<script setup>
const emit = defineEmits(["onClickRemove"]);

defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
});
</script>

<template>
  <div class="grid grid-cols-4 items-center border-b py-4">
    <!-- Product -->
    <div class="flex items-center gap-4 col-span-1">
      <img :src="imageUrl" alt="title" class="w-20 h-20 object-cover rounded" />
      <span>{{ title }}</span>
    </div>

    <!-- Price -->
    <div class="text-gray-700">{{ price.toLocaleString() }}₸</div>

    <!-- Quantity -->
    <div>
      <input type="number" value="1" class="w-12 border rounded text-center" />
    </div>

    <!-- Subtotal + Delete -->
    <div class="flex justify-between">
      <span>{{ price.toLocaleString() }}₸</span>
      <button>
        <img
          @click="emit('onClickRemove', id)"
          src="/images/vector-trash.png"
          class="w-5 h-5 transition"
        />
      </button>
    </div>
  </div>
</template>
