
import axios from "axios"

let state = {
    goodsList: [],
    selectedAll:true
}

let actions = {
    async  handleActionsGetGoods({ commit }) {
        let data = await axios({
            methods: "get",
            url: "http://localhost:3000/goods"
        })
        for(var i=0;i<data.data.length;i++){
            data.data[i].flag=true;
        }
        commit("handleMutationsGetGoods", data.data);
    }
}


let mutations = {
    handleMutationsGetGoods(state, prarms) {
        state.goodsList = prarms;
    },
    handleChange(){
        state.selectedAll=!state.selectedAll;
        state.goodsList.forEach(item=>{
            item.flag=state.selectedAll
        })
    },

    handleGoodsItemChnage(state,index){
        state.goodsList[index].flag=!state.goodsList[index].flag
        let stop = true;
        for(var i=0;i<state.goodsList.length;i++){
            if(!state.goodsList[i].flag){
                stop =false;
                break;
            }
        }
        state.selectedAll=stop;
    },
    handleReduce(state,index){
        if(state.goodsList[index].num<=1){
            state.goodsList[index].num=1
        }else{
            state.goodsList[index].num--
        }   
    },
    handleAdd(state,index){
        state.goodsList[index].num++
    }
}

let getters={
    countPrice(state){
        let sPrice=0;
        let sCount=0;
        for(var i=0;i<state.goodsList.length;i++){
            if(state.goodsList[i].flag){
                sCount+=state.goodsList[i].num;
                sPrice+=state.goodsList[i].num * (state.goodsList[i].price * 10);
                if(sPrice>=500){
                    sPrice-=100
                }
            }
        }
        return{
            sPrice,
            sCount
        }
    }
}
export default{
    state,
    actions,
    mutations,
    getters,
    namespaced:true
}


