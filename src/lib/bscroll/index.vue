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
            
            //通知better-scroll进行下一次下拉刷新
      this.scroll.finishPullDown();
      //重新计算better-scroll;
      this.scroll.refresh();
        }

    },

    
}
</script>
<style>
.wrapper{height: 100%;}
</style>