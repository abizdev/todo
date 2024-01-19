<template>
  <button class="btn" :class="btnType[type]">
    <slot name="icon" ></slot>
    <span>{{ text }}</span>
  </button>
</template>

<script setup lang="ts">

interface Props {
  type: string,
  text?: string,
}

const { type, text } = defineProps<Props>()

const btnType = {
  primary: 'text-purple hover:bg-violet-300 active:bg-violet-500',
  secondary: 'text-red hover:bg-red-300 active:bg-red-500'
}

</script>