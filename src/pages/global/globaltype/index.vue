<template>
    <main>
       
        <section class="header">
            <img :src="ad">
        </section>
        <section class="box">
            <div class="out" v-for="item in list" :key="item.productCode">
                <div class="in">
                    <div class="pic">
                        <img :src="item.productImageUrl | imgurl">
                    </div>
                    <div class="info">
                        <div class="name">{{item.productName}}</div>
                        <div class="intro">{{item.introduction}}</div>
                        <div class="btn">
                            <span class="tips"><i>￥</i><span>{{item.productPrice | price}}</span></span>
                            <div>立即购买</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </main>
</template>

<script>
import{gtype} from "@api/global"
export default {
    name:"gtype",
   async created(){
        let {ids,ad}=this.$route.params;
        this.ids=ids;
        this.ad=ad;
        let data=await gtype(ids)
        this.list=sessionStorage.getItem(data[0].productCode)? JSON.parse(sessionStorage.getItem(data[0].productCode)):data;
        sessionStorage.setItem(data[0].productCode,JSON.stringify(data))
        this.typeID=data[0].productCode
    },
    filters:{
        imgurl(value){
            return "https:"+value
        },
         price(value){
            return (value/100)+".00"
        }
    },
    data(){
        return {
            list:[],
            ids:'',
            ad:'',
            typeID:1
        }
    }
}
</script>

<style scoped>
main{
    overflow-y:auto;
}
.header{
    height:1.70rem;
}
.header img{
    width:100%;
    height:100%;
}
.box{
    width:100%;
    min-height:8.6rem;
    padding:3px;
    box-sizing: border-box;
    background-color: rgb(192, 227, 255);
    display: flex;
    flex-wrap:wrap;
    align-content: flex-start;
}
.box .out{
    margin:2px 0;
    width:1.84rem;
    height:2.766rem;
    padding:0 3px;
    box-sizing: border-box;
  
}
.box .out .in{
    padding: 10px;
    background: #fff;
    border-radius:10px;
}
.box .out .in .pic{
    width:1.586rem;
    height:1.586rem;
}
.box .out .in .pic img{
    width:100%;
    height:100%;
}
.box .out .in .info{
    padding: 10px 0 5px;
}
.info .name{
    color: #f53b10;
    font-size:14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.info .intro{
    margin-top:5px;
    font-size: 13px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: .2rem;
}
.info .btn{
    margin-top:.1rem;
    display:flex;
    justify-content:space-between;
}
.info .btn .tips{
    display:flex;
}
.info .btn .tips i{
    font-size: 10px;
    margin-bottom: 2px;
    color: rgb(245, 59, 16);
    line-height:22px;
}
.info .btn .tips span{
    font-size: 15px;
    color: rgb(245, 59, 16);
    font-size:15px;
}
.info .btn div{
    padding: 4px 8px;
    border-radius:.3rem;
    background: #f53b10;
    color: #fff;
    font-size:12px;
    text-align:center;
}

</style>