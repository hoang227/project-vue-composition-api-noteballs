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
  </div>
</template>

<script setup>
/*
  imports
*/

import { useStoreNotes } from '@/stores/storeNotes';

/*
  store
*/

const storeNotes = useStoreNotes()
</script>