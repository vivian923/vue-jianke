import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home"
import classify from "./classify"
import topline from "./topline"
import cart from "./cart"
import gril from "./gril"
import addblood from "./addblood"
import weight_loss from "./weight_loss"


Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        classify,
        topline,
        cart,
        gril,
        addblood,
        weight_loss,
        {
            path:"/mine",
            name:"mine",
            component:_=>import("@pages/mine"),
            meta:{
                flag:true,
                requireAuth:true
            }
        },
        {
            path:"/login",
            component:_=>import("@pages/login"),
            name:"login",
            meta:{
                flag:false
            }
        }
        
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path != "/login" && to.meta.requireAuth){
        if(localStorage.getItem("token")){
            next();
        }else{
            next({name:"login",params:{to:to.path}})
        }
    }else{
        next();
    }
})
export default router;