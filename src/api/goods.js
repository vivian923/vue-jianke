import http from "@utils/request"

export const goodsList=(page,limit)=>http({
    method:"get",
    url:"/goods/goodsList",
    data:{
        page:page,
        limit:limit
    }
})

export const goodsAdd=(info)=>http({
    method:"post",
    url:"/goods/addGoods",
    data:{
        goodssName:info.name,
        goodsPrice:info.price,
        goodsNum:info.num,
        goodsIntro:info.intro,
        goodsImgUrl:info.pic
    }
})

export const goodsDel=(id)=>http({
    method:"get",
    url:"/goods/delete",
    data:{
        id
    }
})
    
