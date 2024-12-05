<template>
  <div class="container mx-auto p-6">
    <CategoryFilter :categories="categories" v-model="selectedCategory" class="mb-6" />
    <RecipeDetailsModal v-model:visible="isModalVisible" v-bind="selectedRecipe" />
    <RecipeList :recipes="paginatedRecipes" @select-recipe="openRecipeModal" />
    <RecipePagination :total="filteredRecipes.length" :page-size="pageSize" v-model="currentPage" class="mt-6" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CategoryFilter from '@/components/organisms/CategoryFilter.vue';
import RecipeList from '@/components/organisms/RecipeList.vue';
import RecipePagination from '@/components/molecules/RecipePagination.vue';
import RecipeDetailsModal from '@/components/templates/RecipeDetailsModal.vue';

// Import the recipes JSON file
import recipesData from '@/assets/recipes.json';

const categories = ref(['All', 'Desserts', 'Main Course']);
const selectedCategory = ref('All');
const currentPage = ref(1);
const pageSize = 6;
const isModalVisible = ref(false);
const selectedRecipe = ref(null);

// Use the imported JSON data
const allRecipes = ref(recipesData);

const filteredRecipes = computed(() => {
  if (selectedCategory.value === 'All') {
    return allRecipes.value;
  }
  return allRecipes.value.filter(
    (recipe) => recipe.category === selectedCategory.value
  );
});

const paginatedRecipes = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredRecipes.value.slice(start, start + pageSize);
});

const openRecipeModal = (recipe) => {
  console.log("the received recipe", recipe)
  selectedRecipe.value = recipe;
  isModalVisible.value = true;
};
</script>
