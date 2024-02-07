import { ref } from 'vue';
import { defineStore } from 'pinia';

interface NoteItem {
  id: string;
  title?: string;
  text?: string;
}

export const useNotesStore = defineStore(
  'notes',
  () => {
    const noteList = ref<NoteItem[]>([]);

    function addNote(note: NoteItem) {
      noteList.value.push(note);
    }

    function deleteNote(id: string) {
      noteList.value = noteList.value.filter((note) => note.id !== id);
    }

    return { noteList, addNote, deleteNote };
  },
  {
    persist: true,
  },
);
