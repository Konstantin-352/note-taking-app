<template>
  <button
    class="flex items-center gap-1 text-white text-base h-9 rounded leading-5 border border-transparent hover:border-white ease-in-out duration-200"
    :class="classNames"
  >
    <!-- v-if was used to not render span when no slot had been transferred -->
    <!--
    span is used to style the icon inside the component so that you don't have to do it every time
    you pass it into the component
    -->
    <span v-if="$slots.default" class="text-lg">
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
