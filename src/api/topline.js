import http from  "@utils/request";

export const toplineapi=(pag,lim)=>http({
    method:"get",
    url:"/m/recommends/articles",
    data:{
        
       page:pag,
       size:lim

    }
})


// https://jktt-api.jianke.com?page=1&size=10