<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      ref="addEditNoteRef"
      textArea="edit note"
    >
      <template #buttons>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          save note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
  imports
*/

import AddEditNote from '@/components/notes/AddEditNote.vue';
import { ref } from 'vue';

/*
  note
*/

const noteContent = ref('')
</script>

