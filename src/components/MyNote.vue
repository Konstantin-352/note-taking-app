<template>
  <div
    class="group min-h-24 border border-transparent rounded-lg text-white bg-gray-400 relative hover:border-white ease-in-out duration-200"
  >
    <div class="max-h-72 overflow-hidden group-hover:overflow-y-auto py-3 px-3">
      <div v-if="title" class="text-base hyphens-auto pr-7" :class="{ 'mb-2': text }">
        <pre>{{ title }}</pre>
      </div>
      <div v-if="text" class="text-sm hyphens-auto" :class="{ 'pr-7': !title }">
        <pre>{{ text }}</pre>
      </div>
    </div>
    <MyButton
      shape="circle"
      class="absolute top-1 right-1 opacity-0 ease-in-out duration-200 group-hover:opacity-100"
      @click="$emit('deleteNote', id)"
    >
      <DeleteIcon />
    </MyButton>
  </div>
</template>

<script setup lang="ts">
import DeleteIcon from '@/components/icons/DeleteIcon.vue';
import MyButton from '@/components/ui/MyButton.vue';

interface MyNoteProps {
  id: string;
  title?: string;
  text?: string;
}

interface MyNoteEmits {
  (e: 'deleteNote', id: string): void;
}

defineEmits<MyNoteEmits>();
defineProps<MyNoteProps>();
</script>
