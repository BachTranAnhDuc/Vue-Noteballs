import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import { Quasar } from 'quasar'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'
import { createPinia } from 'pinia'

const myApp = createApp(App)
const pinia = createPinia()

myApp.use(Quasar, {
  plugins: {} // import Quasar plugins and add here
})

myApp.use(router).use(pinia).mount('#app')
