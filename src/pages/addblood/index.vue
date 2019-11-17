<template>
  <main>
    <header>
      <span>复方阿胶浆48支专享券</span>
    </header>
    
    <div class="listBox" v-for="(item,index) in list" :key="index"
    :to="{name:'detail',params:{productImageUrl:item.productImageUrl,productName:item.productName,productPrice:item.productPrice,introduction:item.introduction}}"
    >          
      <img :src="item.productImageUrl"
      />
      <div>
        <p>包邮】{{item.productName}}</p>
        <div class="indruct">{{item.introduction}}</div>
        <div class="price">
          <span>￥{{item.productPrice/100}}</span>
          <span class="btn">立即购买</span>
        </div>
      </div>
    </div>
    

    
  </main>
</template>
<script>
import {addbloodapi} from "@api/addblood"
export default {
  name:"addblood",
  data() {
    return {
      list:[]
    }
  },
  created() {
    this.addbloods()
  },
  methods: {
    async addbloods(){
    let data= await addbloodapi();
    this.list=data
  },
   
    
    
    
    
  },
};
</script>
<style scoped>
    
html body{display: flex;flex-direction: column;font-size: 0.15rem;}
header{height:0.22rem;background:#FF7449;display: flex;justify-content: space-around;align-items: center;
	border-bottom: 1px solid #FC9372;color: #fff;}
main{flex: 1;overflow-y: auto;background: #FF7449;font-size: 17px}
.coupon-list{height: 0.76rem;background:#FF7449 ;display: flex;justify-content: center;padding: 0 10px;color: #CF7B61;}
.pre{width: 56%;display: flex;justify-content:center;align-items: center;margin-left:1.5%;background:#F8A48A;}
.pa{display: flex;justify-content:center;align-items: center;flex-direction: column;}
.size{font-size: 0.4rem;}
.listBox{width:3.63rem;height: 1.56rem;padding:0.1rem;margin: 0 auto;background: #fff;margin-top: 0.1rem;display: flex;
align-items: center;border-radius: 0.1rem;}
.listBox>div{width: 2.45rem;height:1.34rem;margin-left: 0.1rem;}
.listBox img{width: 0.98rem;height: 0.98rem;}
.indruct{font-size: 0.13rem;margin: 0.1rem 0;overflow: hidden;height: 0.34rem;}
.listBox p{color: red;font-size: 0.16rem;}
.price{display: flex;justify-content:space-between;align-items: center;}
.btn{width: 0.76rem;height: 0.33rem;line-height:  0.33rem;text-align: center;border-radius: 0.1rem;background: #F53B10;color: #fff;}    

</style>