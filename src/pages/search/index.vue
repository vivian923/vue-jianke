<template>
    <div class="search">
        <Header title="搜索" icon/>
        <div class="find">
            <div class="find_box">
                <span class="iconfont">&#xe62f;</span>
                <input type="text" :placeholder="placeholder" @change="handleSearch()" ref="searchVal">
            </div>
            <button>搜索</button>
        </div>

        <div class="hotSearch">
            <p>热门搜索</p>
            <div class="tag_list">
                <span v-for="(item,index) in hotWord" :key="index">{{item.word}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { HotSearch } from "@api/hotWord";
import { shopSearch } from "@api/search";
export default {
    name:"Search",
    data() {
        return {
            hotWord:[],
            placeholder:""
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
        },

        async handleSearch(){
            let content = this.$refs.searchVal.value;
            console.log(content)
            let data = await shopSearch(String(content));
            console.log(data)
            
        }
    },
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
        height: 1.52rem;
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
</style>