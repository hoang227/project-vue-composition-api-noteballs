<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          :value="props.modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="textarea"
          placeholder="add a new note"
          ref="textAreaRef"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from 'vue'

/*
  props
*/

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

/*
  emits
*/

const emit = defineEmits(['update:modelValue'])

/*
  focus text area
*/

const textAreaRef = ref(null)

const focusTextarea = () => {
  textAreaRef.value.focus()
}

defineExpose({
  focusTextarea
})
</script>