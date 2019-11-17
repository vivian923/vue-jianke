import axios from "axios"

let state = {
    sCount : 0
}

let actions = {
    async handleGetCount({commit}){
        let data = await axios({
            methods: "get",
            url: "http://localhost:3000/goods"
        })
        let Num=0;
        for(var i=0;i<data.data.length;i++){
            Num+=data.data[i].num
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