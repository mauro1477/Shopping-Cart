
<template>
	<h1>Shopping Cart</h1>
	<div v-if="cartItems.length > 0">
		<cart-list :cartItems="cartItems"></cart-list>
	</div>
	<div v-else>
		<h3>There are no items in cart</h3>
	</div>
</template>

<script>
import { cartItems } from '@/temp-data';
import CartList from '../components/CartList.vue';
export default{
  name: "ShoppingCartPage",
  components:{
	'cart-list' : CartList
  },
  data(){
	return {
		cartItems: cartItems
	}
  }
}
</script>

<style scoped>

</style>
