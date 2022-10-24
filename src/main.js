import { createApp, h } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css'

import './assets/main.css'

const app = createApp({ render: ()=>h(App) })

import HomeComponent from './pages/Home/HomeComponent.vue'

const routes = [
    { path: '/', component: HomeComponent }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

app.use(PrimeVue)
app.use(router)
app.use(ToastService)

app.component('InputText', InputText)
app.component('InputMask', InputMask)
app.component('Button', Button)
app.component('Toast', Toast)

app.mount('#app')
