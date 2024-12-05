import FilterButton from '@/components/atoms/FilterButton.vue';

export default {
  title: 'Atoms/FilterButton',
  component: FilterButton,
  tags: ['autodocs'],
};

export const Active = {
  args: {
    label: 'Vegetarian',
    isActive: true,
  },
};

export const Inactive = {
  args: {
    label: 'Vegetarian',
    isActive: false,
  },
};
