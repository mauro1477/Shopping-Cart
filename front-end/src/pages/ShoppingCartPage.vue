
<template>
	<h1>Shopping Cart</h1>
	<div v-if="cartItems.length > 0">
		<cart-list @remove-item-from-cart="removeItemFromCart($event)" :cartItems="cartItems"></cart-list>
	</div>
	<div v-else>
		<h3>There are no items in cart</h3>
	</div>
</template>

<script>
import axios from 'axios';
import CartList from '../components/CartList.vue';
export default{
  name: "ShoppingCartPage",
  props: ["user"],
  components:{
	'cart-list' : CartList
  },
  data(){
	return {
		cartItems: [],
	}
  },
  methods: {
	async removeItemFromCart(productId) {
		const response = await axios.delete(`/api/users/1234/cart/${productId}`);
		this.cartItems = response.data;
	}
  },
  async created() {
	const response = await axios.get('/api/users/1234/cart');
	this.cartItems = response.data;
  }
}
</script>

<style scoped>

</style>
