import Vue from "vue";
import VueRouter from "vue-router";
import topline from "./topline"
import global from "./global"
import gtype from "./global/gtype/gtype"
import gril from "./gril"
import addblood from "./addblood"
import weight_loss from "./weight_loss"
import home from "./home";
import classify from "./classify";
import cart from "./cart";
import Boy from "./boy";
import Search from './search';
import finds from "./finds"
import City from "./city"
import BoyCon from './boy/boy_con/index'
import Detail from "./detail"
import Cookie from "vue-cookies"
import Info from './info'
Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        City,
        classify,
        topline,
        cart,
        gril,
        addblood,
        weight_loss,
        Boy,
        Search,
        finds,
        BoyCon,
        Detail,
        Info,
        {
            path:"/mine",
            name:"mine",
            component:_=>import("@pages/mine"),
            meta:{
                flag:true,
                requireAuth:true
            },
        },
        global,
        gtype,
        {
            path:"/login",
            component:_=>import("@pages/login"),
            name:"login",
            meta:{
                flag:false
            }
        },
        {
            path:"/register",
            component:_=>import("@pages/register"),
            name:"register",
            meta:{
                flag:false
            }
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path != "/login" && to.meta.requireAuth){
        if(Cookie.get("token")){
            next();
        }else{
            next({name:"login",params:{to:to.path}})
        }
    }else{
        next();
    }
})


export default router;
/*
localStorage.getItem("token")
*/