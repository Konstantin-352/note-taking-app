<template>
  <div class="group border border-gray-300 rounded-lg py-2 px-3 text-gray-500 relative hover:border-gray-500 ease-in-out duration-200">
    <div class="text-base mb-2 pr-7">Note title</div>
    <div class="text-sm">Note text</div>
    <MyButton
      shape="circle"
      class="absolute top-0.5 right-0.5 opacity-0 ease-in-out duration-200 group-hover:opacity-100"
    >
      <DeleteIcon />
    </MyButton>
  </div>
</template>

<script setup lang="ts">

import DeleteIcon from '@/components/icons/DeleteIcon.vue';
import MyButton from '@/components/ui/MyButton.vue';
</script>

<style scoped>

</style>