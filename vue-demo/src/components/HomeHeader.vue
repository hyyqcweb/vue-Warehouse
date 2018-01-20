<template>
  <div class="HomeHeader">
    <div class="header">
      <h4 class="contact">主页</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .HomeHeader{
    width: 100%;
    position: relative;
    height: 2rem;
  }
    .header{
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
      .contact{
        width: 100%;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        font-family:"Microsoft YaHei";
        font-size: 1rem;
        font-weight: normal;
        color:#fff;
      }
    } 
 
</style>