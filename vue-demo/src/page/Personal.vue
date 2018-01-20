<template>
	<div class="personal">
		<home-header></home-header>
		<div class="container">
	        <div class="share-dialog" v-show="isShareCount">
	            <div id="showtimes"></div>
	        </div>
	        <a class="btn" href="javascript:void (0);" v-on:click="showTime(3)" v-show="isShowBtn">开</a><a class="btn stop" href="javascript:void (0);" v-on:click="stopTimer">停</a>
	        <div class="timer" v-show="isShowTimer"><strong>{{ timer }}</strong><span class="second">秒</span><span
            class="line"></span></div>
   		 </div>
		<common-footer></common-footer>
	</div>
</template>
<script>
	import HomeHeader from '@/components/HomeHeader'
	import CommonFooter from '@/components/CommonFooter'
	export default{
		 data(){
            return {
                timer: 0,
                si: '',
                isShareCount: false,
                isShowTimer: false,
                isShowBtn: true,
            }
        },
        methods: {
            // 比赛开始，计时开始
            startTimer(){
                let self = this;
                this.si = setInterval(function () {
                    self.timer++;
                }, 1000);
            },
            // 比赛结束，停止计时
            stopTimer(){
                let self = this;
                clearInterval(self.si);
            },
            //显示倒数秒数
            showTime(countdown){
                let self = this;
                self.isShareCount = true;
                self.isShowBtn = false;
                self.isShowFalseBtn = true;
                document.getElementById('showtimes').innerHTML = countdown;
                if (countdown == 0) {
                    self.isShareCount = false;
                    self.isShowTimer = true;
                    self.isShowFalseBtn = false;
                    document.getElementById('showtimes').innerHTML = "";
                    // 计时器开始计时
                    self.startTimer();
                } else {
                    countdown -= 1;
                    setTimeout(function () {
                        self.showTime(countdown);
                    }, 1000);
                }
            }
        },
        components:{
        	HomeHeader,
        	CommonFooter
        }
	}
</script>
<style lang="scss" scoped>
	.share-dialog {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: rgba(0, 0, 0, .5);
        z-index: 999;
        #showtimes {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 500/75+rem;
            height: 500/75+rem;
            margin-left: -250/75+rem;
            margin-top: -250/75+rem;
            line-height: 500/75+rem;
            text-align: center;
            color: #fff;
            font-weight: bold;
            font-size: 460/75+rem;
            z-index: 1000;
        }
    }

    .timer {
        position: relative;
        margin: 30/75+rem auto 30/75+rem;
        width: 25%;
        height: 160/75+rem;
        line-height: 150/75+rem;
        text-align: center;
        background: #151414;
        border-radius: 20/75+rem;
    }

    strong {
        font-size: 120/75+rem;
        color: #fff;
        letter-spacing: 6px;
    }

    .line {
        position: absolute;
        top: 80/75+rem;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
        content: '';
        background: #fff;
        border-bottom: 1px solid #000;
    }

    .second {
        display: block;
        position: absolute;
        right: 15/75+rem;
        bottom: -40/75+rem;
        color: #fff;
        font-size: 24/75+rem;
    }

    .btn {
        margin: 30/75+rem auto 30/75+rem;
        display: block;
        width: 15%;
        height: 160/75+rem;
        line-height: 150/75+rem;
        text-align: center;
        font-size: 100/75+rem;
        color: #fff;
        font-weight: bolder;
        background: #e72b0e;
        border-radius: 20/75+rem;
        box-shadow: 0 10px 0 1px #ffad5a;
    }
</style>