export default{
    path:"/info",
    component:_=>import("@pages/info"),
    name:"info",
    meta:{
        flag:false,
        requireAuth:false
    }
}