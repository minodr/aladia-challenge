<template>
    <el-dialog :model-value="computedVisible" @update:model-value="handleVisibleChange" width="50%" :title="title">
        <RecipeDetails 
            :image="image" 
            :title="title" 
            :description="description" 
            :ingredients="ingredients"
            :instructions="instructions" 
        />
        <template #footer>
            <el-button @click="handleClose">Close</el-button>
        </template>
    </el-dialog>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps, defineEmits } from 'vue';
import RecipeDetails from './RecipeDetails.vue';

// Define props
const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    instructions: {
        type: Array,
        required: true,
    },
});

// Define emits
const emits = defineEmits(['update:visible']);

// Computed property for `v-model`
const computedVisible = computed({
    get: () => props.visible,
    set: (value) => emits('update:visible', value),
});

// Optional method to handle close action
const handleClose = () => {
    emits('update:visible', false);
};
</script>
