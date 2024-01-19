<template>
  <nav class="bg-zinc py-3.5 px-4 h-16 hover:shadow-xl transition duration-300">
    <div class="flex justify-between items-center" v-if="!isNavSearchOpen">
      <h1 class="grow text-center text-xl">Заметки</h1>
      <button @click="toggleNavSearch" class="flex items-center justify-center">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="w-7 h-7"/>
      </button>
    </div>
    <div class="flex justify-between items-center gap-24" v-else>
      <button @click="toggleNavSearch">
        <font-awesome-icon icon="fa-solid fa-arrow-left" class="w-7 h-7"/>
      </button>
      <input type="text" placeholder="Поиск..." class="grow py-2 bg-transparent text-base placeholder:text-base placeholder:text-gray outline-none">
      <button>
        <font-awesome-icon icon="fa-solid fa-xmark" class="w-7 h-7"/>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isNavSearchOpen = ref<boolean>(false)
const toggleNavSearch = (): boolean => isNavSearchOpen.value = !isNavSearchOpen.value

</script>