<template>
  <div class="tab-bar-item">
     <slot name='item-icon'></slot>
     <slot name='item-text'></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align:center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  flex: 1;
  text-align:center;
  height: 30px;
  font-size: 14px;
  vertical-align: middle;
}
</style>