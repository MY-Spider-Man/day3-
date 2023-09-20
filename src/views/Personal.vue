<template>
  <van-tabbar route>
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/classification" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/Shopping" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/Personal" icon="manager-o">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<script  setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<style lang="scss" scoped></style>