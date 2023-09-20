<template>
    <div style="margin-bottom: 70px;">
        <div style="width: 100%; height: 50px; text-align: center; line-height: 50px;">
            <h3>商品详情</h3>
        </div>
        <div style="width: 100%; position:  relative;">
            <div v-html="detail.content" style="width: 100%; overflow: hidden;">

            </div>
            <div v-for="(item, index) in detail.pics" :key="index">
                <img :src="item.pic" alt="" style="width: 100%; position:absolute ; top: 200px;">
            </div>
        </div>
        <div style="margin-top: -50px;">

            <span style="font-size: 25px; color: rgb(0, 255, 76);">￥{{ detail.basicInfo?.minPrice }}.00</span>
            <br>
            <span style="color: #999;"> 价格<s>{{ detail.basicInfo?.originalPrice }}</s></span>
            <br>
            <div style="color: #5d5d5d; font-size: 20px;">
                {{ detail.basicInfo?.name }}
            </div>
            <div style="color: #999; font-size: 16px;">
                {{ detail.basicInfo?.characteristic }}
            </div>
        </div>

    </div>
    <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="首页" @click="fanhui" />
        <van-action-bar-icon icon="shop-o" text="客服" />
        <van-action-bar-icon icon="cart-o" text="购物车" />
        <van-action-bar-button text="加入购物车" @click="onClickButton" />
        <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
</template>

<script  setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { detailAPI } from "@/api/api";
import { useStore } from "vuex";
const store = useStore()
const detail = ref([])
const route = useRoute();
const router = useRouter();
const fanhui = () => {
    router.push('/')
}
const onClickButton = () => {
    // Store.commit('add',detail.value)
    store.commit('add', detail.value)
}
const mycreated = () => {
    // console.log(route.query.id);
    detailAPI({ id: route.query.id }).then(res => {
        // console.log(res.data.data);
        detail.value = res.data.data
    })
}
mycreated()
</script>

<style lang="scss" scoped></style>