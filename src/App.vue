<template>
  <div id="app">
    <main-tab-bar/>
    <router-view />
  </div>
</template>
<script>

import MainTabBar from "./components/MainTabBar";
export default {
  data(){
    return{

    }
  },
  components: {
    MainTabBar
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
