<template>
    <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; height: 50px;">
        <div>购物车</div>
        <div style="color: rgb(4, 0, 255);">编辑</div>
    </div>
    <div>
        <div>

            <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;
position: relative;" v-for="(item, index) in store.state.goodss" :key="index">
                <div>
                    <van-checkbox v-model="item.basicInfo.limitation" @click="dan"></van-checkbox>
                </div>
                <div style="width: 98%;">
                    <van-card :price="item.basicInfo?.minPrice" :desc="item.basicInfo?.recommendStatusStr"
                        :title="item.basicInfo?.name" :thumb="item.basicInfo?.pic" />
                </div>
                <div style="position: absolute; right: 0; bottom: 0;">
                    <van-stepper v-model="item.basicInfo.minBuyNumber" />
                </div>
            </div>
        </div>
        <div>
            <van-submit-bar :price="total" :button-text="'去结算' + '(' + store.state.goodss.length + ')'"
                style="margin-bottom: 50px;" @submit="shan">
                <van-checkbox v-model="checked" @click="quan">全选</van-checkbox>
            </van-submit-bar>
        </div>
    </div>
    <van-empty description="购物车快饿扁了T.T" v-if="!store.state.goodss.length">
        <van-button round type="primary" class="bottom-button" @click="guang">去逛逛</van-button>
    </van-empty>
    <van-tabbar route>
        <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/classification" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item replace to="/Shopping" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/Personal" icon="manager-o">个人中心</van-tabbar-item>
    </van-tabbar>
</template>

<script  setup>
import store from "@/store";
import { ref, reactive, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const checked = ref(false)
const route = useRoute();
const router = useRouter();
const quan = () => {
    store.state.goodss.forEach(item => {
        item.basicInfo.limitation = checked
        // console.log(item);
    })

}
const guang = () => {
    router.push('/')
}
const dan = () => {
    checked.value = store.state.goodss.every(item => item.basicInfo.limitation)
}
const total = (computed(() => {
    let sum = 0
    store.state.goodss.forEach(item => {
        if (item.basicInfo.limitation) {
            sum += item.basicInfo?.minPrice * item.basicInfo.minBuyNumber * 100
        }
    })
    return sum
}))
const shan = () => {
    store.commit('del')
}

</script>

<style lang="scss" scoped>
.bottom-button {
    width: 100px;
    background-color: white;
    border: 1px solid rgb(0, 255, 64);
    color: rgb(0, 255, 64);
}
</style>