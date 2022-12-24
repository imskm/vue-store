<template>
	<div class="section card-section">
		

		<div v-for="item in cartItems" class="card">
			<div class="card-right">
				<div class="card-img">
					<img :src="item.product.image" alt="">
				</div>
				<div class="card-text">
					<div class="card-title">
						<a href=""></a>
						<p class="card-price">&#x20B9; {{ item.product.price_sp }}</p>
						<p class="card-desc">Kurti | <span class="price-mrp">&#x20b9;1,000</span> <span class="disc-per">50% off</span></p>
					</div>
					<div class="card-actions"> 
						<h6 class="qt-title">Quantity</h6>
						<div class="card-actions-button">
							<button class="qt-button" disabled=""> – </button>
							<div class="qt-box">
								<input type="text" class="qt-no" disabled="" :value="item.qty">
							</div>
							<button class="qt-button" disabled=""> + </button>
						</div>
					</div>
				</div>
			</div>
			<div class="card-left">
				<h4 class="card-left-total">Total Price </h4>
				<p class="card-price">&#x20B9; 500</p>
				<button @click="removeFromCart(item)" class="card-left-button">Remove From Cart</button>
			</div>
		</div>


	</div>

	<div class="section order-des">
		<div class="order-des-wrapper">
			<div class="order-des-right">
				<div class="order-des-label">
					<p class="order-des-label-text">Total</p>
					<p class="order-des-label-price">₹2999</p>
				</div>
				<div class="order-des-label">
					<p class="order-des-label-text">Discount</p>
					<p class="order-des-label-price">0%	</p>
				</div>
				<div class="order-des-label no-margin">
					<p class="order-des-label-text">Sub total</p>
					<p class="order-des-label-price">2999</p>
				</div>
			</div>
			<div class="order-des-left">
				<button class="order-des-button">BUY KNOW</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'pinia';
import { useCartStore } from '../../stores/cart';

export default {
	data() {
		return {
			cartItems: [],
		}
	},

	methods: {
		loadCartItems() {
			this.cartItems = this.getItems;
		},

		removeFromCart(cartItem) {
			this.removeItem(cartItem);
			this.loadCartItems();
		}
	},
	computed: {
		...mapState(useCartStore, ['removeItem', 'getItems']),
	},

	mounted() {
		this.loadCartItems();
	}
}
	
</script>

<style scoped>
	.card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 40px;
		margin-bottom: 12px;
		box-shadow: 2px 2px 24px rgba(0, 0, 0, .15);
		border-radius: 8px;
	}
	.card-right {
		display: flex;
		
	}

	.card-img {
		width: 150px;
		height: 150px;
		overflow: hidden;
	}

	.card-img img {
		width: 100%;
		height:  150px;
	}

	.card-text {
		width: 100%;
		max-width: 500px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 12px;
		flex: 1;
	}

	.card-title, .card-price, .disc-per {
		font-weight: bold;
	}

	.card-price, .card-desc {
		margin-top: 4px;
	}

	.card-desc {
		color: #888;
	}

	.price-mrp {
		text-decoration: line-through;
	}

	.disc-per {
		color: green;
	}
	.card-actions {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.qt-title {
		margin-bottom: 8px;
	}
	.card-actions-button {
		display: flex;
		margin-left: 24px;
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

	.card-left-total {
		margin-bottom: 8px;
	}
	.card-left-button {
		padding: 8px;
		margin-top: 20px;
		background-color: #1b60cc;
		color: #fff;
	}
	.section.order-des {
		background-color: darkgrey;
		padding: 50px 0;
	}
	.order-des-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40px;
	}
	.order-des-right {
		width: 100%;
		max-width: 450px;
	}
	.order-des-label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 12px;
	}
	.order-des-label.no-margin {
		margin-bottom: 0;
	}
	.order-des-button {
		padding: 20px 40px;
		background-color: #1b60cc;
		color: white;
	}
</style>