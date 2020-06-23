<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"#1a99dc"
    }
  },
  data() {
    return {
     
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      //console.log(123)
      this.$router.push(this.path)
    }
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  flex: 1;
  text-align: center;
  height: 30px;
  font-size: 14px;
  vertical-align: middle;
}
.active {
  color: #1a99dc;
}
</style>
