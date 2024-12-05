<template>
    <button :class="[
        'px-md py-sm rounded-full text-sm font-medium',
        isActive
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-gray-700',
    ]" @click="$emit('click')">
        {{ label }}
    </button>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
});
</script>