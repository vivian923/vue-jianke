import axios from "axios"
import {goodsList} from "@api/goods"
let state = {
    sCount : 0
}

let actions = {
    async handleGetCount({commit}){
        // let data = await goodsList(1,10)
        // let Num=0;
        // for(var i=0;i<data.data.list.length;i++){
        //     Num+=data.data.list[i].goodsNum
        // }
        
        // commit("mutationsGetCount",Num);
        let data=this.state.car.goodsList
        let Num=0;
        for(var i=0;i<data.length;i++){
            Num+=data[i].goodsNum
        }
        
        commit("mutationsGetCount",Num);
    }
}

let mutations = {
    mutationsGetCount(state,Num){
        state.sCount=Num
    }
}

let getters = {
    count(state){
        return state.sCount
    }
}

export default{
    state,
    actions,
    mutations,
    getters,
    namespaced:true
}