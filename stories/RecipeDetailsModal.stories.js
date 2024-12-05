import RecipeDetailsModal from "@/components/templates/RecipeDetailsModal.vue";

export default {
  title: "Templates/RecipeDetailsModal",
  component: RecipeDetailsModal,
  tags: ["autodocs"],
};

const sampleData = {
  image:
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
  title: "Delicious Pancakes",
  description: "A simple recipe for fluffy pancakes.",
  ingredients: ["2 cups flour", "2 eggs", "1 cup milk", "1 tbsp sugar"],
  instructions: [
    "Mix all ingredients.",
    "Heat a pan over medium heat.",
    "Pour batter onto the pan.",
    "Cook until golden brown on both sides.",
  ],
};

export const Default = {
  args: {
    visible: true,
    ...sampleData,
  },
};
