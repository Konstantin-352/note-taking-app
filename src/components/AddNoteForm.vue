<template>
  <div
    ref="formRef"
    @click="isVisibleFullForm = true"
    class="max-w-xl mx-auto shadow-lg border border-slate-400 rounded-lg overflow-hidden hover:border-white ease-in-out duration-200"
  >
    <MyInput v-if="isVisibleFullForm" placeholder="Enter title" v-model="titleInput" />
    <MyInput v-model="textInput" class="text-sm" placeholder="Note..." />
    <div v-if="isVisibleFullForm" class="flex justify-end gap-x-2 px-3 py-1">
      <MyButton title="Close" @click.stop="handleSaveNote" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from '@/components/ui/MyButton.vue';
import MyInput from '@/components/ui/MyInput.vue';
import { onMounted, onUnmounted, ref } from 'vue';

interface AddNoteFormEmits {
  (e: 'saveNote', title?: string, text?: string): void;
}

const emit = defineEmits<AddNoteFormEmits>();

const isVisibleFullForm = ref(false);
const formRef = ref<HTMLElement | null>(null);
const titleInput = ref('');
const textInput = ref('');

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

  if (!titleInput.value && !textInput.value) {
    return;
  }

  emit('saveNote', titleInput.value, textInput.value);
  titleInput.value = '';
  textInput.value = '';
};

onMounted(() => {
  window.addEventListener('click', handleClickOutsideForm);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutsideForm);
});
</script>
