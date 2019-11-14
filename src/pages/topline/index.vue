<template>
  <div class="page">
    <div class="topline">
        <div class="header">
          <router-link
        to="/topline/advice"
        tag="span"
        >
        推荐
         </router-link>
        <router-link
        to="/topline/care"
        tag="span"
        >
        关注
         </router-link>
        <span >关爱糖友</span>
        <span >养肝护肝</span>
        <span >心脑血管</span>
        </div>
      <router-view></router-view>
     
    </div>
  </div>
</template>

<script>
import {toplineapi} from "@api/topline";
export default {
  name: "Topline",
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
      let data=await toplineapi();
      this.list=data;
    },

  },

};
</script>

<style scoped>
body,html,#app,.topline{height: 100%;font-size:0.15rem }
.topline{display: flex;flex-direction: column;}
.header{width:3.75rem;height:0.37rem;background:#fff;display: flex;justify-content: space-around;width: 100%;
	align-items: center;position: relative;font-size: 18px;font-size: 0.15rem;}
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