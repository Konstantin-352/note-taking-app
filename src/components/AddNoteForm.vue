<template>
  <div
    ref="formRef"
    @click="isVisibleFullForm = true"
    class="max-w-xl mx-auto shadow-lg border border-slate-400 rounded-lg overflow-hidden hover:border-white ease-in-out duration-200"
  >
    <MyTextarea v-if="isVisibleFullForm" placeholder="Enter title" v-model="titleTextarea" />
    <MyTextarea v-model="textTextarea" class="text-sm" placeholder="Note..." />
    <div v-if="isVisibleFullForm" class="flex justify-end gap-x-2 px-3 py-1">
      <MyButton title="Close" @click.stop="handleSaveNote" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from '@/components/ui/MyButton.vue';
import MyTextarea from '@/components/ui/MyTextarea.vue';
import { onMounted, onUnmounted, ref } from 'vue';

interface AddNoteFormEmits {
  (e: 'saveNote', title?: string, text?: string): void;
}

const emit = defineEmits<AddNoteFormEmits>();

const isVisibleFullForm = ref(false);
const formRef = ref<HTMLElement | null>(null);
const titleTextarea = ref('');
const textTextarea = ref('');

const handleClickOutsideForm = (e: MouseEvent) => {
  const target = e.target;

  if (!(target instanceof Element)) {
    return;
  }

  if (!isVisibleFullForm.value || !formRef.value || formRef.value.contains(target)) {
    return;
  }

  handleSaveNote();
};

const handleSaveNote = () => {
  isVisibleFullForm.value = false;
  titleTextarea.value = titleTextarea.value.trim();
  textTextarea.value = textTextarea.value.trim();

  if (!titleTextarea.value && !textTextarea.value) {
    return;
  }

  emit('saveNote', titleTextarea.value, textTextarea.value);
  titleTextarea.value = '';
  textTextarea.value = '';
};

onMounted(() => {
  window.addEventListener('click', handleClickOutsideForm);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutsideForm);
});
</script>
