import { createApp } from 'vue'
import App from './g.vue/index.js'
import router from './Router/routes.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
