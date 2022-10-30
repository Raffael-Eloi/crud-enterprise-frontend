import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App)
.use(BootstrapVue3)
.use(router)
.mount('#app')
