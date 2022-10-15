<template>
<div class="back-button">
	<router-link class="back" to="/">
		<i  class="ri-arrow-left-line"></i>
	</router-link>
</div>
<div class="card">
	<div class="card-image">
		<img src="a.jpeg" alt="">
	</div>
	<div class="card-text">
		<div class="card-title">
			Aelomart <br>
			Color Black Men Round Neck White,Maroon T-Shirt
			<img src="flipkart2.png" alt="">
		</div>
		<div class=" card-price">
			&#x20B9;299
			<span class="price-mrp">&#x20B9;1499 </span> <span class="discount">(80% off)</span>
		</div>
		
		<div class="Size">
			Size S,M,L,XL,XXL
		</div>
		<div class="card-actions"> 
			<h6 class="qt-title">Quantity</h6>
			<div class="card-actions-button">
				<button class="qt-button" disabled=""> – </button>
				<div class="qt-box">
					<input type="text" class="qt-no" disabled="" value="1">
				</div>
				<button class="qt-button" disabled=""> + </button>
			</div>
		</div>
		<div class="card-button">
			<button class="card-add">Add to Cart</button>
			<button class="card-buy">Buy Know</button>
		</div>
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			// 
		}
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