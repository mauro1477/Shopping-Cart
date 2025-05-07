<template>
	<div v-if="product">
		<div class="img-wrap">
	  	<img :src="product.imageUrl" alt="">	
  	</div>
		<div class="product-details">
			<h1>{{ product.name }}</h1>
			<h3 class="price">{{ product.price }}</h3>
			<button @click="addToCart" class="add-to-cart" v-if="!isItemInCart">Add to Cart</button>
			<button class="grey-button" v-else>Item is already in cart</button>

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
		product : [],
		userCartItems : [],
	}
  },
  computed:{
	isItemInCart(){
		return this.userCartItems.some(item => item.id === this.$route.params.productId);
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

	const responseUserCart =  await axios.get('/api/users/1234/cart');
	this.userCartItems = responseUserCart.data;
  }
}
</script>

<style scoped>

</style>
