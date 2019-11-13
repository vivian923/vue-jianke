import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home";
import classify from "./classify";
import topline from "./topline";
import cart from "./cart";
import Boy from "./boy";
import Search from './search';
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
        Boy,
        Search,
        {
            path:"/mine",
            name:"mine",
            component:_=>import("@pages/mine"),
            meta:{
                flag:true,
                requireAuth:false
            }
        },
        {
            path:"/login",
            component:_=>import("@pages/login"),
            name:"login",
            meta:{
                flag:false
            }
        },
        {
            path:"/global",
            component:_=>import("@pages/global"),
            name:"global",
            meta:{
                flag:false
            },
            children:[
                {
                   path:"/global",
                   redirect:"/global/rax" 
                },
                {
                    path:"rax",
                    component:_=>import("@components/freerax"),
                    name:"rax",
                    meta:{
                        flag:false,
                        requireAuth:false
                    }
                },
                {
                    path:"discount",
                    component:_=>import("@components/discount"),
                    name:"discount",
                    meta:{
                        flag:false,
                        requireAuth:false
                    }
                }
            ]
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