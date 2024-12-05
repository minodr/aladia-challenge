<template>
  <div class="recipe-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <RecipeCard v-for="recipe in recipes" :key="recipe.id" v-bind="recipe"
      @select-recipe="(recipe) => { console.log('RecipeList received select-recipe', recipe); $emit('select-recipe', recipe); }" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import RecipeCard from '../molecules/RecipeCard.vue';

defineProps({
  recipes: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>