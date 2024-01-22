import { defineStore } from 'pinia'

import type { Todo } from '@/types/todo'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo)
    }
  }
})
