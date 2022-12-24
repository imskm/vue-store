<template>
<div class="back-button">
	<router-link class="back" to="/">
		<i  class="ri-arrow-left-line"></i>
	</router-link>
</div>
<div v-if="product" class="card">
	<div class="card-image">
		<img :src="product.image" alt="">
	</div>
	<div class="card-text">
		<div class="card-title">
			{{ product.brand }} <br>
			{{ product.title }}
			<img src="/assets/img/flipkart2.png" alt="">
		</div>
		<div class=" card-price">
			&#x20B9;{{ product.price_sp }}
			<span class="price-mrp">&#x20B9;{{ product.price_mp }} </span> <span class="discount">(80% off)</span>
		</div>
		
		<div class="Size">
			Size 
			<span v-for="size in product.sizes">{{ size }}</span>
		</div>
		<div class="card-actions"> 
			<h6 class="qt-title">Quantity</h6>
			<div class="card-actions-button">
				<button @click="decreaseQty" class="qt-button"> – </button>
				<div class="qt-box">
					<input v-model="qty" type="text" class="qt-no" readonly>
				</div>
				<button @click="increaseQty" class="qt-button"> + </button>
			</div>
		</div>
		<div class="card-button">
			<button @click="addItemInCart" class="card-add">Add to Cart</button>
			<button class="card-buy">Buy Know</button>
		</div>
	</div>
</div>
<div v-else>
	<p>Product with ID {{ productId }} not found.</p>
</div>
</template>
<script>
import APIDATA from '../../../data.json';

import { mapState } from 'pinia';

import { useCartStore } from '../../stores/cart';

export default {
	data() {
		return {
			productId: null,
			product: null,
			qty: 1,
		}
	},

	methods: {
		increaseQty() {
			this.qty++;
		},

		decreaseQty() {
			if (this.qty > 1) {
				this.qty--;
			}
		},

		addItemInCart() {
			const cartItem = {
				product: this.product,
				qty: this.qty,
			}

			// calling useCartStore action
			this.addItem(cartItem);
		},
	},

	computed: {
		...mapState(useCartStore, ['addItem', 'getQtyOfItemById']),
	},

	mounted() {
		this.productId = this.$route.params.id;

		// calling useCartStore getters with argument
		let productInCart = this.getQtyOfItemById(this.productId);
		console.log(productInCart);
		if (productInCart) {
			this.qty = productInCart.qty;
		}

		APIDATA.products.forEach((product) => {
			if (product.id == this.productId) {
				this.product = product;
			}
		});
	}
}
</script>

<style scoped>
	.card {
		padding: 12px;
		display: flex;
		align-items: top;
	}

	.card .card-image {
		width: 304px;
		height: 396px;
		overflow: hidden;
		
	}

	.card-image img {
		width: 304px;
		height: 396px;
		object-fit: cover;
	}

	.card-text {
		flex-direction: column;
		margin-left: 20px;
		margin-top: 50px;
	}
	.card-title {
		text-align: ;
		font-weight: bold;
		font-color: black;
		margin-top: 8px;
		margin-bottom: 4px;
	}

	.card-price {
		margin-bottom: 4px;	
	}
	.card-price .price-mrp{
		text-decoration: line-through;
	}
	.card-price .discount{
	color:green;
	font-size: 15px;
	}
	.card-actions {
		display: flex;
		flex-direction: column;

	}
	.qt-title {
		margin-bottom: 8px;
	}
	.card-actions-button {
		display: flex;
	}
	.qt-button {
		padding: 8px;
	}
	.qt-box {
		margin: 0 8px;
	}
	.qt-no {
		text-align: center;
		padding: 8px;
		width: 62px;
	}
	.card-button {
		display: flex;
		align-items: center;
		margin-top: 70px;
	}
	.card-add {
		height: 62px;
		padding: 0 48px;
		background-color: blue;
		color: white;
		margin-right: 24px;
	}
	.card-buy {
		height: 62px;
		padding: 0 48px;
		background-color: orange;
	}
	.back-button {
		margin-bottom: 42px;
	}
	.back {
		text-decoration: none;
		font-size: 24px;
	}
</style>