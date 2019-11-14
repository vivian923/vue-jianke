<template>
    <div class="container">
        <div class="hot_city">
          <div class="hot_title">热门城市</div>
          <div class="hot_city_list">
            <div class="hot_city_name" v-for="item in hotCity" :key="item.id"
                @click="handleTo(item)" 
            >{{item.nm}}</div>
          </div>
        </div>
        <van-index-bar  :index-list="letterFirst">
            <div 
                v-for="(item,index) in cityList" 
                :key="index">
                <van-index-anchor :index="item.index">{{item.index}}</van-index-anchor>
                <van-cell
                @click="handleTo(child)" 
                :title="child.nm"
                v-for="child in item.list"
                :key="child.id" 
                />
            </div>
        </van-index-bar>
    </div>
</template>

<script>
import {mapState} from "vuex"
import Vue from 'vue';
import { IndexBar, IndexAnchor,Cell} from 'vant';
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(Cell)
export default {
    name:"city",
    computed:{
        ...mapState({
            cityList:state=>state.city.cityList,
            hotCity:state=>state.city.hotCity,
            letterFirst:state=>state.city.letterFirst
        })
    },
    created(){
        if (
      !(sessionStorage.getItem("cityList") && sessionStorage.getItem("hotCity"))
    ) {
      this.$store.dispatch("city/handleGetList");
    }
    },
    methods:{
        handleTo(child){
            let path =this.$route.params.path||"/home"
            this.$router.push(path);
            this.$store.commit("city/handleUpdateCity",child)
        }
    }
}
</script>

<style>
.hot_title,
.city_title_letter {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.16rem;
}

.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  padding-right: 0.2rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.3rem;
  margin-left: 0.26rem;
  width: .5rem;
  height: 0.66rem;
  background: #fff;
  text-align: center;
  line-height: 0.66rem;
  font-size: 0.16rem;
  border: 2px solid #e6e6e6;
}
.van-index-bar__index {
    padding: 0 4px 0 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
}
</style>