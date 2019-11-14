import {categroies,goods} from "@api/classify";

let state = {
    categroy:[],
    goods:[],
    adimg:"",
    flag:0
}


let actions = {
    handleActionCategroy({commit}){
        commit("handleGetCategroy")
    },
    handleActionGetGoods({commit},params){
        if(!params){
            params={},
            params.pid=191
            params.ad="https://img.tianditao.com/mall/common/201911/81966b59f81d47f8b83c13bfb6902d03.jpg",
            params.index=0
        }
        commit("handleGetGoods",params)
    }
}

let mutations = {
    async handleGetCategroy(state){
        let data =await categroies();
        state.categroy=data
    },

    async handleGetGoods(state,params){
        let data= await goods(params.pid);
        state.goods=data;
        state.adimg=params.ad;
        state.flag=params.index
        sessionStorage.setItem("has",JSON.stringify(data))
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced:true
}