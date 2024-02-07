<template>
  <div class="max-w-xl mx-auto mb-6 border border-gray-300 rounded-lg overflow-hidden">
    <MyInput
      placeholder="Enter title"
    />
    <MyInput
      class="text-sm"
      placeholder="Note..."
    />
    <div class="flex justify-end gap-x-2 px-3 py-1">
      <MyButton title="Save" />
      <MyButton title="Clear" />
    </div>
  </div>
</template>

<script setup lang="ts">

import MyButton from '@/components/ui/MyButton.vue';
import MyInput from '@/components/ui/MyInput.vue';
</script>