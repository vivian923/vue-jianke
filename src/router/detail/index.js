export default{
    path:"/detail/:productImageUrl/:productName/:productPrice/:introduction",
    component:_=>import ("@pages/detail"),
    name:"detail",
    meta:{
        flag:false,
        requireAuth:false
    }
}