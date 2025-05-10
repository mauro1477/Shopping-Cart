<template>
	<NavBar></NavBar>
	<h1>Two Olive Trees</h1>
	<div class="page-wrap">
		<router-view :user="user"></router-view>
	</div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import NavBar from './components/NavBar.vue';
export default{
  name: "App",
  components:{
	NavBar
  },
  data(){
	return {
		user: null
	}
  },
  created(){
	const auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log(user);
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/auth.user
			this.user = user;
			// ...
		} else {
			console.log("User is signed out");
			// User is signed out
			// ...
		}
	});
  }
}
</script>

<style scoped>
	
</style>
