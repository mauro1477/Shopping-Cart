<template>
	<div v-if="product">
		<div class="img-wrap">
	  	<img :src="product.imageUrl" alt="">	
  	</div>
		<div class="product-details">
			<h1>{{ product.name }}</h1>
			<h3 class="price">{{ product.price }}</h3>
			<button class="add-to-cart">Add to Cart</button>
		</div>
	</div>
	<div v-else>
		<PageNotFound></PageNotFound>
	</div>
</template>

<script>
import { products } from '@/temp-data';
import PageNotFound from './PageNotFound.vue';
export default{
  name: "Products Detail Page",
  components:{
	PageNotFound
  },
  data(){
	return{
		product : products.find(product => product.id === this.$route.params.productId) 
	}
  }
}
</script>

<style scoped>

</style>
