import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            'intellegebat inimicus veniam honestatis malesuada possit sagittis novum dolorum fames'
        },
        {
          id: 'id2',
          content:
            'laoreet esse vero a reformidans minim auctor utinam dolore mollis viderer ante nunc penatibus civibus'
        }
      ]
    }
  },
  actions: {
    addNotes(newNote) {
      const note = {
        id: new Date().getTime().toString(),
        content: newNote.value
      }

      this.notes.unshift(note)
    },
    deleteNotes(idNote) {
      this.notes = this.notes.filter((el) => el.id !== idNote)
    }
  }
})
