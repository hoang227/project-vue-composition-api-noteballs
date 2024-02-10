<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div
      class="modal-card"
      ref="modalCardRef"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">delete note ?</p>
        <button
          @click="closeModal"
          class="delete"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        are you sure you want to delete this note ?
        <pre>{{ modelValue }}</pre>
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
          @click="closeModal"
          class="button"
        >cancel</button>
        <button class="button is-danger">delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

/*
  props
*/

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

/*
  emits
*/

const emit = defineEmits(['update:modelValue'])

/* 
  close modal
*/

const closeModal = () => {
  emit('update:modelValue', false)
}

/*
  click outside to close
*/

const modalCardRef = ref(null)

onClickOutside(modalCardRef, closeModal)

</script>