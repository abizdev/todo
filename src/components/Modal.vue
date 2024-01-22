<template>
  <Transition
    enter-active-class="transition duration-500"
    leave-active-class="transition duration-500"
    enter-from-class="scale-150 opacity-0"
    leave-to-class="scale-150 opacity-0"
  >
    <div 
      class="fixed top-0 left-0 w-full h-full bg-black/[0.35] backdrop-blur-md flex justify-center items-center"
      v-show="isActive"
      @click="close"
    >
      <div class="w-80 flex flex-col gap-4 p-6 bg-zinc rounded-3xl" @click.stop>
        <h2 class="text-2xl">Добавить заметку</h2>
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
          <Button type="primary" text="Добавить" @click="addTodoItem" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Button from './Button.vue';
import FormInput from './form/FormInput.vue'

import { ref } from 'vue';

import { useTodosStore } from '../stores/todos'

const emit = defineEmits()

const { isActive } = defineProps<{ isActive: boolean }>()

const { addTodo } = useTodosStore()

const inputTitle = ref<string>('')
const inputText = ref<string>('')
const todoId = ref<number>(1)

const close = (): void => {
  emit('close')
  inputTitle.value = inputText.value = ''
}

const addTodoItem = () => {
  const date = new Date

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const year = date.getFullYear()

  const todo = {
    id: todoId.value,
    date: `${day}.${month}.${year}`,
    title: inputTitle.value,
    text: inputText.value
  }
  
  addTodo(todo)
  close()
}

</script>