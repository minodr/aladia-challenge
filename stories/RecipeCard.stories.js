import RecipeCard from "~/components/molecules/RecipeCard.vue";

export default {
  title: "Components/RecipeCard",
  component: RecipeCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Displays a summary of a recipe, including an image, title, and description.",
      },
    },
  },
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    category: { control: "text" },
    ingredients: { control: "object" },
    instructions: { control: "object" },
  },
};

export const Default = {
  args: {
    id: 1,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
    title: "Delicious Pancakes",
    description: "A simple recipe for fluffy pancakes.",
    category: "Desserts",
    ingredients: ["2 cups flour", "2 eggs", "1 cup milk", "1 tbsp sugar"],
    instructions: [
      "Mix all ingredients.",
      "Heat a pan over medium heat.",
      "Pour batter onto the pan.",
      "Cook until golden brown on both sides.",
    ],
  },
};
