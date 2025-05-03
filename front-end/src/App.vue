<template>
	<NavBar></NavBar>
	<h1>Two Olive Trees</h1>
	<div class="page-wrap">
		<router-view></router-view>
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default{
  name: "App",
  components:{
	NavBar
  }
}
</script>

<style scoped>
	
</style>
