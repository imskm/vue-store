<template>
	<div class="section">
    <div class="section-wrapper">
      <div class="section-options">
      </div>
      <div class="section-container">
        <div class="section-products">
          <div class="product">


			<router-link :to="{name: 'product'}">
	            <product-card />
	        </router-link>



            <product-card />
            <product-card />
            <product-card />
            <product-card />
            <product-card />
            <product-card />
            <product-card />
            <product-card />
            <product-card />
            <product-card />
            <product-card />
            <product-card />

          
            <div class="card">
              <div class="card-image">
                <img src="assets/img/b.jpeg" alt="">
              </div>
              <div class="card-text">
                <div class="card-title">
                  the fashionplus
                  soild men hooded neck 
                  <div class="brand-logo-2"><img src="assets/img/flipkart2.png" alt=""></div>
                </div>
                <div class="price">
                  &#x20B9; 500
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <img src="assets/img/c.jpeg" alt="">
              </div>
              <div class="card-text">
                <div class="card-title">
                  the fashionplus
                  soild men hooded neck 
                  <div class="brand-logo-2"><img src="assets/img/flipkart2.png" alt=""></div>
                </div>
                <div class="price">
                  &#x20B9; 500
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <img src="assets/img/d.jpeg" alt="">
              </div>
              <div class="card-text">
                <div class="card-title">
                  the fashionplus
                  soild men hooded neck 
                  <div class="brand-logo-2"><img src="assets/img/flipkart2.png" alt=""></div>
                </div>
                <div class="price">
                  &#x20B9; 500
                </div>
              </div>
            </div>
          </div>
          <div class="product">
            
            <div class="card">
              <div class="card-image">
                <img src="assets/img/e.jpeg" alt="">
              </div>
              <div class="card-text">
                <div class="card-title">
                  the fashionplus
                  soild men hooded neck 
                  <div class="brand-logo-2"><img src="assets/img/flipkart2.png" alt=""></div>
                </div>
                <div class="price">
                  &#x20B9; 500
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <img src="assets/img/f.jpeg" alt="">
              </div>
              <div class="card-text">
                <div class="card-title">
                  the fashionplus
                  soild men hooded neck 
                  <div class="brand-logo-2"><img src="assets/img/flipkart2.png" alt=""></div>
                </div>
                <div class="price">
                  &#x20B9; 500
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <img src="assets/img/g.jpeg" alt="">
              </div>
              <div class="card-text">
                <div class="card-title">
                  the fashionplus
                  soild men hooded neck 
                  <div class="brand-logo-2"><img src="assets/img/flipkart2.png" alt=""></div>
                </div>
                <div class="price">
                  &#x20B9; 500
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <img src="assets/img/h.jpeg" alt="">
              </div>
              <div class="card-text">
                <div class="card-title">
                  the fashionplus
                  soild men hooded neck 
                  <div class="brand-logo-2"><img src="assets/img/flipkart2.png" alt=""></div>
                </div>
                <div class="price">
                  &#x20B9; 500
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ProductCardComponent from '../../components/ProductCardComponent.vue';

export default {
	components: {
		"product-card": ProductCardComponent
	},
	data() {
		return {

		}
	},
}
</script>