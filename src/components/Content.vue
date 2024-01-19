<template>
  <main class="main container">
    <!-- heading -->
    <div class="flex justify-between items-center my-8">
      <h2 class="text-xl text-black">Все заметки</h2>
      <div class="todo-btn w-[121px] gap-3" @click="toggleType">
        <img src="../assets/images/list.svg" class="w-6 h-6" alt="list" v-if="contentType === 'grid'">
        <img src="../assets/images/grid.svg" class="w-6 h-6" alt="grid" v-else>
        <span class="text-sm text-purple font-medium tracking-[0.1px]">{{ contentType === 'grid' ? 'Список' : 'Сетка' }}</span>
      </div>
    </div>

    <!-- content -->
    <div class="gap-6" :class="contentTypes[contentType]">
      <Card 
        v-for="(todo, key) in todosList"
        :key="todo.id"
        :todo="todo"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import Card from './Card.vue';

import { ref, computed } from 'vue';

import { useTodosStore } from '@/stores/todos';

import type { Todolist } from '@/types/todo'

const todosStore = useTodosStore()
const todosList = computed<Todolist>(() => todosStore.todos)

const contentType = ref<string>('grid')
const contentTypes = {
  list: 'flex flex-col',
  grid: 'grid grid-cols-3'
}

const toggleType = () => 
  contentType.value === 'grid' ?
  contentType.value = 'list' : contentType.value = 'grid'

</script>