import { defineStore } from 'pinia'

import type { Todo } from '@/types/todo'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo)
    },
    delTodo(todoId: number) {
      // get index of the todo to be deleted
      const existingTodo = this.todos.findIndex((item) => item.id === todoId)
      
      // delete todo
      this.todos.splice(existingTodo, 1)
    }
  }
})
