<template>
	<div class="nav-bar">
		<router-link to="/products" class="products-link">
			<div class="logo-wrap">
				<img :src="logo" alt="">
			</div>
		</router-link>
		<div class="nav-buttons-wrap">
			<button class="signout-btn" v-if="user" @click="signOut">Sign Out</button>
			<router-link to="/cart">
				<button>Shopping Cart</button>
			</router-link>
		</div>
	</div>
</template>

<script>
import {signOut, getAuth} from 'firebase/auth'
import logo from '@/assets/images/logo-hexagon.svg';

export default {
	name: 'Navbar',
	props: ['user'],
	data(){
		return{
			logo
		}
	},
	methods:{
		signOut(){
			const auth = getAuth();
			signOut(auth);
		}
	}
}
</script>