<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      ref="addEditNoteRef"
      placeholder="edit note"
      label="edit note"
    >
      <template #buttons>
        <RouterLink
          to="/"
          class="button is-link is-light"
        >
          cancel
        </RouterLink>
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
import { useRoute } from 'vue-router';
import { useStoreNotes } from '@/stores/storeNotes'

/*
  router
*/

const route = useRoute()

/*
  store
*/

const storeNotes = useStoreNotes()

/*
  note
*/

const noteContent = ref('')

noteContent.value = storeNotes.getNoteContent(route.params.id)
</script>

