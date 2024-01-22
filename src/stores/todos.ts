import { defineStore } from 'pinia'

import type { Todo } from '@/types/todo'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [],
    modalType: '',
    modalActive: false,
    editTodoId: null
  }),
  actions: {
    toggleModal(type?: string) {
      this.modalType = type ? type : this.modalType
      this.modalActive = !this.modalActive
    },
    addTodo(todo: Todo) {
      this.todos.push(todo)
    },
    delTodo(todoId: number) {
      // get todo index
      const existingTodo = this.todos.findIndex((item) => item.id === todoId)
      
      // delete todo
      this.todos.splice(existingTodo, 1)
    },
    editTodo(todo: Todo) {
      // get todo index
      const existingTodo = this.todos.findIndex((item) => item.id === todo.id)
      console.log(existingTodo, todo.id);
      
      // replace with new todo values
      this.todos.splice(existingTodo, 1, todo)
    }
  }
})
