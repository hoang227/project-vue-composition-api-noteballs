import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem non aspernatur quo mollitia, soluta molestiae quae. Eligendi praesentium modi odit dolores quo cumque placeat hic tempora, consequatur voluptatem laborum? Explicabo.'
        },
        {
          id: 'id2',
          content: 'this is a shorter note.'
        }
      ]
    }
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime()
      let id = currentDate.toString()

      let note = {
        id,
        content: newNoteContent
      }

      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => note.id !== idToDelete)
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id)[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0

      state.notes.forEach(note => {
        count += note.content.length
      })

      return count
    }
  }
})