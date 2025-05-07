<template>
	<div>
		<h1>Products</h1>
	</div>
	<products-list :products="products"></products-list>
</template>

<script>
import axios from 'axios';
import ProductsList from '../components/ProductsList.vue';

export default{
  name: "Product Page",
  components:{
	'products-list': ProductsList
	},
  data(){
	return {
	  products: []
	}
  },
  async created() {
	const response = await axios.get(`/api/products`);
	const products = response.data;
	this.products = products;
  }
}
</script>

<style scoped>

</style>
