<template>
  <div class="w-full h-14 pt-2 px-4 bg-zinc-600 rounded-tl rounded-tr border-b border-black">
    <label :for="id" class="block text-xs color-zinc tracking-[0.4px]">{{ labelText }}</label>
    <div class="flex items-center">
      <slot name="prefix"></slot>
        <input 
          :id="id" 
          :type="type" 
          :placeholder="placeholder" 
          class="text-base flex-grow bg-transparent outline-none color-black placeholder:text-base placeholder:text-black"
          :value="modelValue"
          @input="update($event)"
        >
      <slot name="sufix"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Input {
  id: string,
  type: string,
  placeholder?: string,
  modelValue: string,
  labelText?: string
}
const props = defineProps<Input>()

const emit = defineEmits()
const update = ($event) => {
  emit('update:modelValue', $event.target.value)
}
</script>