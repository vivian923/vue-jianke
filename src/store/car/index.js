import axios from "axios"
import {goodsList} from "@api/goods"
let state = {
    goodsList: [],
    selectedAll:true
}

let actions = {
     async handleActionsGetGoods({commit}) {
        let data = await goodsList(1,10)
        for(var i=0;i<data.data.list.length;i++){
            data.data.list[i].flag=true;
        }
        commit("handleMutationsGetGoods",data.data.list) 
    },
    async  handleDelete({dispatch},prarms){
        let data= await  axios({
                 method:"delete",
                 url:"http://localhost:3000/goods"+"/"+prarms,
             })      
            dispatch("handleActionsGetGoods")
         }
}


let mutations = {
    handleMutationsGetGoods(state,data) {
        state.goodsList=data;
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
        if(state.goodsList[index].goodsNum<=1){
            state.goodsList[index].goodsNum=1
        }else{
            state.goodsList[index].goodsNum--
        }   
    },
    handleAdd(state,index){

        state.goodsList[index].goodsNum++
    }
}

let getters={
    countPrice(){
        let sPrice=0,sCount=0;
        for(var i=0;i<state.goodsList.length;i++){
            if(state.goodsList[i].flag){
                sCount+=state.goodsList[i].goodsNum;
                sPrice+=((state.goodsList[i].goodsPrice*10*state.goodsList[i].goodsNum))
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


