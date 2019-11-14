<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>

    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    name:"Alley-scroll",
    mounted() {
      this.scroll=new BScroll(this.$refs.wrapper,{
          pullDownRefresh:true,
          pullUpLoad:true
      })
        
    },
    methods:{
        // 下拉刷新
        handlepullingDown(callback){
            this.scroll.on("pullingDown",()=>{
                console.log(123)
              callback()
            })
        },
        handlefinishpullDown(){
            //通知下次刷子新
            this.scroll.finishpullDown();
            //重新计算
            this.scroll.refresh();
        }

    },

    
}
</script>
<style>
.wrapper{height: 100%;}
</style>