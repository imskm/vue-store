<template>
	<div class="card">
	  <div class="card-image">
	    <img :src="product.image" alt="">
	  </div>
	  <div class="card-text">
	    <div class="card-title">
	      {{ product.brand }} <br>
	      {{ product.title }}
	      <img src="assets/img/flipkart2.png" alt="">
	    </div>
	    <div class=" card-price">
	      &#x20B9; {{ product.price_sp }}
	      <span class="price-mrp">&#x20B9;{{ product.price_mp }} </span> <span class="discount">(80% off)</span>
	    </div>
	    
	    <div class="Size">
	      Size 
	    </div>
	      <span v-for="size in product.sizes" :key="size">{{ size }}</span>
	  </div>
	</div>
</template>
<script>
export default {
	props: ["product"],
}
</script>