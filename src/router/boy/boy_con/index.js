export default{
    path:"/boy/boy_con/:ids/:title",
    component:_=>import("@pages/boy/boy_con"),
    name:"boyCon",
    meta:{
        requireAuth:false,
        flag:false
    },
}