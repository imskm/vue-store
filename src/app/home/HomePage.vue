<template>
	<div class="section">
    <div class="section-wrapper">
      <div class="section-options">
      </div>
      <div class="section-container">
        <div class="section-products">
          <div class="product">

            <div v-for="product in products" :key="product.id" class="product-wrapper">
        			<router-link :to="{name: 'product', params: {id: product.id}}">
                <product-card :product="product" />
    	        </router-link>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ProductCardComponent from '../../components/ProductCardComponent.vue';
import APIDATA from '../../../data.json';

export default {
	components: {
		"product-card": ProductCardComponent
	},
	data() {
		return {
      products: [],
		}
	},

  mounted() {
    this.products = APIDATA.products;
  }
}
</script>