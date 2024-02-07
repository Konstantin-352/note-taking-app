<template>
  <div class="p-5 min-h-dvh">
    <AddNoteForm />
    <div class="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-2">
      <MyNote v-for="n of 10" :key="n" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MyNote from '@/components/MyNote.vue';
import AddNoteForm from '@/components/AddNoteForm.vue';
</script>
