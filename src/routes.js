import HomePage from './app/home/HomePage.vue';
import ProductPage from './app/product/ProductPage.vue';

export const routes = [
	{
		path: "/",
		component: HomePage,
		name: "home",
	},
	{
		path: "/product",
		component: ProductPage,
		name: "product",
	},
];
