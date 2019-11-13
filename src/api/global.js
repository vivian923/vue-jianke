import http from "@utils/request";

/*
    限时抢购
    @params:ids 商品code
*/
export const global=(ids)=>http({
    methods:"get",
    url:"v1/simple/products",
    data:{
        ids:ids,
        platform:"mobile"
    }
})

/*
    免税专区
    @params:ids 商品code
*/

export const rax=(ids)=>http({
    methods:"get",
    url:"v1/simple/products",
    data:{
        ids:ids,
        platform:"mobile"
    }
})

export const gtype=(ids)=>http({
    methods:"get",
    url:"v1/simple/products",
    data:{
        ids:ids,
        platform:"app"
    }
})
