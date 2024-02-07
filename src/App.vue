<template>
  <div class="p-5 min-h-dvh bg-gray-500">
    <h1 class="text-center text-white font-medium text-2xl mb-6">Note List</h1>
    <div class="mb-8">
      <AddNoteForm @save-note="saveNote" />
    </div>
    <draggable
      v-model="store.noteList"
      item-key="id"
      class="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-2"
    >
      <template #item="{ element }">
        <MyNote
          :id="element.id"
          :title="element.title"
          :text="element.text"
          @delete-note="store.deleteNote"
        />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import MyNote from '@/components/MyNote.vue';
import AddNoteForm from '@/components/AddNoteForm.vue';
import { useNotesStore } from '@/stores/notes';
import draggable from 'vuedraggable';

const store = useNotesStore();

const saveNote = (title?: string, text?: string) => {
  store.addNote({
    id: crypto.randomUUID(),
    title,
    text,
  });
};
</script>
