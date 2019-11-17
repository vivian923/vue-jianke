import Vue from "vue"
import alert from "./index.vue"

export default (function(){
    var defaultVal={
        title:"彩蛋",
        content:"没错这就是一个彩蛋"
    }
    let alertFn=Vue.extend(alert);
    return(option)=>{
            for (var key in option){
            defaultVal[key]=option[key];
        }

        let messageBoxVm = new alertFn({
            el:document.createElement("div"),
            data:{
                title:defaultVal.title,
                content:defaultVal.content
            },
            methods: {
                handleClose(){
                    document.body.removeChild(messageBoxVm.$mount().$el)
                },
                handleOk(){
                    defaultVal.ok && defaultVal.ok()
                    document.body.removeChild(messageBoxVm.$mount().$el)
                }
            },
        })
        document.body.appendChild(messageBoxVm.$mount().$el)
    }
    

})()