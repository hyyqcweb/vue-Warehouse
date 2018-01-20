<template>
		<div class="ListGroup">
			<router-link to="/detail">
				<li class="item">
					<h3 class="title">{{title}}</h3>
					<img :src="img" alt="">
					<span>{{price}}</span>
				</li>
			</router-link>
		</div>
</template>
<script>
	export default{
		props : ['price','title','img'],
		
	}
</script>
<style lang="scss" scoped>
	  .ListGroup{
	 //  	display: flex;
		// flex-wrap:wrap;
		float: left;
		border:1px solid #dfdfdf;
	  }
		.item{
			margin-top: 0.5rem;
			margin-left: 0.3rem;
			color:#000;
			.title{
				font-weight: normal;
				text-align: center;
				font-size: 0.7rem;
			}
			img{
				width: 4.95rem;
				height: 4.95rem;
			}
			span{
				display: block;
				text-align: center;
				width: 4.95rem;
				font-size: 0.7rem;
			}
		}

</style>