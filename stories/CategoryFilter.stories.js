import CategoryFilter from '@/components/organisms/CategoryFilter.vue';

export default {
  title: 'Organisms/CategoryFilter',
  component: CategoryFilter,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    categories: ['All', 'Vegetarian', 'Vegan', 'Desserts'],
    modelValue: 'All',
  },
};
