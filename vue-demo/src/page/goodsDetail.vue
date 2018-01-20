<template>
	<div class="goods_detail">
		<detail-header></detail-header>
		<li class="item">
			<img :src="img" alt="">
		</li>				
		<p class="site-title">树懒果园 泰国进口大金煌芒果</p>
		<p class="site-cont">5斤装，约2-4个果，大！！！甜！！！</p>
		<common-footer></common-footer>
	</div>
</template>
<script>
	import DetailHeader from '@/components/DetailHeader'
	import CommonFooter from '@/components/CommonFooter'
	export default {
		props : ['img'],
		components:{
			DetailHeader,
			CommonFooter
		},
		methods : {

		}
	}
</script>
<style lang="scss" scoped>
	.goods_detail{
		width: 100%;
		height: auto;
		
		p{
			font-size: 0.8rem;
			text-align: center;
		}
	}
</style>