<template>
    <FilterGroup
      :options="categories"
      :selected="modelValue"
      @update:selected="updateCategory"
    />
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  import FilterGroup from '../molecules/FilterGroup.vue';
  
  const props = defineProps({
    categories: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
  });
  
  const emits = defineEmits(['update:modelValue']);
  
  const updateCategory = (category) => {
    emits('update:modelValue', category);
  };
  </script>
  