<template>
    <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
        :hide-on-single-page="true" layout="prev, pager, next" :total="total"
        class="custom-pagination flex items-center justify-center space-x-4 border-gray-200">
    </el-pagination>
</template>

<script setup>
import { ref, watch } from 'vue';
import { ElPagination } from 'element-plus';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    total: {
        type: Number,
        required: true,
    },
    pageSize: {
        type: Number,
        default: 10,
    },
    modelValue: {
        type: Number,
        default: 1,
    },
});

const emits = defineEmits(['update:modelValue']);

const currentPage = ref(props.modelValue);

watch(
    () => props.modelValue,
    (newVal) => {
        currentPage.value = newVal;
    }
);

const handleCurrentChange = (page) => {
    emits('update:modelValue', page);
};
</script>

<style>
/* Custom styles to fix vertical alignment */
.custom-pagination>.el-pager {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    /* Add spacing between numbers */
}

.custom-pagination>.el-pager span,
.custom-pagination>.el-pager button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* Change cursor to pointer */
    transition: all 0.2s ease-in-out;
    /* Smooth transition */
}

/* Hover effect for numbers and buttons */
.custom-pagination>.el-pager span:hover,
.custom-pagination>.el-pager button:hover {
    background-color: #f3f4f6;
    /* Light gray background on hover */
    color: #1f2937;
    /* Darker text color */
    border-radius: 4px;
    /* Add rounded corners */
}
</style>
