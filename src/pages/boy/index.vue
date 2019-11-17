<template>
  <div class="boy">
    <div class="main">
      <div class="slider" id="top">
       <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          class="banner"
          src="https://img.tianditao.com/mall/vmall/index/201911/0dad9af6116e4738875569501e234d28.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="banner"
          src="https://img.tianditao.com/mall/vmall/index/201909/d123f3a2abfd4ea99bbfcefc05b38ad1.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="banner"
          src="https://img.tianditao.com/mall/vmall/index/201911/da2999cb66e64abaa3f3770ba82a0233.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="banner"
          src="https://img.tianditao.com/mall/vmall/index/201911/7ef1629ecfda46b78a6519593dee8f13.jpg"
        />
      </van-swipe-item>
    </van-swipe>
      </div>
      <div class="nav">
        <router-link 
        v-for="(item,index) in boyList"
        :key="index"
        :to="{name:'boyCon',params:{ids:item.ids,title:item.title}}"
        tag="img"
        :src="item.urlImg"
        ></router-link>
      </div>
      <div class="title_1" id="miaosha">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201907/a0702c29cb19405694bf217cc4c100d4.jpg"
        />
      </div>
      <div class="slider_x">
        <div class="item">
          <img
            src="https://img.jianke.com/suo//mall/product/201911/9aef322360584461a4cb752fd666541c!400x400.jpg"
          />
          <p>金匮肾气丸(同仁堂)(水蜜丸)</p>
          <p>￥12.80</p>
        </div>
        <div class="item">
          <img
            src="https://img.jianke.com/suo//mall/product/201911/7aa1e5616e4d472aa4bb40c1124c7e3b!400x400.jpg"
          />
          <p>希爱力28片 </p>
          <p>￥579.00</p>
        </div>
        <div class="item">
          <img
            src="https://img.jianke.com/suo//mall/product/201911/0145b9734e0745e8ad526c6639e358e8!400x400.jpg"
          />
          <p>金戈21片</p>
          <p>￥218.00</p>
        </div>
        <div class="item">
          <img
            src="https://img.jianke.com/suo//mall/product/201911/9885b7fd05de4ae098f850563583ebe8!400x400.jpg"
          />
          <p>金戈20片</p>
          <p>￥379.00</p>
        </div>
        <div class="item">
          <img
            src="https://img.jianke.com/suo//mall/product/201910/3c2aa7ac208a44b197aac07687a5e74f!400x400.jpg"
          />
          <p>睾丸片(京生)</p>
          <p>￥118.00</p>
        </div>
        <div class="item">
          <img
            src="https://img.jianke.com/suo//mall/product/201910/3c2aa7ac208a44b197aac07687a5e74f!400x400.jpg"
          />
          <p>睾丸片(京生)</p>
          <p>￥118.00</p>
        </div>
        <div class="item">
          <img
            src="https://img.jianke.com/suo//mall/product/201910/3c2aa7ac208a44b197aac07687a5e74f!400x400.jpg"
          />
          <p>睾丸片(京生)</p>
          <p>￥118.00</p>
        </div>
        <div class="item">
          <img
            src="https://img.jianke.com/suo//mall/product/201910/3c2aa7ac208a44b197aac07687a5e74f!400x400.jpg"
          />
          <p>睾丸片(京生)</p>
          <p>￥118.00</p>
        </div>
        <div class="item">
          <img
            src="https://img.jianke.com/suo//mall/product/201910/3c2aa7ac208a44b197aac07687a5e74f!400x400.jpg"
          />
          <p>睾丸片(京生)</p>
          <p>￥118.00</p>
        </div>
      </div>
      <div class="act_raw">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/5f42157692af48379b734ba561d69278.jpg"
        />
      </div>
      <div class="act_raw">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/06ce4324c17742a1b228ea3c00e391e4.jpg"
        />
      </div>
      <div class="act_raw">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/305fe501a52e4d3f822f19c0bb481fbd.jpg"
        />
      </div>
      <div class="act_raw">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/305fe501a52e4d3f822f19c0bb481fbd.jpg"
        />
      </div>
      <div class="act_raw">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/4e80e16784b24ecea58902ebbed82f22.jpg"
        />
      </div>
      <div class="title_2" id="pinpai">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201907/7c8af789c54d4b4da13580896f47f491.jpg"
        />
      </div>
      <div class="act_con">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/b111488a54cf467b89492d9358051e19.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/83a905cc81a1409a83f47c54a8461b89.jpg"
        />
      </div>
      <div class="act_con_1">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/48b438ca8f484bbe8164f4b176d9ce40.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/51a3f8e812cc4bc590abbffcf7116d76.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/f73cc311aed54527b9070ad43688706a.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/897d08ac4f684d68bd0944a16922eb0a.jpg"
        />
      </div>
      <div class="act_con_2">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/a7470033bef046ea9f95bf61e55f2f2c.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/1268175d0b614d02adde395cdb8d5a79.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/a843932b443f42428cb89ddbdd08e918.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/e7eb7af4e3be4700bceab41da84d4081.jpg"
        />
      </div>
      <div class="title_3">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201907/fa09f15cfe024cf0a3bfc0e50e834c3f.jpg"
        />
      </div>
      <div class="vadio_1">
        <img
        id="xingfu"
          src="https://img.tianditao.com/mall/vmall/index/201906/966eb40991df49d7977e7344750af87d.png"
        />
      </div>
      <div class="vadio_2">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201906/04cb2cb1c8d64f2c8c7eda826a3d7c36.jpg"
        />
      </div>
      <div class="title_4" id="remen">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201907/7ce019a18189458398b5ba410995c166.jpg"
        />
      </div>
      <div class="nav_list">
        <ul class="list">
          <li
            v-for="(item,index) in boyNav"
            :key="index"
            :id="sign == index?'boyactive':''"
            @click="handleClickGetBoy(index,item.ids)"
          >{{item.title}}</li>
        </ul>
      </div>
      <div class="nav_content">
        <router-link class="item_con" v-for="(item,index) in boyShop" 
        :key="index" 
        :to="{name:'detail',params:{productImageUrl:item.productImageUrl,productName:item.productName,productPrice:item.productPrice,introduction:item.introduction}}" 
        tag="div">
          <img :src="item.productImageUrl" />
          <p>{{item.productName}}</p>
          <p>{{item.introduction}}</p>
          <div class="btn">
            <span>￥{{item.productPrice/100}}.00</span>
            <button>提交需求</button>
          </div>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <div class="mao">
        <a href="boy#top">回到顶部</a>
        <a href="boy#miaosha">限量秒杀</a>
        <a href="boy#pinpai">品牌汇</a>
        <a href="boy#xingfu">性福秘籍</a>
        <a href="boy#remen">热门用药</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
import { boy } from "@api/boy";
import {throttle} from '@utils/method';
export default {
  name: "Boy",
  data() {
    return {
      sign: 0,
      boyShop: [],
      boyNav: [
        {
          title: "阳痿早泄",
          ids:
            "758157,475906,475907,2268,3669,156615,858038,859064,192137,733395,843784,856337,11316,10868,10867,527078,818497,818498,301337,514235,762560,301340,514234,520512,825192,535485,862118,10713,287096,287097,220778,231269,220793,856215,857695,764202,850932,849245,155444,226388,808474,818520,862108,863605,865069,862105"
        },
        {
          title: "肾虚肾亏",
          ids:
            "806512,155883,3397,764808,1462,2477,14286,159784,212037,226592,826433,5514,1652,10581,779025,764806,169197,823174,831344,763"
        },
        {
          title: "前列腺炎",
          ids:
            "52836,11692,11929,207422,269069,675,1555,9647,262912,158853,202465,3772,849265,9784,9632,7159,846823,559,11808,158107,50772,3003,52679,433791,489403,52718,207440,80039,5874,9819,9063,257645,185091,159381"
        },
        {
          title: "肾炎肾病",
          ids:
            "168611,158485,12381,11995,3809,170700,420571,803794,5184,181193,580465,840335,2318,179566,182035,192102,745383,180175,821152,700714"
        },
        {
          title: "不育",
          ids:
            "155530,154453,4450,52735,9230,524996,177342,204498,697117,2407,158099,158717,209586,164912,816964,156626"
        }
      ],
      boyList:[
        {
          urlImg:"https://img.tianditao.com/mall/vmall/index/201910/3a7ca45949654438bbd3fb2084499b48.jpg",
          ids:"818498,301337,514235,514234,818497,301340,808474,520512,825192,535485,862118,849159,849158,762560,535486,520510,416929,416930,839370,818522,818521,818520",
          title:"阳痿早泄"
        },
        {
          urlImg:"https://img.tianditao.com/mall/vmall/index/201910/7a4ad98fb4d643bab820e147fc1ab312.jpg",
          ids:"207422,11929,262912,52836",
          title:"补肾壮阳"
        },
        {
          urlImg:"https://img.tianditao.com/mall/vmall/index/201910/cf99aa40482b4e80a77f200d77cb5736.jpg",
          ids:"11929,207422,52718,269069,262912,52836",
          title:"滋阴补肾"
        },
        {
          urlImg:"https://img.tianditao.com/mall/vmall/index/201910/87aca0c0d5834d269cbfc56491937d51.jpg",
          ids:"764808,155883,5514,212037,3397,445114,347233,232496",
          title:"前列腺炎"
        },
        {
          urlImg:"https://img.tianditao.com/mall/vmall/index/201910/e959f6515e02449e9dfeabca40e03d9e.jpg",
          ids:"764808,155883,14286,2477,3397,212037,226592,5514,169197,445114,763,227107,232496,217401",
          title:"前列腺增生"
        },
        {
          urlImg:"https://img.tianditao.com/mall/vmall/index/201910/e5a8f0f565884cb08f4bae9a195ef627.jpg",
          ids:"52735,164912,4450,227104",
          title:"男性不育"
        },
        {
          urlImg:"https://img.tianditao.com/mall/vmall/index/201910/b02facc0a0984afd82ad0f52303fc97a.jpg",
          ids:"764808,155883,5514,226592,3397,212037,177343,10581",
          title:"尿路感染"
        },
        {
          urlImg:"https://img.tianditao.com/mall/vmall/index/201910/320dc2b584694c12ab781bec8f91807e.jpg",
          ids:"1462,2318,160484,10619,2323,851,223822,854,402866,599,175281,402502,8031,2431,5751,641390",
          title:"肾结石"
        },
        {
          urlImg:"https://img.tianditao.com/mall/vmall/index/201910/a806a6247ff745be9f0e26b2b8f30a95.jpg",
          ids:"168611,420571",
          title:"夜尿症"
        },
        {
          urlImg:"https://img.tianditao.com/mall/vmall/index/201910/970afcdb21254f348bfa826f0a4b9a78.jpg",
          ids:"12381,158485,11995,3809,179566,580465,821152,205394",
          title:"肾炎肾病"
        }
      ]
    };
  },
  created() {
    this.handleGetBoy(0, this.boyNav[0].ids);
  },
  methods: {
    async handleGetBoy(index, ids) {
        let data = await boy(ids);
        this.boyShop = data;
    },

    async handleClickGetBoy(index, ids) {
      if(this.sign != index){
        this.sign = index;
        let data = await boy(ids);
        this.boyShop = data;
      }
    }
  }
};
</script>

<style scoped>
.boy {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main {
  flex: 1;
  overflow-y: auto;
}

.main .slider {
  height: 1.76rem;
}

.main .slider img {
  width: 100%;
  height: 100%;
}

.main .nav {
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.main .nav img {
  width: 0.75rem;
  height: 0.9rem;
}

.main .title_1 {
  height: 0.3313rem;
  padding: 0.01rem 0.1rem;
}

.main .title_1 img {
  width: 100%;
  height: 100%;
}

.main .slider_x {
  height: 1.52rem;
  overflow: auto;
  display: flex;
  background: #eee;
}

.main .slider_x .item {
  width: 1.1rem;
  height: 1.52rem;
  padding: 0.1rem 0.15rem;
  margin-right: 0.1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.main .slider_x .item img {
  width: 0.8rem;
  height: 0.8rem;
}

.main .slider_x .item p {
  font-size: 0.14rem;
  color: #333;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.main .act_raw {
  height: 0.83rem;
  padding: 0.05rem;
}

.main .act_raw img {
  width: 100%;
  height: 100%;
}

.main .title_2 {
  height: 0.35rem;
}

.main .title_2 img {
  width: 100%;
  height: 100%;
}

.main .act_con {
  height: 1.6rem;
  display: flex;
}

.main .act_con img {
  width: 1.875rem;
  height: 1.6rem;
}

.main .act_con_1 {
  height: 1.22rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.main .act_con_1 img {
  width: 0.9375rem;
  height: 1.22rem;
}
.main .act_con_2 {
  height: 1.28rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.main .act_con_2 img {
  width: 0.9375rem;
  height: 1.28rem;
}
.main .title_3 {
  height: 0.35rem;
}

.main .title_3 img {
  width: 100%;
  height: 100%;
}
.main .vadio_1,
.main .vadio_2 {
  height: 2.2rem;
  padding: 0.1rem;
}
.main .vadio_1 img,
.main .vadio_2 img {
  width: 100%;
  height: 100%;
}
.main .title_4 {
  height: 0.35rem;
}

.main .title_4 img {
  width: 100%;
  height: 100%;
}
.main .nav_list {
  width: 3.75rem;
  height: 0.53rem;
  overflow-x: auto;
}
.main .nav_list .list {
  width: 4.8rem;
  height: 0.53rem;
}
.main .nav_list .list li {
  width: 0.76rem;
  height: 0.5rem;
  padding: 0 0.05rem;
  margin: 0 0.1rem;
  font-size: 0.14rem;
  color: #333333;
  text-align: center;
  line-height: 0.5rem;
  border-bottom: 0.03rem solid white;
  float: left;
}
.main .nav_content {
  min-height: 2.725rem;
  background: #eee;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.main .nav_content .item_con {
  width: 1.825rem;
  height: 2.725rem;
  padding: 0.1rem 0.14rem;
  margin: 0.02rem 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.main .nav_content .item_con img {
  width: 1.545rem;
  height: 1.545rem;
}
.main .nav_content .item_con p {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.main .nav_content .item_con p:nth-of-type(1) {
  font-size: 0.14rem;
  color: #f53b10;
}
.main .nav_content .item_con p:nth-of-type(2) {
  font-size: 0.13rem;
  color: #333;
}
.main .nav_content .item_con .btn {
  width: 100%;
  height: 0.27rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main .nav_content .item_con .btn span {
  font-size: 0.15rem;
  color: #333;
}
.main .nav_content .item_con .btn button {
  width: 0.68rem;
  height: 0.27rem;
  border-radius: 0.2rem;
  background: #f53b10;
  color: #fff;
}
.footer {
  height: 0.5rem;
  padding: 0.07rem 0.06rem;
}
.footer .mao {
  width: 3.63rem;
  height: 0.36rem;
  padding: 0.04rem 0;
  border-radius: 0.05rem;
  background: #1d5ba8;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.footer .mao a {
  font-size: 0.14rem;
  color: #fff;
}
.footer .mao a:hover{
  color: rgb(253, 231, 111);
}
#boyactive {
  color: #f23d22;
  border-bottom: 0.03rem solid #f23d22;
}
</style>