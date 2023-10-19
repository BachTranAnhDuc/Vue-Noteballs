<template>
  <div>
    <q-card class="my-card text-gray-800">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <small>{{ characterLength }}</small>
      </q-card-section>

      <q-card-section>{{ note.content }}</q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Edit</q-btn>
        <q-btn flat @click.prevent="storeNotes.deleteNotes(note.id)">Delete</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

const storeNotes = useStoreNotes()
const emit = defineEmits(['deleteClicked'])

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const characterLength = computed(() => {
  return `${props.note.content.length} characters`
})

const handleClickDelete = () => {
  emit('deleteClicked', props.note.id)
}
</script>