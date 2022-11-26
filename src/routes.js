import HomePage from './app/home/HomePage.vue';
import ProductPage from './app/product/ProductPage.vue';
import CheckoutPage from './app/checkout/CheckoutPage.vue';

export const routes = [
	{
		path: "/",
		component: HomePage,
		name: "home",
	},
	{
		path: "/product/:id",
		component: ProductPage,
		name: "product",
	},
	{
		path: "/checkout",
		component: CheckoutPage,
		name: "checkout",
	}
];
