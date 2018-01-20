<template>
  <div class="Home">
      <home-header></home-header>
      <div class="content clearfix">
        <list-group v-for="item in items"
              :price="item.price"
              :title="item.title"
              :img="item.img"
              :key="item.id">
        </list-group>
      </div>
      <common-footer></common-footer>
  </div>
</template>

<script>
  import HomeHeader from '@/components/HomeHeader'
  import ListGroup from '@/components/ListGroup'
  import CommonFooter from '@/components/CommonFooter'
  export default {
    data (){
        return {
          items : []
        }
    },
    components : {
      HomeHeader,
      ListGroup,
      CommonFooter
    },
    created () {
      // console.log(1)
      this.$http.get('/api/goods').then((data) => {
        this.items = data.body.data;
        var obj = JSON.parse(JSON.stringify(this.items)); // Data object转换成普通对象 
        console.log(obj); // 使其打印 罗列清楚
      })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .clearfix:after{
  content: ".";
  display: block;
  line-height: 0;
  visibility: hidden;
  height: 0;
  clear: both;
  }
  .clearfix{
    zoom: 1;
  }
</style>
