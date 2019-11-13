import http from "@utils/request";

export const boy=(ids)=>http({
    method:"get",
    url:"/v1/simple/products",
    data:{
        ids:ids,
        platform:"mobile"
    }
})