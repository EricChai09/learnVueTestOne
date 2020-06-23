<template>
  <div class="main-tab-bar">
  <tab-bar>
        <tab-bar-item path='/home' activeColor='blue'>
          <img src="../assets/img/home.svg" slot="item-icon">
           <img src="../assets/img/home-active.svg" slot="item-icon-active">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path='/profile' activeColor='red'>
          <img src="../assets/img/profile.svg" slot="item-icon">
          <img src="../assets/img/profile-active.svg" slot="item-icon-active">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path='/car' activeColor='blue'>
           <img src="../assets/img/buyCar.svg" slot="item-icon">
            <img src="../assets/img/buyCar-active.svg" slot="item-icon-active">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path='/about' activeColor='blue'>
          <img src="../assets/img/me.svg" slot="item-icon">
           <img src="../assets/img/me-active.svg" slot="item-icon-active">
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
  </div>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
 components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
