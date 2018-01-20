<template>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <div class="detail_header clearfix">
                   <div class="head">
                                <a href="javascript:;" class="go-back" @click="goBack">&lt; 返回</a>
                                <h4 class="header_cont ">商品详情页</h4>
                   </div>
                </div>
        </transition>
</template>
<script>
	export default{
		methods : {
			goBack(){
				window.history.back();
			}
		}
	}
</script>
<style lang="scss" scoped>
	.detail_header{
		width: 100%;
		height: 2rem;
                .head{
                        width: 100%;
                        height: 2rem;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index:99;
                        background-color: #3190e8;
                        background: -webkit-linear-gradient(right top, #61b8f8 , #5e8bf7); 
                        background: -o-linear-gradient(bottom left, #61b8f8, #5e8bf7); 
                        background: -moz-linear-gradient(bottom left, #61b8f8, #5e8bf7); 
                        background: linear-gradient(to bottom left, #61b8f8 , #5e8bf7); 
                        border-bottom: 1px solid #dfdfdf;
                     a{
                        color:#fff;
                        line-height: 2rem;
                        width: 2rem;
                        height: 2rem;
                        margin-left: 0.5rem;
                        position: relative;
                        z-index: 999;
                        transition: all .5s;
                        font-size: 0.8rem;
                }
                        .header_cont{
                                width: 100%;
                                height: 2rem;
                                line-height: 2rem;
                                text-align: center;
                                position: fixed;
                                        top: 0;
                                left: 0;
                                right: 0;
                                color:#fff;
                                font-weight: normal;
                        }   
                }

                
	}
</style>