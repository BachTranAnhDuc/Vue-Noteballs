<template>
  <div class="q-pa">
    <q-layout class="shadow-2 min-h-screen" container view="lHh lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn class="q-mr-sm" dense flat icon="menu" round />
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>

          <q-toolbar-title>Quasar Framework</q-toolbar-title>

          <q-btn dense flat icon="whatshot" round />
        </q-toolbar>

        <q-tabs v-model="tab">
          <q-route-tab label="Notes" name="notes" to="/" />
          <q-route-tab label="Stats" name="stats" to="/stats" />
        </q-tabs>
      </q-header>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      tab: ref('images')
    }
  }
}
</script>