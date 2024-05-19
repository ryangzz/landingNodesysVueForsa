import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.provide('appjs', window.appjs)

// Add the global function to the app instance

app.use(store).use(router).mount('#app')