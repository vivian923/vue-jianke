// import LoadingView from "./index.vue"
// import Vue from "vue"

// class JSloading{
//     constructor(){
//         let LoadingFn=Vue.extend(LoadingView)
//         this.LoadingVm=new LoadingFn({
//             el:document.createElement("div")
//         })
//         console.log(this.LoadingVm.$mount().$sel)
//     }
//     loadingMount(){
//         document.body.appendChild(this.LoadingVm.$mount().$sel)
//     }
//     loadingDestroy(){
//         document.body.removeChild(this.LoadingVm.$mount().$sel)
//     }
// }

// export default new JSloading()

import LoadingView from "./index.vue";
import Vue from "vue";
class JSloading{
    constructor(){
        let LoadingFn = Vue.extend(LoadingView);
        this.loadingVm = new LoadingFn({
            el:document.createElement("div"),
        })  

        
    }
    loadingMount(){
        document.body.appendChild(this.loadingVm.$mount().$el);
    }
    loadingDestory(){
        document.body.removeChild(this.loadingVm.$mount().$el);
    }
}

export default new JSloading();