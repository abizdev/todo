<template>
  <div class="flex flex-col justify-center gap-4 rounded-2xl bg-zinc transition hover:shadow-md p-4">
    <div class="flex flex-col items-start">
      <h3 class="text-base text-black font-medium">{{ todo.title }}</h3>
      <span class="text-sm text-gray tracking-[0.25px]">{{ todo.date }}</span>
    </div>
    <p class="text-sm text-black-500 tracking-[0.25px]">{{ todo.text }}</p>
    <div class="flex items-center self-end gap-2">
      <Button type="primary" text="РЕДАКТИРОВАТЬ" v-slot:icon>
        <font-awesome-icon icon="far-regular fa-pen" class="text-purple"/>
      </Button>
      <Button type="secondary" text="Удалить" v-slot:icon>
        <font-awesome-icon icon="fa-solid fa-trash" class="text-red" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';

import type { Todo } from '@/types/todo.js';

const { todo } = defineProps<{ todo: Todo}>()

</script>