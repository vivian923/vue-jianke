<template>
  <div class="page">
    <main>
      <Header title="购物车" icon />
      <div class="checkall">
         <input type="checkbox" class="solecheckall"

         :checked="selectedAll"

         @click="handleChange()"/>
        <span class="self">健客自营</span>
        <span class="self1">全场满500立减100</span>
      </div>
      <div class="product" v-for="(item,index) in goodsList" :key="index">
           
        <div class="item-body">
          <input type="checkbox" class="solecheck" :checked="item.flag" @change="handleGoodsItemChnage(index)"/>
          <img
            :src="item.goodsImgUrl"
          />
          <div class="info">
            <span class="prodcutName">{{item.goodsName}}</span>
            <p class="marke">{{item.goodsIntro}}</p>
            <p class="price">{{item.goodsPrice}}</p>
            <h2>
              <s>￥0</s>
              <div>
                <button @click="handleReduce(index)">-</button>
                <input type="text" class="input" :value="item.goodsNum"/>
                <button @click="handleAdd(index)">+</button>
              </div>
            </h2>
          </div>
        </div>
        <div class="remove">
          <p>
            <span>移入收藏夹</span>
            <v-touch
            tag="span"
            @tap="del(item._id)"
            >删除</v-touch>
          </p>
        </div>
      </div>
    </main>
    <div class="complete">
      <span>
        合计： {{countPrice.sPrice/10}}
      </span>
      <span>
        去结算({{countPrice.sCount}})
      </span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import{mapState,mapMutations,mapGetters}from "vuex"
import {goodsDel} from "@api/goods"
export default {
  name: "car",
  created(){
      this.$store.dispatch("car/handleActionsGetGoods")
  },
  
   computed: {
   
    ...mapState({
      goodsList: state => state.car.goodsList,
      selectedAll:state => state.car.selectedAll,
      // sPrice:state => state.car.sPrice,
      // sCount:state => state.car.sCount
    }),
     ...mapGetters({
            countPrice:"car/countPrice"
        })
  },
   methods: {
        ...mapMutations({
            handleChange:"car/handleChange",
            handleGoodsItemChnage:"car/handleGoodsItemChnage",
            handleReduce:"car/handleReduce",
            handleAdd:"car/handleAdd"
        }), 
        del(id){
          goodsDel(id)
          this.$store.dispatch("car/handleActionsGetGoods")
        } 
    },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
}
header {
  height: 0.45rem;
  background: #fff;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 17px;
}
main {
  flex: 1;
  overflow-y: auto;
}
footer {
  height: 0.49rem;
  background: green;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.checkall {
  height: 0.35rem;
  margin: 0 auto;
  background: #fff;
  padding: 0 0.15rem;
  margin-top: 0.12rem;
  display: flex;
  align-items: center;
  font-size: 17px;
}
.checkall .iconfont {
  width: 0.18rem;
  height: 0.18rem;
  border: 0.01rem solid #ccc;
  border-radius: 50%;
  text-align: center;
  line-height: 0.18rem;
  font-size: 0.18rem;
  color: blue;
  margin-right: 0.1rem;
}
.self {
  font-size: 0.15rem;
  color: #333;
  margin-left: 15px;
}
.self1 {
  margin-left: 38%;
  font-size: 0.12rem;
  color: #f78646;
}
.item-body {
  height: 0.9784rem;
  padding: 0.1rem 0.1rem 0;
  display: flex;
  font-size: 0.12rem;
}
.item-body img {
  width: 0.7rem;
  height: 0.7rem;
  border: solid 0.05rem #fff;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  margin-top: .1rem;
}
.remove {
  height: 0.12rem;
  line-height: 0.12rem;
  text-align: right;
  padding: 0.16rem 0.3rem 0.2rem;
  border-bottom: 2px solid #eee;
  font-size: .13rem;
}
.remove p{width:3.35rem;}
.remove span{margin-left: 12px;}
button {
  width: 0.2rem;
  font-size: 0.14rem;
  color: #666;
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.12rem;
  text-align: center;
  display: inline-block;
}
.input {
  width: 0.3rem;
  height: 0.2rem;
  border-right: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  box-sizing: border-box;
  text-align: center
}
.item-body h2 {
  display: flex;
  justify-content: space-between;
}
.info {
  width: 3rem;
}
.marke {
  color: #999;
  margin:.02rem 0;
}
.price {
  color: red;
}
.solecheck {
  width: 25px;height: 25px;align-self: center
}
.product {
  background: #eee;border-bottom: 1px solid #999;
}
.prodcutName {
  font-size: 0.15rem;
  margin-top: .1rem;
  display: inline-block;
}
s {
  font-size: 0.12rem;
  color: #999;
}
.solecheckall{
      width: 25px;
    height: 25px;
   
}
.complete{width: 100%;height: 0.5rem;background: #e5e5e5;border-top: 1px solid #666;display: flex;justify-content: space-between;font-size: 14px}
.complete span{height: 100%;width: 30%;background: #f53b10;line-height:.5rem;text-align: center } 
.complete span:nth-child(1){background: #e5e5e5;}
</style>