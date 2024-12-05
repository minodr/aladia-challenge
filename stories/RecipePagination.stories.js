import RecipePagination from '~/components/molecules/RecipePagination.vue';

export default {
  title: 'Components/RecipePagination',
  component: RecipePagination,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    total: 100,
    pageSize: 10,
    modelValue: 1,
  },
};
