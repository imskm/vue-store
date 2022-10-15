import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import App from './App.vue'

import HomePage from './app/home/HomePage.vue';
import ProductPage from './app/product/ProductPage.vue';

const app = createApp(App)

const routes = [
	{
		path: "/",
		component: HomePage,
	},
	{
		path: "/product",
		component: ProductPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});


app.use(router);

app.mount('#app')
