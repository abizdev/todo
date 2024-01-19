import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [
      {
        id: 1, 
        title: 'Title', 
        date: '01.01.2024',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
      },
      {
        id: 2, 
        title: 'Title', 
        date: '01.01.2024',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
      },
      {
        id: 3, 
        title: 'Title', 
        date: '01.01.2024',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
      },
    ]
  }),
  actions: {}
})
