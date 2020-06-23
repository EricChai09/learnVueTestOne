<template>
  <div id="app">
     <tab-bar>
        <tab-bar-item>
          <img src="../../my-test-vue-cli3/src/assets/img/home.svg" slot="item-icon">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item>
          <img src="../../my-test-vue-cli3/src/assets/img/profile.svg" slot="item-icon">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item>
           <img src="../../my-test-vue-cli3/src/assets/img/buyCar.svg" slot="item-icon">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item>
          <img src="../../my-test-vue-cli3/src/assets/img/me.svg" slot="item-icon">
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
    <div id="nav">
      <!-- <router-link to="/" active-class="active" >Home</router-link> |
      <router-link to="/about" active-class="active">About</router-link> -->
     
    </div>
    <router-view />
  </div>
</template>
<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style lang="less">
@import "./assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  .active {
    color: #fff;
    background-color: rgb(77, 100, 100);
  }
  a {
    font-weight: bold;
    //color: #2c3e50;

    &.router-link-exact-active {
      // color: #42b983;
    }
  }
}
</style>
