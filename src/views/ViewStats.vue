<template>
  <div class="stats">
    <table class="table">
      <thead>
        <tr>
          <th>stat</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>number of notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>number of character (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNoteBalls"
      class="input"
      type="text"
      placeholder="do you love noteballs?"
      v-autofocus
    >
  </div>
</template>

<script setup>
/*
  imports
*/

import { useStoreNotes } from '@/stores/storeNotes'
import { vAutofocus } from '@/directives/vAutoFocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'
import { ref } from 'vue';

/*
  store
*/

const storeNotes = useStoreNotes()

/*
  love noteballs
*/

const loveNoteBalls = ref('')

/*
  watch characters
*/

useWatchCharacters(loveNoteBalls)
</script>