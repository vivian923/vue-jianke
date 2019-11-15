export default{
    path:"/detail",
    component:_=>import ("@pages/detail"),
    name:"detail",
    meta:{
        flag:false,
        requireAuth:false
    }
}