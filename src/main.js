import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'
import "bootstrap"
window.bootstrap = bootstrap

const app = createApp(App)

app.mount('#app')
