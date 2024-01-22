<template>
  <Navbar />
  <Content />
  <Modal :isActive="modalActive" @close="toggleModalActive" />


  <button class="todo-btn fixed right-8 bottom-8 w-14 h-14" @click="toggleModalActive">
    <font-awesome-icon icon="far-regular fa-pen" class="text-purple"/>
  </button>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Content from './components/Content.vue'
import Modal from './components/Modal.vue';

import { ref } from 'vue';

const modalActive = ref<boolean>(false)
const toggleModalActive = (): boolean => modalActive.value = !modalActive.value
</script>