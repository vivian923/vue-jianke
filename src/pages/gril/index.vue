<template>
  
         <div class="body">
    <img class="banner" src="https://img.tianditao.com/mall/vmall/index/201910/42ed65291e204884a431055861b6b8c9.jpg">
    <div class="coupon-list">
        <div>
            <div>
                <span>￥</span><span class="bigsize">10</span>
            </div>
            <div>满199可用</div>
            <div class="quire">立即领取</div>
        </div>
        <div>
            <div>
                <span>￥</span><span class="bigsize">10</span>
            </div>
            <div>满199可用</div>
            <div class="quire">立即领取</div>
        </div>
        <div>
            <div>
                <span>￥</span><span class="bigsize">10</span>
            </div>
            <div>满199可用</div>
            <div class="quire">立即领取</div>
        </div>
        <div>
            <div>
                <span>￥</span><span class="bigsize">10</span>
            </div>
            <div>满199可用</div>
            <div class="quire">立即领取</div>
        </div>
    </div>
    <div class="pic">
              <router-link
                to="/addblood"
                tag="img"
                src="https://img5.jianke.com/mall/vmall/index/201812/00f1ee96b87c4b0783870b87561fe680.png?"
                >
         </router-link>
            <!-- <img src="https://img5.jianke.com/mall/vmall/index/201812/00f1ee96b87c4b0783870b87561fe680.png?"> -->
            <img src="https://img5.jianke.com/mall/vmall/index/201812/b55cabb092c4478fbf98c2331bed8a5b.png?">
            <img src="https://img5.jianke.com/mall/vmall/index/201812/0b061d75a4bc43dcb5b9ed1ac07fcf62.png?">
            <img src="https://img5.jianke.com/mall/vmall/index/201812/c02ad6c8dfb74352a4cfe065eb409547.png?">
    </div>
    <div class="pic">
        <router-link
                to="/weight_loss"
                tag="img"
                src="https://img5.jianke.com/mall/vmall/index/201812/072e2cc1de4e41a68f0711567f0450a0.png?"
                >
         </router-link>
            <!-- <img src="https://img5.jianke.com/mall/vmall/index/201812/072e2cc1de4e41a68f0711567f0450a0.png?"> -->
            <img src="https://img5.jianke.com/mall/vmall/index/201812/d609da30ad27467fbf97aa534bb31d17.png?">
            <img src="https://img5.jianke.com/mall/vmall/index/201812/aa279d6c29bb48c085013c32350dda69.png?">
            <img src="https://img5.jianke.com/mall/vmall/index/201812/fbbd86fd6b81421d92b594cf287cac74.png?">
    </div>
    <img class="widthImg" src="https://img.tianditao.com/mall/vmall/index/201910/8b0c07eb0c8c4b88a44ecdcaad5d6891.jpg">
    <img class="widthImg" src="https://img.tianditao.com/mall/vmall/index/201909/66d1c3f78e184dd9995f4c12172d064e.jpg">
    <img class="widthImg" src="https://img.tianditao.com/mall/vmall/index/201910/1c6e69d1ab8a4cb1b6079abb36508946.jpg">
    <img class="widthImg" src="https://img.tianditao.com/mall/vmall/index/201911/07053cfcab984f3693fa512e031cf171.jpg">
    <img class="widthImg" src="https://img.tianditao.com/mall/vmall/index/201911/9c5b1f0f610c4a518c073a6d86e2b240.jpg">
</div>

</template>
<script>
export default {
    name:"Gril"
    
}
</script>
<style scoped>
html{font-size: 26.67vw;}/*750-----31.25--640*/
.body{height: 100%;width: 100%;overflow-y: auto;font-size: 15px}
.banner{width: 3.75rem;height: 2.10rem;}
.coupon-list{width: 3.75rem;height:0.89rem; color: #fff;display: flex;justify-content: space-around;margin-top: 0.05rem;margin-bottom: 0.06rem;}
.coupon-list>div{width: 0.89rem;height: 0.89rem;
background: #805AFF;border-radius: 0.05rem;display:flex;flex-direction: column;align-items: center;justify-content: center;}
.bigsize{font-size: 0.22rem;}
.quire{background: cornsilk;color:#805AFF;border-radius: 0.02rem;padding: 0 .1rem;margin-top: 0.05rem;}
.pic{width: 3.75rem;height:0.94rem;display: flex;justify-content: space-around;}
.pic img{height:0.83rem;width: 0.83rem;}
.widthImg{width: 3.75rem;height:0.75rem;}
</style>