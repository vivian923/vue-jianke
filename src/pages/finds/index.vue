<template>
  <div>
    <div class="header">
      <span style="color:pink" @click="MessageBox1()">彩蛋</span>
      <div class="find">
        <i class="iconfont" style="color:yellow;margin-right:10px">&#xe62f;</i>
        <input type="text" placeholder="搜索抽大奖" v-model="value" />
      </div>
    </div>
    <ul class="message">
      <li v-for="(item,index) in list" :key="index">{{item.KeyWord}}</li>
    </ul>

    
  </div>
</template>
<script>

import { finds } from "@api/finds";
import { throttle } from "@utils/method";
import MessageBox from "@lib/alert/alert.js";
export default {
  name: "find",
  created() {
    MessageBox();
  },
  data() {
    return {
      value: "",
      list: []
    };
  },
  methods: {
    MessageBox1() {
      MessageBox({
        title: "我改了",
        content: "我真的改了"
      });
    }
  },
  watch: {
    value(newVal) {
      throttle(async () => {
        let data = await finds(newVal);
        this.list = data;
      }, 1000);
    }
  }
};
</script>
<style scoped>
.find {
  width: 80%;
  border: 1px solid #eee;
  margin-left: 10px;
  border-radius: 10px;
  padding: 5px;
  color: green;
}
.header {
  width: 100%;
  height: 0.5rem;
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
}

li {
  height: 0.3rem;
  font-size: 17px;
  display: flex;
  align-items: center;
  border: 1px solid #eee;
}
</style>