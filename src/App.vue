<template>
  <hero-section />
   <navbar />
  <div class="section">
    <div class="section-wrapper">
      <div class="section-options">
      </div>
      <div class="section-container">
        <div class="section-products">
          <div class="product">
            
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
import HeroSection from './components/HeroSection.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import ProductCardComponent from './components/ProductCardComponent.vue';
export default {
  components: {
    'hero-section': HeroSection,
    'navbar': NavbarComponent,
    'product-card': ProductCardComponent,
  },
  data() {
    return {
    }
  },

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    font-family: sans-serif;
    color: #333;

  }

  a {
    text-decoration: none;
    color: blue;

  }


  .hero-section {
    background-color: #2f1a1a;
  }
  .hero-section-container {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    padding: 100px;
  }
  .hero-section-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .hero-section-text {
    width: 100%;
    max-width: 500px;
  }
  .hero-title {
    font-size: 48px;
    color: goldenrod;
    margin-bottom: 20px;
  }
  .hero-subtitle {
    color: darkgoldenrod;
  }
  .hero-image {
    height: 400px;
  }

  .section {
    background-color: white;
  }

  .navbar {
    display: flex;
    height: 56px;
    background-color: #2874f0;
    width: 100%;
  }

  .navbar-wrapper {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }





  i {
    font-size: 20px;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .nav-menu .nav-item {
    color: #fff;
  }

  .nav-menu .nav-item a {
    color: inherit;
    font-size: 20px;
  }
  span {
    margin-left: 8px;
  }


  .section-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 100px;

  }

  .section-products {
    padding: 100px 0;
  }
  .product{
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
  }
  .card {
    padding: 12px;
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

   img {
    height: 20px;
  }



</style>