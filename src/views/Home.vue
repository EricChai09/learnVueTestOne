<template>
  <div class="home">
    主页
    <div>{{ $store.state.counte }}</div>
     <div>{{ $store.getters.powCount}}</div>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {},
  methods: {
    add() {
      this.$store.commit("increment");
    },
    sub() {
      this.$store.commit("decrement");
    },
  },
  mounted() {},
};
</script>
