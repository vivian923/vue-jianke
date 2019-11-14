import {cityApi} from "@api/city";

let state ={
    cityList:JSON.parse(sessionStorage.getItem("cityList"))||[],
    hotCity:JSON.parse(sessionStorage.getItem("hotCity"))||[],
    letterFirst:JSON.parse(sessionStorage.getItem("letter"))||[],
    cityId:sessionStorage.getItem("cityId")||1,
    nm:sessionStorage.getItem("nm")||"北京"
}

let actions= {
    async handleGetList({commit}){
        let data =await cityApi()
        commit("handleMutationsGetList",data.data.cities)
    }
}

let mutations ={

    handleUpdateCity(state,params){
        state.cityId=params.id;
        state.nm=params.nm;
        sessionStorage.setItem("nm",params.nm);
        sessionStorage.setItem("cityId",params.id)
    },
    handleMutationsGetList(state,cities){
        let cityList=[],hotCity=[],letter=[];
        /*
            hotCity = [
                {
                    id:"",
                    nm:""
                }
            ]

            cityList = [
                {
                    index:A,
                    list:[{id:"",nm:""}]
                },
                {
                    index:B,
                    list:[]
                }
            ]
        */
       //热门城市
       for(var i =0;i<cities.length;i++){
           if(cities[i].isHot){
               hotCity.push({id:cities[i].id,nm:cities[i].nm});
           }
       }
       //城市列表
       for(var i=0;i<cities.length;i++){
        let letterFirst = cities[i].py.slice(0,1).toUpperCase();
        if(isCityList(letterFirst)){
            //不存在
            cityList.push({index:letterFirst,list:[{id:cities[i].id,nm:cities[i].nm}]})
            letter.push(letterFirst)
        }else{
            //存在

            for(var j=0;j<cityList.length;j++){
                if(cityList[j].index == letterFirst){
                    cityList[j].list.push({id:cities[i].id,nm:cities[i].nm});
                    break;
                }
            }

        }
    }


       //判断城市标识是否存在在cityList中

       function isCityList(letterFirst){
        var bStop = true;
        for(var i=0;i<cityList.length;i++){
            if(cityList[i].index == letterFirst){
                bStop = false;
                break;
            }
        }

        return bStop;
    }

       //字典排序
       cityList.sort((a,b)=>{
           if(a.index>b.index){
               return 1;
           }else{
               return -1
           }
       })
       letter.sort((a,b)=>{
        if(a>b){
            return 1;
        }else{
            return -1
        }
    })

       state.cityList=cityList;
       state.hotCity=hotCity
       state.letterFirst=letter
       sessionStorage.setItem("cityList",JSON.stringify(cityList));
       sessionStorage.setItem("hotCity",JSON.stringify(hotCity));
        sessionStorage.setItem("letter",JSON.stringify(letter));
    }
}


export default {
    state,
    actions,
    mutations,
    namespaced:true
}