import http from "./http";
export const bannerAPI = (params) => http.get('/banner/list', {params})

export const goodsAPI = (params) => http.get('/shop/goods/list', {params})

export const detailAPI = (params) => http.get('/shop/goods/detail', {params})