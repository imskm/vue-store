<template>
  <nav class="navbar">
    <div class="navbar-wrapper">
      <div class="nav-menu">
        <div class="nav-item">
          <router-link :to="{name: 'checkout'}">
            Cart ({{ itemCount }}) <span class="cart-icon"><i class="ri-shopping-cart-line"></i></span>
          </router-link>
        </div>
        <div class="nav-item">
          <a href="#">Filter<span class="filter-icon"><i class="ri-filter-line"></i></span></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'pinia';
import { useCartStore } from '../stores/cart';

export default {
  data() {
    return {
    }
  },

  methods: {

  },

  computed: {
    ...mapState(useCartStore, ['itemCount']),
  }
}
</script>