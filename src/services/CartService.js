export class CartService {
	static cart = [];

	static getItems() {
		return this.cart;
	}

	static addItem(cartItem) {
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
	}

	static itemCount() {
		return this.cart.length;
	}

	static getQtyOfItemById(productId) {
		for (let i = 0; i < this.cart.length; ++i) {
			let item = this.cart[i];

			if (item.product.id == productId) {
				return item;
			}
		}

		return null;
	}

	static removeItem(cartItem) {
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
	}



	// static addItemQty(cartItem, qty) {
	// 	// 
	// }



}


