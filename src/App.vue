<template>
  <HeroSection />
  <navbar />

  <router-view></router-view>
  
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import NavbarComponent from './components/NavbarComponent.vue';
export default {
  components: {
    'HeroSection': HeroSection,
    'navbar': NavbarComponent,
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
    padding: 32px 100px;
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
    height: 250px;
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
    flex-wrap: wrap;
  }
  .product-wrapper {
    flex-basis: 25%;
    padding: 10px;
  }

  .card {
    width: 100%;
  }

  .card .card-image {
    width: 100%;
    height: 396px;
    overflow: hidden;
    
  }

  .card-image img {
    width: 100%;
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