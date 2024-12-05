import RecipeList from "~/components/organisms/RecipeList.vue";

export default {
  title: "Components/RecipeList",
  component: RecipeList,
  tags: ["autodocs"],
};

const sampleRecipes = [
  {
    id: 1,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
    title: "Delicious Pancakes",
    description: "A simple recipe for fluffy pancakes.",
  },
  {
    id: 2,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
    title: "Classic Burger",
    description: "An easy recipe for a classic beef burger.",
  },
  {
    id: 3,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
    title: "Spaghetti Bolognese",
    description: "A traditional Italian pasta dish.",
  },
];

export const Default = {
  args: {
    recipes: sampleRecipes,
  },
};
