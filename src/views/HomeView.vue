<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <img :src="item.picUrl" alt="" style="width: 100%; height: 250px;">
      </van-swipe-item>
    </van-swipe>
    <div style="width: 100%; text-align: center;">
      <h3>商品列表</h3>
    </div>
    <div class="mylist">
      <div v-for="(item, index) in goods" :key="index" class="goods">
        <img :src="item.pic" alt="" style="width: 100%; height: 200px;">
        <div>{{ item.name }}</div>
        <div style="width: 100%; height: 50px; display: flex;
        justify-content: space-between; align-items: center;">
          <div>
            <span style="color: rgb(0, 255, 76); font-size: 20px;">￥{{ item.minPrice }}</span>
            <s style="color: #999;">{{ item.originalPrice }}</s>
          </div>
          <div>
            <button class="btn" @click="purchase(item)">购买</button>
          </div>
        </div>
      </div>
      <div style="width: 100%; text-align: center; color: #999;">
        没有更多了
      </div>
    </div>

    <van-tabbar route>
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/classification" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/Shopping" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/Personal" icon="manager-o">个人中心</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script  setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { bannerAPI, goodsAPI } from "@/api/api";
const banner = ref([])
const goods = ref([])
const route = useRoute();
const router = useRouter();
const mycreated = () => {
  bannerAPI().then(res => {
    // console.log(res.data.data);
    banner.value = res.data.data
  })
  goodsAPI().then(res => {
    // console.log(res.data.data);
    goods.value = res.data.data
  })
}
mycreated()
const purchase = (val) => {
  // console.log(val);
  router.push({
    path: 'details',
    query: {
      id: val.id
    }
  })
}
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}

.mylist {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 70px;

  .goods {
    margin-top: 15px;
    width: 48%;
    height: 300px;
  }

  .btn {
    width: 50px;
    height: 30px;
    border: 1px solid rgb(0, 255, 76);
    color: rgb(0, 255, 76);
  }
}
</style>