export default{
    path:"/search",
    component:_=>import("@pages/search"),
    name:"search",
    meta:{
        requireAuth:false
    }
}