<template>
    <div class="page">
        <Header title="全部分类" icon/>
        <nav>
            <div class="sbox">
                <i class="iconfont search">&#xe62f;</i>
                <input type="text" placeholder="开浦兰低至8折购"  @focus="toSearch()">
            </div>
            <div class="btn">搜索</div>
        </nav>
        <section class="sliderbar">
            <ul class="ssbar">
                <v-touch
                tag="li" 
                v-for="(item,index) in categroy" 
                :key="index"
                @tap="handleGetGoods({pid:item.id,ad:item.adImage,index})"
                :class="index==flag?'active':''"
                >{{item.categoryName}}</v-touch>
            </ul>
           
            <div class="rsbar">
                <div class="ad">
                    <img :src="adimg">
                </div>
                <ul class="goods">
                    <li v-for="item in goods" :key="item.id">
                        <img :src="item.categoryImage">
                        <span>{{item.categoryName}}</span>
                    </li>
                    
                </ul>
            </div> 
        </section>
    </div>
</template>

<script>

import {mapState, mapActions} from "vuex"
export default {
    name:"Classfiy",
    data(){
        return {
            typeId:1
        }
    },
    created(){
        this.$store.dispatch("classify/handleActionCategroy")
        this.$store.dispatch("classify/handleActionGetGoods") 
    },
    
    methods:{
        ...mapActions({
            handleGetGoods:"classify/handleActionGetGoods"
        }),
        toSearch(){
            this.$router.push("/search")
        }
    },
    computed:{
        ...mapState({
            categroy:state=>state.classify.categroy,
            goods:state=>state.classify.goods,
            flag:state=>state.classify.flag,
            adimg:state=>state.classify.adimg,
            typeid:state=>state.classify.typeid
        })
    }
}
</script>

<style scoped>
nav{
    height:.45rem;
    background: #f0f0f0;
    display:flex;
    justify-content:space-around;
    align-items:center;
}
nav .sbox{
    width:2.912rem;
    height:.3rem;
    background:#fff;
    border-radius:15px;
    display:flex;
    align-items: center;
    
}
nav .sbox .search{
    color: #999;
    font-size:.25rem;
    margin-left:.3rem;
    font-size:.14rem;
    margin-right:.05rem
}
nav .sbox input{
    height:.3rem;
    font-size:14px;
    line-height:.3rem;
}
nav .btn{
    width: .5rem;
    height: .3rem;
    text-align: center;
    color: #fff;
    line-height: .3rem;
    border-radius: 4px;
    background: #28b2f9;
    font-size: 14px;
}
.sliderbar{
    display:flex;
    
}
.sliderbar .ssbar{
    width:.8rem;
    height:5.26rem;
    overflow-y:auto;
    background: #f0f0f0;
    font-size:14px;
}
.sliderbar .ssbar li{
    width:100%;
    height:.48rem;
    text-align:center;
    line-height:.48rem;;
    border-bottom: 1px solid #e6e6e6;
}
.sliderbar .ssbar .active{
    background:#fff;
    color:#28b2f9
}
.sliderbar .rsbar{
    flex:1;
    height:5.2rem;
    overflow-y:auto;
    padding:0.08rem;
}
.sliderbar .rsbar .ad{
    width:2.79rem;
    height:.93rem;
}
.sliderbar .rsbar .ad img{
    width:100%;
    height:100%;
}
.sliderbar .rsbar .goods{
    display:flex;
    flex-wrap:wrap;
}
.sliderbar .rsbar .goods li{
    width:0.87475rem;
    min-height:1.0369rem;
    margin:0.02rem;
    overflow: hidden;
    text-align: center;
    color: #666;
    font-size:14px;
    letter-spacing: 1px;
}
.sliderbar .rsbar .goods li img{
    width:0.8748rem;
    height:0.8748rem;
}
</style>