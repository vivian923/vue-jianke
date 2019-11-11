<template>
    <header>
        <v-touch 
        class="iconfont back" 
        v-if="icon"
        tag="a"
        @tap="handleBack()"
        >
        &#xe629;</v-touch>
        <span>{{title}}</span>
        <a class="iconfont more">&#xe654;</a>
    </header>
</template>

<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"全部分类"
        },
        icon:{
            type:Boolean
        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
header{
    width:100%;
    height:.45rem;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 .15rem;
}
header a{
    width:0.24rem;
    height:0.24rem;
    position: absolute;
}
header .back{
    font-size:20px;
    left:.2rem;
}
header span{
    text-align: center;
    color: #111;
    font-size: 17px;
}
header .more{
    font-size:25px;
    right:.2rem;
}
</style>