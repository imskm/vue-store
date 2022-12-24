import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
	state() {
		return {
			cart: [],
		}
	},

	getters: {
		getItems() {
			return this.cart;
		},

		itemCount() {
			return this.cart.length;
		},

		getQtyOfItemById() {
			// If getters receives argument(s) then it must return
			// a function taking required argument.
			return (productId) => {
				for (let i = 0; i < this.cart.length; ++i) {
					let item = this.cart[i];

					if (item.product.id == productId) {
						return item;
					}
				}

				return null;
			}
		},

	},

	actions: {
		addItem(cartItem) {
			let found = false;
			this.cart.forEach((item) => {
				if (item.product.id === cartItem.product.id) {
					item.qty = cartItem.qty;
					found = true;
				}
			});

			if (!found) {
				this.cart.push(cartItem);
			}
		},

		removeItem(cartItem) {
			// this.cart = this.cart.filter((item, index) => {
			// 	if (item.product.id === cartItem.product.id) {
			// 		return false;
			// 	}
			// 	return true;
			// })

			let scracth = [];
			for (let i = 0; i < this.cart.length; ++i) {
				let item = this.cart[i];

				if (item.product.id != cartItem.product.id) {
					scracth.push(item);
				}
			}

			this.cart = scracth;
		},

	},
})