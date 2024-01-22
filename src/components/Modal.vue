<template>
  <Transition
    enter-active-class="transition duration-500"
    leave-active-class="transition duration-500"
    enter-from-class="scale-150 opacity-0"
    leave-to-class="scale-150 opacity-0"
  >
    <div 
      class="fixed top-0 left-0 w-full h-full bg-black/[0.35] backdrop-blur-md flex justify-center items-center"
      v-show="modalActive"
      @click="close"
    >
      <div class="w-80 flex flex-col gap-4 p-6 bg-zinc rounded-3xl" @click.stop>
        <h2 class="text-2xl">
          {{ modalType === 'add' ? 'Добавить' : 'Редактировать' }} заметку
        </h2>
        <FormInput 
          id="title"
          type="text"
          placeholder="Title"
          labelText="Title"
          v-model:modelValue="inputTitle"
        />
        <FormInput
          id="text"
          type="text"
          placeholder="Text"
          labelText="Text"
          v-model:modelValue="inputText"
        />
        <div class="self-end flex items-center gap-2 mt-1">
          <Button type="secondary" text="Отмена" @click="close" />
          <Button type="primary" text="Добавить" @click="addTodoItem" v-if="modalType === 'add'"/>
          <Button type="primary" text="Редактировать" @click="editedTodoItem" v-else/>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Button from './Button.vue';
import FormInput from './form/FormInput.vue'

import { ref, computed } from 'vue';

import { useTodosStore } from '../stores/todos'

const emit = defineEmits()

const todosStore = useTodosStore()
const modalActive = computed(() => todosStore.modalActive)
const modalType = computed(() => todosStore.modalType)
const editTodoId = computed(() => todosStore.editTodoId)

const inputTitle = ref<string>('')
const inputText = ref<string>('')
const todoId = ref<number>(0)

const close = (): void => {
  todosStore.toggleModal()
  inputTitle.value = inputText.value = ''
}

const todoDate = () => {
  const date = new Date

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}
const addTodoItem = () => {
  todoId.value++

  const todo = {
    id: todoId.value,
    date: todoDate(),
    title: inputTitle.value,
    text: inputText.value
  }
  
  todosStore.addTodo(todo)
  close()
}
const editedTodoItem = () => {
  const todo = {
    id: editTodoId.value,
    date: todoDate(),
    title: inputTitle.value,
    text: inputText.value,
  }

  todosStore.editTodo(todo)
  close()
}

</script>