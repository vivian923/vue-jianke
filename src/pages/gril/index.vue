<template>
  
         <div class="body">
    <img class="banner" src="https://img.tianditao.com/mall/vmall/index/201910/42ed65291e204884a431055861b6b8c9.jpg">
    <div class="coupon-list">
        <div>
            <div>
                <span>￥</span><span class="bigsize">10</span>
            </div>
            <div>满199可用</div>
            <div class="quire">立即领取</div>
        </div>
        <div>
            <div>
                <span>￥</span><span class="bigsize">10</span>
            </div>
            <div>满199可用</div>
            <div class="quire">立即领取</div>
        </div>
        <div>
            <div>
                <span>￥</span><span class="bigsize">10</span>
            </div>
            <div>满199可用</div>
            <div class="quire">立即领取</div>
        </div>
        <div>
            <div>
                <span>￥</span><span class="bigsize">10</span>
            </div>
            <div>满199可用</div>
            <div class="quire">立即领取</div>
        </div>
    </div>
    <div class="pic">
              <router-link
                to="/addblood"
                tag="img"
                src="https://img5.jianke.com/mall/vmall/index/201812/00f1ee96b87c4b0783870b87561fe680.png?"
                >
         </router-link>
            <!-- <img src="https://img5.jianke.com/mall/vmall/index/201812/00f1ee96b87c4b0783870b87561fe680.png?"> -->
            <img src="https://img5.jianke.com/mall/vmall/index/201812/b55cabb092c4478fbf98c2331bed8a5b.png?">
            <img src="https://img5.jianke.com/mall/vmall/index/201812/0b061d75a4bc43dcb5b9ed1ac07fcf62.png?">
            <img src="https://img5.jianke.com/mall/vmall/index/201812/c02ad6c8dfb74352a4cfe065eb409547.png?">
    </div>
    <div class="pic">
        <router-link
                to="/weight_loss"
                tag="img"
                src="https://img5.jianke.com/mall/vmall/index/201812/072e2cc1de4e41a68f0711567f0450a0.png?"
                >
         </router-link>
            <!-- <img src="https://img5.jianke.com/mall/vmall/index/201812/072e2cc1de4e41a68f0711567f0450a0.png?"> -->
            <img src="https://img5.jianke.com/mall/vmall/index/201812/d609da30ad27467fbf97aa534bb31d17.png?">
            <img src="https://img5.jianke.com/mall/vmall/index/201812/aa279d6c29bb48c085013c32350dda69.png?">
            <img src="https://img5.jianke.com/mall/vmall/index/201812/fbbd86fd6b81421d92b594cf287cac74.png?">
    </div>
    <img class="widthImg" src="https://img.tianditao.com/mall/vmall/index/201910/8b0c07eb0c8c4b88a44ecdcaad5d6891.jpg">
    <img class="widthImg" src="https://img.tianditao.com/mall/vmall/index/201909/66d1c3f78e184dd9995f4c12172d064e.jpg">
    <img class="widthImg" src="https://img.tianditao.com/mall/vmall/index/201910/1c6e69d1ab8a4cb1b6079abb36508946.jpg">
    <img class="widthImg" src="https://img.tianditao.com/mall/vmall/index/201911/07053cfcab984f3693fa512e031cf171.jpg">
    <img class="widthImg" src="https://img.tianditao.com/mall/vmall/index/201911/9c5b1f0f610c4a518c073a6d86e2b240.jpg">
    <div class="giliProduct">
    <ul>
        <li v-for="(item,index) in grilNav" :key="index"
        :id="sign==index?'grilactive':'sign'"
        @click="handlegril(item.ids,index)"

        >
        {{item.title}}
        </li>
    </ul>
    </div>
    <Alley-scroll ref="scroll">
    <div class="productMain" >
        <div v-for="(item,index) in grilShop" :key="index">
             <img :src="item.productImageUrl" />
          <p style="color:red">{{item.productName}}</p> 
          <p>{{item.introduction}}</p>
           <div class="btn">
            <span>￥{{item.productPrice/100}}.00</span>
            <button>提交需求</button>
          </div>
        </div>

    </div>
    </Alley-scroll>
    <!-- <Loading/> -->
</div>

</template>
<script>
import Loading from "@lib/loading"
import {gril} from "@api/gril"
export default {
    name:"Gril",
    components:{
        Loading
    },
    data() {
        return {
            grilShop:[],
            sign:0,
            grilNav:[
                {
                  title: "益气补血",
                  ids:"154505,10984,51549,6902,222119,11605,51574,1822,173495,10636,1614,74951"
                },
                {
                    title:" 减肥瘦身",
                    ids:"11101,404829,821617,9706,457906,14213,821621,762598,523828,817659,8034,158907,344101,183273,183433,403003,856688,254236,12275,856689"

                },
                {
                    title:"妇科炎症",
                    ids:"25998,1566,796245,772422,391,12163,512410,154398,227126,646,3180,11886"
                },
                {
                    title:" 月经不调",
                    ids:"755414,784307,10629,11627,8021,5982,4428,10923,1102,9683"
                },
                {
                    title:" 更年期",
                    ids:"7142,27163,26931,3661,11912,26843,11624,221841,172315,182265"
                },
                {
                    title:"乳腺疾病",
                    ids:"3433,11259,500423,207813,77356,6615,20352,27555,20301,77"
                },
                {
                    title:"女性不孕",
                    ids:"12256,8381,27346,2516,27343,216728,2445,26677"
                },
                {
                    title:"避孕药",
                    ids:"784307,2549,4927,2573"                
                }

            ]
        }
    },
    watch:{
        grilShop(){
            // this.$refs.scroll.handlefinishpullDown();
        }
    },
    created() {
        this.handlegril(this.grilNav[0].ids,0)
    },
    methods: {
        async handlegril(ids,index){
            this.sign=index;
            let data =await gril(ids)
            this.grilShop=data
        },
    },
    mounted() {
        
       this.$refs.scroll.handlepullingDown(()=>{
        //    var arr=[1,2,3,4]
        //    var index=parseInt(0+Math.random*6)

        //    this.handlegril(this.grilNav[arr[index]].ids,0)
       })
    },
    
}
</script>
<style scoped>
html{font-size: 26.67vw;}/*750-----31.25--640*/
.body{height: 100%;width: 100%;overflow-y: auto;font-size: 15px;}
.banner{width: 3.75rem;height: 2.10rem;}
.coupon-list{width: 3.75rem;height:0.89rem; color: #fff;display: flex;justify-content: space-around;padding: 0.05rem;padding-bottom: 0.06rem;background: #fff}
.coupon-list>div{width: 0.89rem;height: 0.89rem;
background: #805AFF;border-radius: 0.05rem;display:flex;flex-direction: column;align-items: center;justify-content: center;}
.bigsize{font-size: 0.22rem;}
.quire{background: cornsilk;color:#805AFF;border-radius: 0.02rem;padding: 0 .1rem;margin-top: 0.05rem;}
.pic{width: 3.75rem;height:0.94rem;display: flex;justify-content: space-around;background: #fff}
.pic img{height:0.83rem;width: 0.83rem;}
.widthImg{width: 3.75rem;height:0.75rem;}
.giliProduct{width: 3.75rem;height: 0.53rem;overflow-x: auto;background: #fff}
.giliProduct ul{width: 7.8rem;background: #fff}
.giliProduct li{width: 0.76rem;
    height: 0.5rem;
    padding: 0 0.05rem;
    margin: 0 0.1rem;
    font-size: 0.14rem;
    color: #333333;
    text-align: center;
    line-height: 0.5rem;
    border-bottom: 0.03rem solid white;
    float: left;}
    .productMain{width: 3.75rem;min-height: 2.745rem;display: flex;flex-wrap: wrap;background: #eee;position: relative;z-index: -10;}
    .productMain>div{    padding: 10px;width: 1.745rem;height: 2.725rem;margin-left: 0.085rem;margin-top: 0.05rem;
    background: #fff; position: relative; overflow: hidden;display: flex;flex-direction: column;}
    .productMain img{  width: 1.545rem;
  height: 1.545rem;}
  .productMain p{    margin-top: .1rem;
    width: 100%;
    font-size: 13px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: .2rem;}
    .btn{
        width: 100%;
  height: 0.27rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
    }
    .btn span{
        font-size: 0.15rem;
  color: #333;
    }
    .btn button{
        width: 0.68rem;
  height: 0.27rem;
  border-radius: 0.2rem;
  background: #f53b10;
  color: #fff;
    }
    #grilactive{border-bottom: 0.03rem solid red;}
   
</style>