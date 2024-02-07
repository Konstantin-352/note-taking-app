<template>
  <button
    class="flex items-center gap-1 text-gray-500 text-base h-9 rounded leading-5 hover:bg-slate-200 ease-in-out duration-200"
    :class="classNames"
  >
    <span
      v-if="$slots.default"
      class="text-lg"
    >
      <slot></slot>
    </span>
    <span v-if="title">
      {{ title }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
interface MyBtnProps {
  shape?: 'default' | 'circle';
  title?: string;
}

const props = withDefaults(defineProps<MyBtnProps>(), {
  shape: 'default',
});

const classNames = computed(() => {
  return props.shape === 'circle' ? 'rounded-full min-w-9 text-center px-2' : 'px-4';
});
</script>