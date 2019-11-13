export default{
    path:"/boy",
    component:_=>import("@pages/boy"),
    name:"boy",
    meta:{
        requireAuth:false
    }
}