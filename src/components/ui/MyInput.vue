<template>
  <input
    type="text"
    class="w-full py-2 px-3 focus:outline-none text-gray-500 text-base leading-5"
    :placeholder="placeholder"
  >
</template>

<script setup lang="ts">
interface MyInputProps {
  placeholder?: string;
}

defineProps<MyInputProps>()
</script>