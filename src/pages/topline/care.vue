<template>
   
      <main>
        <img
          class="banner"
          src="https://img.tianditao.com/mall/jktt/201911/7224622ba695499a917dd02e05396006.jpeg"
        />
        <div class="content" v-for="(item,index) in list" :key="index">
          <div class="contentLeft" >
            <p>{{list[index].title}}</p>
            <p class="message">
              <img
                src="https://img5.jianke.com/mall/common/201812/15b934ab77444d8284c3f363fd4a2e99.jpg?imageslim"
              />
              <span>今日医药</span>
              <span>4896 次浏览</span>
            </p>
          </div>
          <img
            :src="list[index].cover[0]"
          />
        </div>
      </main>
    
</template>


<script>
import {toplineapi} from "@api/topline";
export default {
  name: "Care",
  data() {
    return {
      list:[]
    };
  },
  created() {
    this.toplines(1,10)
  },
  beforeUpdate() {
    
  },
  methods: {
    async toplines(pag,lim){
      let data=await toplineapi(pag,lim);
      this.list=data.data.datalist;
    },

  },

};
</script>





<style scoped>
body,html,#app,.topline{height: 100%;font-size:0.15rem }
.topline{display: flex;flex-direction: column;}

main{flex: 1;overflow-y: auto;}
.banner{width: 3.75rem;height: 2.10rem;}
footer{height:0.6rem;display: flex;justify-content: space-around;align-items: center;}
.content{display: flex;justify-content: center;align-items: center;
	width: 3.75rem;height: 1.125rem;border-bottom: 1px solid #eee;}
.content img{width: 1.07rem;height:0.805rem }
.contentLeft{width: 2.23rem; ;height:0.805rem ;display: flex;flex-direction: column;justify-content: space-between}
.contentLeft img{width: 0.17rem;height: 0.17rem;margin-right: 0.1rem;}
.message{display: flex;align-items: center;}
</style>