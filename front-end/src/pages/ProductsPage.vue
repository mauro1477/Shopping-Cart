<template>
	<div>
		<h1>Products</h1>
	</div>
	<products-list :products="products"></products-list>
</template>

<script>
import { products } from '../temp-data.js';
import ProductsList from '../components/ProductsList.vue';

export default{
  name: "Product Page",
  components:{
	'products-list': ProductsList
	},
  data(){
	return {
	  products : products
	}
  },
}
</script>

<style scoped>

</style>
