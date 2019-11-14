<template>
  <div class="box1">
  <div class="box1">
    <main>
      <img
        class="imga1"
        src="https://img.tianditao.com/mall/vmall/index/201909/5209e1c6e01e40eb938dd76a06845134.jpg"
      />
    </main>
    <div class="product">
      <div v-for="(item,index) in list" :key="index">
        <img :src="item.productImageUrl"
        />
        <div class="construct">{{item.introduction}}</div>
        <h2>￥{{item.productPrice/100}}</h2>
        <div class="bug">立即购买</div>
      </div>
      
    </div>

   
  </div>
      <div class="footer">
      <div class="foot">
        <span>逆袭 GO！GO！GO!</span>
      </div>
      </div>
  </div>
</template>
<script>
import { weight_lossapi } from "@api/weight_loss";
export default {
  name: "weight_loss",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.weight_losss();
  },
  methods: {
    async weight_losss() {
      let data = await weight_lossapi();
      this.list = data;
    }
  }
};
</script>
<style scoped>



.box1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;background: #600ba4;
}
main {
  background: #600ba4;
  font-size: 17px;
}
.footer {
	width: 100%;
  height: 0.56rem;
  background: #600ba4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* position: fixed;
  bottom: 0;
  left: 0; */
}
.foot {
  width: 3.65rem;
  height: 0.36rem;
  border-radius: 0.1rem;
  background-color: #fedb07;
  color: #000000;
  line-height: 0.36rem;
  text-align: center;
  font-size: 17px;
  
}
.imga1 {
  height: 1.76rem;
}
.product {
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.14rem 0;
  flex: 1;
  font-size: 17px;
  flex-wrap: wrap;
  overflow-y: auto;
  background: #600ba4;
}
.product > div {
  width: 1.13rem;
  height: 2rem;
  border-radius: 0.2rem;
  background: #fff;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.1rem;
}
.product img {
  width: 1.0498rem;
  height: 1.0498rem;
  margin-top: 0.04rem;
}
.construct {
  font-size: 0.1rem;
  margin-top: 0.01rem;
  height:0.16rem;
  overflow: hidden;
}
.product h2 {
  align-self: flex-start;
  margin-top: 0.04rem;
  color: #f53b10;
}
.bug {
  width: 0.97rem;
  height: 0.27rem;
  line-height: 0.27rem;
  border-radius: 30px;
  background: #f53b10;
  color: #fff;
  text-align: center;
  margin-top: 0.1rem;
}
</style>