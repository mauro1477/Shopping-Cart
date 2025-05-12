<template>
	<div v-if="product">
		<div class="img-wrap">
	  	<img :src="product.imageUrl" alt="">	
  	</div>
		<div class="product-details">
			<h1>{{ product.name }}</h1>
			<h3 class="price">{{ product.price }}</h3>
			<button @click="addToCart" class="add-to-cart" v-if="user && !isItemInCart">Add to Cart</button>
			<button class="grey-button" v-if="user && isItemInCart">Item is already in cart</button>
			<button @click="signIn" class="sign-in" v-if="!user">Sign in to add to cart</button>
		</div>
	</div>
	<div v-else>
		<PageNotFound></PageNotFound>
	</div>
</template>

<script>
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

import axios from 'axios';
import PageNotFound from './PageNotFound.vue';
export default{
  name: "Products Detail Page",
  components:{
	PageNotFound
  },
  props: ['user'],
  data(){
	return{
		product : {},
		cartItems : [],
	}
  },
  watch:{
	async user(newUserValue){
		console.log('Changed!');
		console.log(newUserValue);
		if(newUserValue){
			const responseUserCart =  await axios.get(`/api/users/${newUserValue.uid}/cart`);
			this.cartItems = responseUserCart.data;
		}
	}
  },
  computed:{
	isItemInCart(){
		return this.cartItems.some(item => item.id === this.$route.params.productId);
	}
  },
  methods:{
    async addToCart(){
		await axios.post(`/api/users/${this.user.uid}/cart`,{ id : this.$route.params.productId });
		alert('Successfully added item to cart!');
	},
	async signIn(){
		const email = prompt('Please enter your email to sign in:');
		const auth = getAuth();
		const actionCodeSettings = {
			url: `http://localhost:5173/products/${this.$route.params.productId}`,
			handleCodeInApp: true
		}
		await sendSignInLinkToEmail(auth, email, actionCodeSettings);
		alert('A login link was sent to the email you provided');
		window.localStorage.setItem('emailForSignIn', email);
	}
  },
  async created() {
	//Make sure user got to Details Page with auth link
	const auth = getAuth();
	if(isSignInWithEmailLink(auth,window.location.href)){
		const email = window.localStorage.getItem('emailForSignIn');
		await signInWithEmailLink(auth, email, window.location.href);
		alert('Successfully signed in!');
		window.localStorage.removeItem('emailForSignIn');
	}

	const response = await axios.get(`/api/products/${this.$route.params.productId}`);
	const product = response.data;
	this.product = product;

	if(this.user){
		const responseUserCart =  await axios.get(`/api/users/${this.user.uid}/cart`);
		this.cartItems = responseUserCart.data;
	}
  }
}
</script>

<style scoped>

</style>
