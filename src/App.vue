<template>
  <Navbar />
  <Content />

  <button class="todo-btn fixed right-8 bottom-8 w-14 h-14">
    <font-awesome-icon icon="far-regular fa-pen" class="text-purple"/>
  </button>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Content from './components/Content.vue'
</script>