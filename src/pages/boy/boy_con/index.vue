<template>
    <div class="boyCon">
        <Header :title="title" icon/>
        <div class="drug">
            <div class="drugs" v-for="(item,index) in boyList" :key="index">
                <img :src="item.productImageUrl" />
                <p>{{item.productName}}</p>
                <p>{{item.introduction}}</p>
                <div class="btn">
                    <span>￥{{item.productPrice/100}}.00</span>
                    <button>提交需求</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { boy } from '@api/boy';
export default {
    name:"boyCon",
    data() {
        return {
            title:"",
            boyList:[]
        }
    },
    created(){
        let {ids,title} = this.$route.params;
        this.title = title;
        this.handleGetBoyCon(ids);
    },
    methods: {
        async handleGetBoyCon(ids){
            let data = await boy(ids);
            this.boyList = data;
        }
    },
}
</script>

<style>
    .boyCon{
        min-height: 100%;
        background: rgb(185, 219, 202);
    }
    .drug{
        min-height: 2.725rem;
        padding: .03rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }
    .drug .drugs{
        width: 1.745rem;
        height: 2.725rem;
        background: #fff;
        margin-bottom: .1rem;
        border-radius: .16rem;
        padding: .1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .drug .drugs img {
    width: 1.545rem;
    height: 1.545rem;
    }
    .drug .drugs p {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
    .drug .drugs p:nth-of-type(1) {
    font-size: 0.14rem;
    color: #f53b10;
    }
    .drug .drugs p:nth-of-type(2) {
    font-size: 0.13rem;
    color: #333;
    }
    .drug .drugs .btn {
    width: 100%;
    height: 0.27rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    .drug .drugs .btn span {
    font-size: 0.15rem;
    color: #333;
    }
    .drug .drugs .btn button {
    width: 0.68rem;
    height: 0.27rem;
    border-radius: 0.2rem;
    background: #f53b10;
    color: #fff;
}
</style>