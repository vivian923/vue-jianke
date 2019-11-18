<template>
    <div class="search">
        <Header title="搜索" icon/>
        <div class="find">
            <div class="find_box">
                <span class="iconfont">&#xe62f;</span>
                <input type="text" :placeholder="placeholder" v-model="value">
            </div>
            <button>搜索</button>
        </div>

        <div class="hotSearch">
            <p>热门搜索</p>
            <div class="tag_list">
                <span v-for="(item,index) in hotWord" :key="index">{{item.word}}</span>
            </div>
        </div>

        <div class="searchResult" ref="searchResult">
            <div class="result" v-for="(item,index) in searchR" :key="index">
                <p>{{item.KeyWord}}</p>
                <span>约{{item.ResultCount}}件商品</span>
            </div>
        </div>
    </div>
</template>

<script>
import { HotSearch } from "@api/hotWord";
import { shopSearch } from "@api/search";
import {throttle} from '@utils/method';
export default {
    name:"Search",
    data() {
        return {
            hotWord:[],
            placeholder:"",
            searchR:[],
            value:""
        }
    },
    created(){
        this.handleHotSearch();
    },
    methods: {
        async handleHotSearch() {
        let data = await HotSearch();
        this.hotWord = data.data;
        this.placeholder=this.hotWord[0].searchWord;
        }
    },
    watch: {
        value(newVal){
            throttle(async ()=>{
                let data = await shopSearch(newVal);
                this.searchR=data?data:[];
                if(this.searchR.length>0){
                    this.$refs.searchResult.style.display="block";
                }else{
                    this.$refs.searchResult.style.display="none";
                }
            },300)
            
        }
    }
}
</script>

<style>
    .search{
        height: 100%;
        background: #eee;
    }
    .find{
        height: 0.45rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .find .find_box{
        width: 2.91rem;
        height: .3rem;
        background: #fff;
        margin-right: .1rem;
        border-radius: .2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .find .find_box span{
        font-size: .14rem;
        margin-right: .01rem
    }
    .find .find_box input{
        width: 2rem;
        height: .3rem;
        font-size: .13rem;
        color: #555;
        padding: 0.075rem 0.04rem;
    }
    .find button{
        width: .5rem;
        height: .3rem;
        border-radius: .05rem;
        background: #28B2F9;
        font-size: .14rem;
        color: #fff;
    }
    .hotSearch{
        height: 1.98rem;
        background: #fff;
        padding: .16rem;
    }
    .hotSearch p{
        font-size: .13rem;
        color: #999;
        margin-bottom: .05rem;
    }
    .hotSearch .tag_list{
        width: 3.43rem;
        min-height: 1.52rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center
    }
    .hotSearch .tag_list span{
        padding: .05rem .1rem;
        border: 0.01rem solid #eee;
        font-size: .14rem;
        margin-right: .07rem;
    }
    .searchResult{
        position: absolute;
        top: .9rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        padding: 0 .1rem;
        display: none;
    }
    .searchResult .result{
        height: .55rem;
        border-bottom: .01rem solid #ccc;
        font-size: .13rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .searchResult .result p{
        color: #222;
    }
    .searchResult .result span{
        color: #9B9B9B;
    }
</style>