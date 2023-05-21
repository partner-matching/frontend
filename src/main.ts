import { createApp } from 'vue'
import 'vant/lib/index.css';
import App from './App.vue'
import * as VueRouter from "vue-router";
import routes from "./config/route";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})


const app = createApp(App)
app.use(router)
app.mount('#app')


