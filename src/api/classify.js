import http from "@utils/request";

export const categroies=()=>http({
    method:"get",
    url:"/category/api/fullCategories",
    data:{
            platform:1
        }
})

export const goods=(pid)=>http({
    method:"get",
    url:"/category/api/fullCategories",
    data:{
            pid:pid,
            platform:1
        }
})
