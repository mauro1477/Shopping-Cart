<template>
	<div v-if="product">
		<div class="img-wrap">
	  	<img :src="product.imageUrl" alt="">	
  	</div>
		<div class="product-details">
			<h1>{{ product.name }}</h1>
			<h3 class="price">{{ product.price }}</h3>
			<button @click="addToCart" class="add-to-cart">Add to Cart</button>
		</div>
	</div>
	<div v-else>
		<PageNotFound></PageNotFound>
	</div>
</template>

<script>
import axios from 'axios';
import PageNotFound from './PageNotFound.vue';
export default{
  name: "Products Detail Page",
  components:{
	PageNotFound
  },
  data(){
	return{
		product : []
	}
  },
  methods:{
    async addToCart(){
		await axios.post('/api/users/1234/cart',{ id : this.$route.params.productId });
		alert('Successfully added item to cart!');
	}
  },
  async created() {
	const response = await axios.get(`/api/products/${this.$route.params.productId}`);
	const product = response.data;
	this.product = product;
  }
}
</script>

<style scoped>

</style>
