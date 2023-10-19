<template>
  <q-page class="my-8">
    <div class="max-w-7xl mx-auto grid gap-y-8">
      <q-form class="q-gutter-md" @reset="onReset" @submit="onSubmit">
        <q-input
          ref="newNoteRef"
          v-model="newNote"
          :rules="[(val) => val.length > 5 || 'New note must at least 5 characters']"
          filled
          label="Enter a new note *"
          lazy-rules
          type="textarea"
        />

        <div>
          <q-btn :disable="!newNote" color="primary" label="Add New Note" type="submit" />
          <q-btn class="q-ml-sm" color="primary" flat label="Reset" type="reset" />
        </div>
      </q-form>

      <SingleNote
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
        @deleteClicked="handleDeleteNote"
      ></SingleNote>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import SingleNote from '@/components/Note/SingleNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'

export default {
  components: { SingleNote },
  setup() {
    const notes = ref([
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
    ])

    const accept = ref(false)
    const newNote = ref('')
    const newNoteRef = ref('')

    const storeNotes = useStoreNotes()

    return {
      notes,
      accept,
      newNote,
      storeNotes,

      onSubmit() {
        storeNotes.addNotes(newNote)
        newNote.value = null
        accept.value = false
      },

      onReset() {
        newNote.value = null
        accept.value = false
      },

      handleDeleteNote(id) {
        notes.value = notes.value.filter((el) => el.id !== id)
      }
    }
  }
}
</script>