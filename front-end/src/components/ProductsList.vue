<template>
<div class="grid-wrap">
 <div class="product-item"
    v-for="product in products" 
			key="product.id"
			>
  <img :src="product.imageUrl" alt="">
  <h3 class="product-name">{{product.name}}</h3>
  <p class="product-price">{{product.price}}</p>
  <router-link :to="'/products/' + product.id">
	  <button>View Details</button>
  </router-link>
  </div>
</div>

</template>

<script>
import { products } from '@/temp-data';

export default {
  name: "Products List",
  props: {
    products: Array,
  }
}
</script>