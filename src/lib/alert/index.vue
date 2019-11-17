<template>
    <div class="mask">
    <div class="messageboxContainer">
        <div class="messagebox_title">
            <div>{{title}}</div>
            <v-touch tag="div" @tap="handleClose()">X</v-touch>
        </div>
        <div class="messagebox_content">
            {{content}}
        </div>
        <div class="messagebox_btn">
            <v-touch tag="div" @tap="handleOk()">确认</v-touch>
        </div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
    .mask{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
    }
    .messageboxContainer{
        width: 2.5rem;
        height: 2rem;
        background: #fff;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        padding: .15rem;
        border-radius: .1rem;
        box-shadow: .02rem .02rem .1rem #333;
        display: flex;
        flex-direction: column;
        font-size: .14rem;
    }
    .messagebox_title{
        width: 100%;
        height: .3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .messagebox_title div:nth-of-type(2){
        border-radius: .05rem;
        padding: .02rem .06rem;
        border: .01rem solid #ccc;
    }
    .messagebox_content{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .messagebox_btn{
        width: 100%;
        height: .2rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .messagebox_btn div{
        border-radius: .05rem;
        padding: .02rem .06rem;
        border: .01rem solid #ccc;
    }