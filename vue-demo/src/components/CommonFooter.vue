<template>
	<div class="foot">
		<div class="CommonFooter">
			<div class="footer">
				<ul class="list-item">
					<li>
						<router-link to="/" class="list-item-text">主页</router-link>
					</li>
					<li>
						<router-link to="Dynamic" class="list-item-text">动态</router-link>
					</li>
					<li>
						<router-link to="/Personal" class="list-item-text">个人</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name : 'CommonFooter',
	}
</script>
<style lang="scss" scoped>
	.foot{
		width: 100%;
		height: 1.5rem;
	}
	.CommonFooter{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1.5rem;
		background-color: #3190e8;
        background: -webkit-linear-gradient(right top, #61b8f8 , #5e8bf7); 
        background: -o-linear-gradient(bottom left, #61b8f8, #5e8bf7); 
        background: -moz-linear-gradient(bottom left, #61b8f8, #5e8bf7); 
        background: linear-gradient(to bottom left, #61b8f8 , #5e8bf7); 
		border-top:1px solid #dfdfdf;
		.list-item{
			width: 100%;
			height: 1.5rem;
			display: flex;
			flex-wrap: wrap;
			li{
				width: 33.3%;
				height: 1.5rem;
				color:#fff;
				text-align: center;
				.list-item-text{
					font-size: 0.8rem;
					height: 1.5rem;
					color:#fff;
				}
				&:active{
					background-color: #ccc;
				}
			}
		}
		

	}
</style>