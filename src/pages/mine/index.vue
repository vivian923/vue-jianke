<template>
    <div class="page">
        <div class="main">
			<Header title="我的健客" icon/>
			<div class="top">
				<div class="head">
                    <img src="../../../public/img/nomal.png" alt="">
                </div>
				<p><span>{{phone}}</span> &nbsp;&nbsp; <span class="iconfont">&#xe603;</span> <span>普通</span></p>
				<p>健康币:<span>0</span> 成长值:<span>0</span></p>
			</div>
			
			<div class="my_order">
				<div class="order_left">
					我的订单
				</div>
				<div class="order_right">
					查看全部订单
				</div>
			</div>
			
			<div class="order_nav">
				<div  class="order_nav_con">
					<i class="iconfont">&#xe644;</i>
					<span>待付款</span>
				</div>
				<div  class="order_nav_con">
					<i class="iconfont">&#xe669;</i>
					<span>待发货</span>
				</div>
				<div  class="order_nav_con">
					<i class="iconfont">&#xe69e;</i>
					<span>待收货</span>
				</div>
				<div  class="order_nav_con">
					<i class="iconfont">&#xe63d;</i>
					<span>待评价</span>
				</div>
			</div>
			
			<div class="nav_info">
				<div class="nav_info_con">
					<i class="iconfont">&#xe62c;</i>
					<span>购物车</span>
				</div>
				<div class="nav_info_con">
					<i class="iconfont">&#xe601;</i>
					<span>我的收藏</span>
				</div>
				<div class="nav_info_con">
					<i class="iconfont">&#xe6c1;</i>
					<span>优惠券</span>
				</div>
				<div class="nav_info_con">
					<i class="iconfont">&#xe65b;</i>
					<span>我的问答</span>
				</div>
				<div class="nav_info_con">
					<i class="iconfont">&#xe640;</i>
					<span>用药咨询</span>
				</div>
				<div class="nav_info_con">
					<i class="iconfont">&#xe8a6;</i>
					<span>会员中心</span>
				</div>
				<div class="nav_info_con">
					<i class="iconfont">&#xe614;</i>
					<span>线下药店</span>
				</div>
			</div>
			
			<div class="bottom">
				<ul>
					<li>
						<a href="#">
							欢迎您:<span>{{phone}}</span>
						</a> |
						<v-touch
							tag="a"
							@tap="exit()"
						>退出</v-touch>
					</li>
					<li>
						<a href="#">关于健客</a> |
						<a href="#">帮助中心</a>
					</li>
				</ul>
				<p>微信关注【健客网上药店】领取200元优惠券</p>
				<p>健客全国免费专线 400-6666-800</p>
				<p>药品交易资格证：粤C20140009</p>
				<p>Copyright©2006-2017 健客 版权所有</p>
			</div>
		</div>
    </div>
</template>

<script>
import {mapState} from "vuex"
import Cookie from "vue-cookies"
import zmhUI from "@lib"
export default {
	name:"Mine",
	methods:{
		exit(){
			zmhUI.MessageBox({
				title:"退出登陆",
				content:"是否退出",
				ok:()=>{
					Cookie.remove("token")
					this.$router.push("/home")
				}
			})
			
		}
		
	},
	computed:{
        ...mapState({
            phone:state=>state.account.name,
            pwd:state=>state.account.pwd
        })
    }
}
</script>

<style scoped>
    .page{
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }
    .main{
	flex: 1;
	overflow-y: auto;
	background: #eee;
}
.top{
	height: 1.7rem;
	background: #1096fa;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.top .head{
	width: 0.75rem;
	height: 0.75rem;
	border-radius: 50%;
	background: white;
	margin-bottom: 0.05rem;
}
.top .head img{
    width: 100%;
    height: 100%;
}
.top p{
	font-size: 0.12rem;
	color: #333;
	margin: 0.02rem 0;
}
.top p:nth-of-type(1) span:nth-of-type(2){
    font-size: 0.1rem;
    color: gold;
}
.my_order{
	height: 0.44rem;
	border-bottom: 0.01rem solid #eee;
	padding: 0 0.1rem;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.my_order .order_left{
	width: 2.075rem;
	height: 0.44rem;
	line-height: 0.44rem;
	font-size: 0.15rem;
}
.my_order .order_right{
	width: 1.4745rem;
	height: 0.44rem;
	line-height: 0.44rem;
	font-size: 0.12rem;
	padding-left: 0.7rem;
}
.order_nav{
	height: 0.585rem;
	display: flex;
	margin-bottom: 0.1rem;
}
.order_nav .order_nav_con{
	width: 0.9375rem;
	height: 0.585rem;
	background: #fff;
	padding: 0.1rem 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.order_nav .order_nav_con i{
	font-size: 0.25rem;
}
.order_nav .order_nav_con span{
	font-size: 0.12rem;
}
.nav_info{
	height: 1.39rem;
	background: white;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 0.1rem;
}
.nav_info .nav_info_con{
	width: 0.9375rem;
	height: 0.7rem;
	border-bottom: 0.01rem solid #eee;
	border-right: 0.01rem solid #eee;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0.15rem 0;
}
.nav_info .nav_info_con i{
	font-size: 0.25rem;
}
.nav_info .nav_info_con span{
	font-size: 0.12rem;
}
.bottom{
	height: 1.36rem;
	background: white;
	display: flex;
	flex-direction: column;
}
.bottom ul{
	height: 0.44rem;
	padding: 0.14rem 0.15rem 0.12rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.bottom ul li{
	font-size: 0.12rem;
}
.bottom ul li a{
	color: #333;
}
.bottom p:nth-of-type(1){
	font-size: 0.13rem;
	color: #0075DE;
}
.bottom p{
	font-size: 0.12rem;
	color: #333;
	text-align: center;
	margin: 0.035rem 0 ;
}
</style>