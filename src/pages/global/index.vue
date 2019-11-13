<template>
    <main>
        <div class="header">
            <img src="https://img5.jianke.com/mall/vmall/index/201903/a0a82c1dd7dd45ad843872c870d03743.jpg">
        </div>
   
        <div class="nav_box">
            <ul>
                <router-link 
                    v-for="(item,index) in options" 
                    :key=index
                    tag="li"
                    :to="{name:'gtype',params:{ids:item.ids,ad:item.ad}}"
                >
                    <div>
                        <img :src="item.img">
                    </div>
                    <span>{{item.title}}</span>
                </router-link>
            </ul>
        </div>
        <div class="nav_box">
            <ul>
               <router-link 
                    v-for="(item,index) in options2" 
                    :key=index
                    tag="li"
                    :to="{name:'gtype',params:{ids:item.ids,ad:item.ad}}"
                    >
                    <div>
                        <img :src="item.img">
                    </div>
                    <span>{{item.title}}</span>
               </router-link>
            </ul>
        </div>
        <div class="timelimit">
            <img src="https://img5.jianke.com/mall/vmall/index/201903/1ea9df3e4bd44cc78e6e521ccdb973b5.jpg">
        </div>
        <section class="slider">
            <div class="items" v-for="item in time" :key="item.productCode">
                <img :src="item.productImageUrl | imgurl">
                <p class="name">{{item.productName}}</p>
                <p class="price">{{item.productPrice | price}}</p>
            </div>
        </section>
        <section class="suspend">
            <img src="https://img5.jianke.com/mall/vmall/index/201903/b0a0711906554848b6892487ce1e168e.gif">
        </section>
        <div class="timelimit">
            <img src="https://img5.jianke.com/mall/vmall/index/201903/207339f0aafb4a4eba842ac614f50dbe.jpg">
        </div>
        <article class="list">
            <div class="imgl">
                <img src="https://img5.jianke.com/mall/vmall/index/201903/93e6ee34d94646f8aa98ab722842f93d.jpg">

            </div>
            <div class="imgr">
                <img src="https://img5.jianke.com/mall/vmall/index/201903/98b33ba79c394341aad54ec3679be7cb.jpg">
                <img src="https://img5.jianke.com/mall/vmall/index/201903/66198a6c73b047e69e539b0a28a6c12b.jpg">
            </div>
        </article>
        <section class="content">
            <div class="cbar">
                <ul>
                    <router-link 
                    to="/global/rax"
                    replace
                    tag="li"
                    class="tips"
                    @click.native="handleToggle('3%')"
                    >免税专区</router-link>
                    <router-link 
                    to="/global/discount"
                     replace
                    tag="li"
                    class="tips"
                     @click.native="handleToggle('52%')"
                    >
                        2件5折</router-link>
                    <transition name="slider">
                    <li class="slide" ref="slider"></li>
                    </transition>
                </ul>
            </div>
            <keep-alive>
            <router-view></router-view>
            </keep-alive>
        </section>
    </main>
</template>

<script>
import {global} from "@api/global"
export default {

    async created(){
        let data=await global("854038,855624,861059,858595,854034,854037")
        this.time=data
    },
    methods:{
        handleToggle(dis){
            this.$refs.slider.style.left=dis
        }
    },
    mounted(){
        
    },
    filters:{
        imgurl(value){
            return "https:"+value
        },
        price(value){
            return "￥"+(value/100)+".00"
        }
    },
    data(){
        return {
            time:[],
            isShow:false,
             options:[
            {
                title:"基础健康",
                img:"https://img5.jianke.com/mall/vmall/index/201902/fb5e3e71a4574d53b6524cafbd783a36.jpg",
                ids:"46408,851929,851931,851933,852004,852005,852006,849536,849539,849543,849548,852015,854002,849542",
                ad:"https://img.jianke.com/mall/vmall/index/201811/4625073569554692b1ac6476c5eef820.jpg"
            },
            {
                title:"肝肾养护",
                img:"https://img5.jianke.com/mall/vmall/index/201902/b74f30196cf44785acfed39a559a9079.jpg",
                ids:"852249,846404,849533,852000",
                ad:"https://img.jianke.com/mall/vmall/index/201809/7009bed1a2a8451c8a260c47f233a292.jpg"
            },
            {
                title:"三高调节",
                img:"https://img5.jianke.com/mall/vmall/index/201902/c46890db29c145699d5b0c2b436a9d7f.jpg",
                ids:"846406,846403,854393,849550,852008,851995,851998,849335,852007,852011,849559",
                ad:"https://img.jianke.com/mall/vmall/index/201809/4e9c3e3dca4f43a6a0cefd801b87547c.jpg"
            },
            {
                title:"男性健康",
                img:"https://img5.jianke.com/mall/vmall/index/201902/8bb44756815f4756a416520d9d241283.jpg",
                ids:"855624,855623,854038,854034,854037,854039,854035,846405,856241,849538,852272,849338,849339",
                ad:"https://img.jianke.com/mall/vmall/index/201811/a19e0d829fbf4801b4a5bb57888a284d.jpg"
            }],
            options2:[
            {
                title:"复合营养",
                img:"https://img5.jianke.com/mall/vmall/index/201902/1b425a46b38e478ba5d20bb3371397bd.jpg",
                ids:"851930,854391,854389,852001,849547,849544,849534,851997,854006,852009,849340",
                ad:"https://img.jianke.com/mall/vmall/index/201811/2680a79c32f94b7c80cc263f2d84d11f.jpg"
            },
            {
                title:"骨骼健康",
                img:"https://img5.jianke.com/mall/vmall/index/201902/2e5cebf088dc443f9e7836d406555c6d.jpg",
                ids:"846136,852404,849532,851996,852002",
                ad:"https://img.jianke.com/mall/vmall/index/201811/535c299a2c444b468d63f24948bab562.jpg"
            },
            {
                title:"塑身养颜",
                img:"https://img5.jianke.com/mall/vmall/index/201902/77e56bd23a8e4d059fc3ae592d99880b.jpg",
                ids:"853866,154582,852361,853331,759914,858034,856834,853328,232500,53783,1233,1863,51296,67599,51094,51631,161124,804590,217722,51253,168798,829252,948,541323,9780,851454,482740,851458,853322,2127,947,178366,862500,856460,856457,848587,839438,227100,846127,866339,866338,851467,227043",
                ad:"https://img5.jianke.com/mall/vmall/index/201812/3505478d1fd84a438dc9726ec0295960.jpg"
            },
            {
                title:"增强免疫",
                img:"https://img5.jianke.com/mall/vmall/index/201902/d93f5e13335e4a97a092ae5c5741315e.jpg",
                ids:"849545,849549,849348,854005,849345,854004,854007",
                ad:"https://img.jianke.com/mall/vmall/index/201811/7270bded9bc14f93930e46543f7d0ba8.jpg"
            }]
        }
       
    }
}
</script>

<style scoped>

main{
    overflow-y:auto;
}
.header{
    overflow: hidden;
}
.header img{
    width:4.14rem;
    height:2.15825rem;
}
.nav_box{
    margin-bottom:3px;
}
.nav_box ul{
    display:flex;

}
.nav_box ul li{
    display:flex;
    flex-direction:column;
}
.nav_box ul li div img{
    width:0.938rem;
    height:0.7134rem;
}
.nav_box ul li span{
    font-size:14px;
    text-align:center;
    margin-top:2px;
}
.timelimit{
    height:0.5003rem
}
.timelimit img{
    width:100%;
    height:100%;
}
.slider::-webkit-scrollbar{
	display:none; 
}
.slider{
    height:1.516rem;
    display:flex;
    overflow-y:auto;
   
}

.slider .items{
    width:0.8rem;
    height:1.316rem;
    padding:0.1rem;
    display:flex;
    flex-direction:column;
    box-sizing: unset
}
.slider .items img{
    width:0.8rem;
    height:0.8rem;
}
.slider .items .name{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size:14px;
    margin-bottom:.05rem;
    margin-top:5px;
    text-align: center;
    
}
.slider .items .price{
    font-size:14px;
    color: rgb(245, 59, 16);
    text-align: center;
}
.suspend{
    width:0.75rem;
    height:0.75rem;
    position: fixed;
    bottom: 150px;
    right: 0;
    z-index: 11;
}
.suspend img{
    width:100%;
    height:100%
}
.list{
    height:2.03rem;
    display:flex;
   
}
.list .imgl{
    width:1.8rem;
    height:2.03rem;
    margin-left:2px;
}
.list .imgl img{
    width:100%;
    height:100%;
}
.list .imgr{
    width:1.8rem;
    height:2.03rem;
}
.list .imgr img{
    width:100%;
    height:0.99rem;
}
.content{
    min-height:1rem;
}
.content .cbar{
    height:0.51rem;
    position: relative;
}
.content .cbar ul{
    height:100%;
    display:flex;
}
.content .cbar ul .tips{
    display:flex;
    flex:1;
    width:1.51813rem;
    padding:0 5px;
    margin:0 10px;
    height:0.5rem;
    white-space: nowrap;
    color: rgb(242, 61, 34);
    font-size:14px;
    justify-content:center;
    align-items:center;
}
.content .cbar ul .slide{
    width: 1.73rem;
    background: rgb(242, 61, 34);
    height:3px;
    position: absolute;
    bottom:0;
    left:3%
}


</style>