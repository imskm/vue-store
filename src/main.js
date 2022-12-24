import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia';

import App from './App.vue'
import { routes } from './routes.js'

const app = createApp(App)

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});


app.use(router);
app.use(createPinia());

app.mount('#app')
