<template>
    <div class="flex space-x-2">
        <FilterButton v-for="option in options" :key="option" :label="option" :isActive="option === selected"
            @click="selectOption(option)" />
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import FilterButton from '../atoms/FilterButton.vue';

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    selected: {
        type: String,
        default: '',
    },
});

const emits = defineEmits(['update:selected']);

const selectOption = (option) => {
    emits('update:selected', option);
};
</script>