<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="add a new note"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          add new note
        </button>
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-success"
      max="100"
    />

    <template v-else>
      <Note
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
      />

      <div
        class="is-size-6 has-text-grey-light has-text-centered is-family-monospace py-6"
        v-if="!storeNotes.notes.length"
      >
        no notes here yet ...
      </div>
    </template>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from 'vue';
import Note from '@/components/notes/Note.vue'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters'

/*
  stores
*/

const storeNotes = useStoreNotes()


/*
  notes
*/

const newNote = ref('')
const addEditNoteRef = ref(null)


const addNote = () => {

  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

/*
  watch characters
*/

useWatchCharacters(newNote)
</script>