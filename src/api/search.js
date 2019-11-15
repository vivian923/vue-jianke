import http from "@utils/request";

export const shopSearch=(content)=>http({
    method:"get",
    url:"/Search/SearchPanGuWordResult",
    data:{
        KeyWord:content
    },
})


