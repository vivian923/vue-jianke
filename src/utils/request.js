import axios from "axios";
import zmhUI from "@lib"

const server =axios.create({
    timeout:5000,
    //baseUrl:"",
    withCredentials:true
})

//请求拦截器 
server.interceptors.request.use((config)=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }
    if(config.url !="/Search/SearchPanGuWordResult" && config.url !="/goods/delete" && config.url !="/goods/addGoods"){
        zmhUI.Loading.loadingMount();
    }

    return config;

},(err)=>{
    return Promise.reject(err)
}) 

//响应拦截
server.interceptors.response.use((res)=>{
    if(res.status==200 && res.config.url != "/Search/SearchPanGuWordResult" && res.config.url !="/goods/delete" && res.config.url !="/goods/addGoods" ){
        zmhUI.Loading.loadingDestroy();
        return res.data;
    }else{
        return res.data;
    }
  
},(err)=>{
    return Promise.reject(err);
})

export default server;