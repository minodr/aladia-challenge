<template>
  <div class="recipe-card bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
    @click="() => { console.log('RecipeCard clicked', recipe); $emit('select-recipe', recipe); }">
    <img :src="image" alt="Recipe Image" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-2">{{ title }}</h2>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  instructions: {
    type: Array,
    required: true,
  },
});

const recipe = computed(() => ({
  id: props.id,
  image: props.image,
  title: props.title,
  description: props.description,
  category: props.category,
  ingredients: props.ingredients,
  instructions: props.instructions,
}));
</script>