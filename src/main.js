import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/plugins/axios'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use(ToastService)

app.mount('#app')
