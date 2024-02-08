<template>
  <textarea
    ref="textarea"
    v-model="modelValue"
    class="block w-full resize-none bg-transparent py-2 px-3 focus:outline-none text-white placeholder-slate-300 text-base leading-5"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
import { onUpdated, ref } from 'vue';

interface MyTextareaProps {
  placeholder?: string;
}

defineProps<MyTextareaProps>();
const modelValue = defineModel<string>({ required: true });
const textarea = ref<HTMLTextAreaElement | null>(null);
const MAX_HEIGHT = 500;

const resize = () => {
  if (!textarea.value) {
    return;
  }

  textarea.value.style.height = 'auto';

  const height =
    textarea.value.scrollHeight > MAX_HEIGHT ? MAX_HEIGHT : textarea.value.scrollHeight;
  textarea.value.style.height = height + 'px';
};

onUpdated(() => {
  resize();
});
</script>
