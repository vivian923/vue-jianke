import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home"
import classify from "./classify"
import topline from "./topline"
import cart from "./cart"
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
        {
            path:"/mine",
            name:"mine",
            component:_=>import("@pages/mine")
        }
        
    ]
})

export default router;