<template>
    <div class="footer">
        <router-link
            v-for="item in nav"
            :key="item.id"
            tag="div"
            :to="item.path"
        >
            <span class="iconfont" v-html="item.icon"></span>
            <p>{{item.text}}</p>
        </router-link>
	</div>    
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return{
            nav:[
                {
                    id:0,
                    text:"首页",
                    icon:"&#xe602;",
                    path:"/home"
                },
                {
                    id:1,
                    text:"分类",
                    icon:"&#xe66c;",
                    path:"/classify"
                },
                {
                    id:2,
                    text:"头条",
                    icon:"&#xe60a;",
                    path:"/topline"
                },
                {
                    id:3,
                    text:"购物车",
                    icon:"&#xe62c;",
                    path:"/cart"
                },
                {
                    id:4,
                    text:"我",
                    icon:"&#xe653;",
                    path:"/mine"
                },
            ]
        }
    }
}
</script>

<style scoped>
.footer{
    width:100%;
	height: 0.51rem;
	border-top: 0.01rem solid #ccc;
	display: flex;
	align-items: center;
    justify-content: space-around;
    position: fixed;
    left:0;
    bottom:0;
    padding-top:0.05rem;
    background: #fff
}
.footer div{
	color: #333;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.footer div span{
	font-size: 0.2rem;
}
.footer div p{
	font-size: 0.14rem;
}
.footer .router-link-active{
	color: #28B2F9;
}
</style>