<template>
  <div class="product-container"
		     v-for="product in cartItems"
		     :key="product.id"
		     >
				<img class="product-image" :src="product.imageUrl" alt="">
				<div class="detail-wrap">
					<h3>{{ product.name }}</h3>
					<p>{{ product.price }}</p>
				</div>
		<button @click="$emit('remove-item-from-cart', product.id)" class="remove-button">Remove from Cart</button>
	</div>
	<button class="checkout-button">Proceed to Checkout</button>	
</template>

<script>
export default {
	name: 'ShoppingCartList.vue',
	props: ['cartItems','message'],
	emits: ['remove-item-from-cart'],

}
</script>