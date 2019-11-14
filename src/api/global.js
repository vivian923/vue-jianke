import http from "@utils/request";

/*
    限时抢购
    @params:ids 商品code
*/
export const global=(ids,platform)=>http({
    methods:"get",
    url:"v1/simple/products",
    data:{
        ids:ids,
        platform:platform
    }
})

