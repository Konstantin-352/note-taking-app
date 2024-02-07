<template>
  <input
    v-model="modelValue"
    type="text"
    class="w-full bg-transparent py-2 px-3 focus:outline-none text-white placeholder-slate-300 text-base leading-5"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
interface MyInputProps {
  placeholder?: string;
}

defineProps<MyInputProps>();
const modelValue = defineModel<string>({ required: true });
</script>
