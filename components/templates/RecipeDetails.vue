<template>
  <div class="recipe-details max-h-[450px] overflow-y-scroll w-full px-5">
    <img :src="image" alt="Recipe Image" class="w-full h-64 object-cover rounded-lg" />
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-4">{{ title }}</h1>
      <p class="text-gray-700 mb-6">{{ description }}</p>
      <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul class="list-disc list-inside mb-6">
        <li v-for="(ingredient, index) in ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
      <h2 class="text-2xl font-semibold mb-2">Instructions</h2>
      <ol class="list-decimal list-inside">
        <li v-for="(step, index) in instructions" :key="index">
          {{ step }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
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
  ingredients: {
    type: Array,
    required: true,
    default: () => [],
  },
  instructions: {
    type: Array,
    required: true,
    default: () => [],
  },
});

console.log("Inside recipe details", props.description)

</script>