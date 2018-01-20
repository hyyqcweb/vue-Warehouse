<template>
	<div class="dynamic">
		<home-header></home-header>
		<h1>这是动态</h1>
		<common-footer></common-footer>
	</div>
	
</template>
<script>
	import HomeHeader from '@/components/HomeHeader'
	import CommonFooter from '@/components/CommonFooter'
	export default{
		 components:{
        	HomeHeader,
        	CommonFooter
        }
	}
</script>
<style lang="scss" scoped>
	.dynamic{
		h1{
			font-size: 0.8rem;
			text-align: center;
			margin-top: 2rem;
		}
	}
</style>