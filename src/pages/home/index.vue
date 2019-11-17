<template>
  <div class="page">
    <div class="header">
      <span class="iconfont">&#xe678;</span>
      <div class="find">
        <i class="iconfont">&#xe62f;</i>
        <input type="text" placeholder="韦力得买药抽大奖" @focus="toSearch()"/>
      </div>
      <div class="city">
        <i class="iconfont">&#xe662;</i>
        <router-link 
          :to="{name:'city',params:{path:$route.path}}"
          tag="span"
        >
        {{this.$store.state.city.nm}}</router-link>
      </div>
    </div>

    <div class="bigbox">
      <div class="slider">
        <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          class="banner"
          src="https://img.tianditao.com/mall/vmall/index/201911/d81bc22b6a6e4df5bbe4eb6711c8f94c.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="banner"
          src="https://img.tianditao.com/mall/vmall/index/201911/2ca99d4a210a48a7b84daf9d86057423.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="banner"
          src="https://img.tianditao.com/mall/vmall/index/201911/147f02f472184a8885c7f62b868e4d54.png"
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
      <div class="home_nav">
        <ul>
          <router-link v-for="(item,index) in homeNav" :key="index" :to="item.path" tag="li">
            <img :src="item.imgUrl"/>
            <span>{{item.title}}</span>
          </router-link>
        </ul>
      </div>
      <div class="jktt-box">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAABxVBMVEUAAABERERERERERERERERCQkJBQUFBQUFERERCQkJERERERERDQ0NERERERERBQUFBQUE8PDxERERERERERERERERERERERERERERERERERERERERERERERERERERDQ0NERERERERDQ0NBQUFBQUFAQEAzMzMnzo5EREQs25tEREREREREREREREQ6Ojot3JxEREQ8PDw0NDRERERBQUFERERERERCQkIs2pojyIdEREQlyokt3JxAQEA1NTUjxYQp1JREREQzMzMt3Jw1NTVEREREREQr15cxMTFBQUElzIs0NDQs2pogwX8t3Jw/Pz80NDQr2JgkyYgkx4c3Nzcp05MiwYE0NDQ0NDQt3Jw3Nzct3JwiwoEhwYE6Ojot3JwwMDA9PT0rKysgv34wMDAgvn06Ojot3JwwMDA9PT0t3JwoKCg7Ozso0pMt3JwhwoEmzItBQUEr1ZYwMDAt3Jwt3JwiIiIt25tEREQ3NzczMzMt3Jw8PDw5OTkwMDA2NjYiIiJAQEBBQUEsLCwoKCgbGxss25sr2Zkn0I8q15cp1pUp1JMo0pImzIsjx4Y4ODgtLS0lJSUrKyseHh4xMTESEhIRERGS+MmmAAAAeHRSTlMA9/O3FiQHA/kt7+rQvo8/FAv+7NzJr6qAeRuZlIhrX09LPDAoHw749ezm4cbBv6miloBvZVdENiATE/j06+ja2dXQwL2xp56QdHFrUTQZ9/Hv7+7u7ePi4N/QzMW5tbOwq6ikn5GOiYeGenFpZmRiW1RMSzw2MCpVM/xQAAAEBklEQVRYw82XZ2PTMBCGL2SHtKQrDV20hRY6aAttKWXvvffee28cZS+6oBP4vegUK7KNrLTkC+8HSec7P5FOJzsGiTQUN1R+Yfet9WLHBJpJdaMsxlarnG7d3SpFoFarEKj9ujsgR6C8CgRfEcnnSZb269O/03NBoIqijGvWfi79WgIu7hfKzc/n5mh/LJ1OJ4eliNRSoVBQIFJUCQDvHuxdIuMGRDK/sJAGsF1InCoD0I5mGEC61p/J+XkFQu/D2LXLEfFEIpoqiwj5cAc9coSWzWTiklwQVAkxjG01gHxHUGURQWzXqxGaXNzPzdIdFSCMzsoRK8wFuHKFQm53RYg1aapD0gJWL0T4TyapjlWE2BKnGvk7bAWIKuzGVAiUcparsaupBBHCtg+WkQuLKfxrsHVWhGhjx0ySseUjWrAdUSOgO58nu0vmWVqMNSD8bEM65QgP9g46+EhLZwBNdn0PrcUvAlHckJA8F03o66WDAVo6z9FkiAMU+EggGLnWK0dsQ2cVNLUWnyltxmK87wfTSX3ZDTJF0Le2GHJYv2EVQKelOldhm88nU/HsX7kIYr+BBdaH9BsaAaDajDiCLZEiWMlsZoFOl35DEAfQ4XQYEDsa6TyyKZLImAn89KyBksKN1e1e+P+F/zu6VvTPRxrslFyVqrcThMYHd938xIMdEoRc+0HoYCwW2/WVBy8LYYn8HKP6dtQW0ZAli8lXYNSzRZLVqoR9CgkT+2wRHWQhRxLrQGgLyS0Qh19c2I6Eqcv2uX9ACZnatdz0DGUSJLdIbaHBbxPTMxvtEd0HWOE63cxyN2gaZdzj3jd3Dz49c+b89MykAgGuIPP4mtdDU4SdysydGt33AjPZc+rD98kfFxQIqGmmjng0yo9RbauXu65jJqemX5/4MbtXXYedAxTAT3LVmHD0YCanv0++OzF7S47QJKLTmcvw2MHYxNQMXcXO028fLgsh1sNjt/cwwuzslfHxcoi64JFht//JjUu4Ho5AxtF9G3de3Hv78WkQiAokR6j92/p9ik8WVn7r6uwjHBEAhZsf+9VlIjS1EFEuonKERe4oUzfYivnBXp5DRcTJf0Z4GjWm7Dm/bC8dpk3dxL/+jGrq14pKkWtdlmPKvzgFoh4HLjBpNKDPIUoIuWqeB3uxNpgQm3HQAQZtcOqPgeNbCVUiIF6j/C0+ZEI046BFhHQ1+/R6HAWgjDlN840Y+Owx1cZWxBFtLD1uYHK1h3mR17P5b00ww9mxQz8Efcym4d5ICbGheMOYpXAO6/e08gt8O3gqakXZYzJQJkRAvCciEsT70qi+WIZ1VoSvJQRC6zZZEWEBqwYmf68RsanhuGWLu4YCRkSgxVNC9PPfcmEp/gEhDEYIZUGHjQAAAABJRU5ErkJggg=="
        />
        <div class="jktt-list">
          <span>文章</span>
          <p>脂肪细胞只增不减，一旦胖了就很难再瘦回去了呀，那可咋办嘛</p>
        </div>
      </div>
      <div class="img-box">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/b5bbdaf2788f4c5e97a5c76585347c91.gif"
        />
      </div>
      <div class="img-box2">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/d93883ce8e854f3e87ee625e0773bb80.jpg"
        />
      </div>
      <div class="img-box3">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/8b205e835f044088be6a8bb9d8d4c03c.jpg"
        />
      </div>
      <div class="img-box4">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/4a0f8795677941098d8571a0e11bbaec.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/3a0ac9b5e46d4866a543c1fe3a63007a.jpg"
        />
      </div>
      <div class="img-box5">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/8e2aaad2e7fc432ba5724f4d44e75813.jpg"
        />
      </div>
      <div class="img-box6">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/d8545c7ab28e4d5f9e4e48982f48573d.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/586bf460f9ad47dd93d7ddac556d5334.jpg"
        />
      </div>
      <div class="img-box7">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/985bc432e91c4afda2eae100fe5f0c50.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/055fcd51d21f46ceb72d0a77e9335799.jpg"
        />
      </div>
      <div class="img-box8">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/4f7988a4aee749a38ba54964b433f3a3.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/4cf3e02f6d1045a9aec3a2dcc3201993.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/b87efaf6b07d4b739115adb284203e79.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/3a19c97d52b541429b908f7ecce17520.jpg"
        />
      </div>
      <div class="img-box9">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201911/b8d991de4f134743b0b28b1faf448853.jpg"
        />
      </div>
      <div class="img-box10">
        <img
          src="https://img.jianke.com/mall/vmall/index/201807/838e00d093cc4e2890bab074c479965f.png"
        />
      </div>
      <div class="img-box11">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/b7135a538bc041f58e8797c93d05bf97.jpg"
        />
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/0bb89c0bfba5450986baa2636cb18e4b.jpg"
        />
      </div>
      <div class="img-box12">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/53c7918b357a4756ac35c577eb6eb6c0.jpg"
        />
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/5db2cf17babc40beb733b2db40588e74.jpg"
        />
      </div>
      <div class="img-box13">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/3d76dea0425e4f04a851e82305be7f80.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/f919811252bf413895b9155603def909.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/2f9333d66f134fe293d044632b8c9e08.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201910/09af6ef235094e0eaf004fd1c03af793.jpg"
        />
      </div>
      <div class="img-box14">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/2667d8488ccb497a831d6358ae02c4a6.jpg"
        />
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/10e28a63d4964af89672bdf91596af4d.jpg"
        />
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/49aa63472d574b4da7b7387edcfe7e30.jpg"
        />
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/5e5d24c9a7a44e6abd80e3c79afd29a0.jpg"
        />
      </div>
      <div class="img-box15">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/ecd31a91c53048d6936fa711d65ce2e2.jpg"
        />
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/c698e6cace7642358b623e08e68c9219.jpg"
        />
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/53adb87503da4d6ab207b4c9eae2a20b.jpg"
        />
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/af9f85df49d74c2ba924c7fc86840524.jpg"
        />
      </div>
      <div class="img-box16">
        <img
          src="https://img.jianke.com/mall/vmall/index/201807/9312852ad50245b8ba5bc44a8cf0545d.jpg"
        />
      </div>
      <div class="img-box17">
        <img
          src="https://img.tianditao.com/mall/vmall/index/201909/372edeefde2642648f79c0ec52c04a4c.jpg"
        />
        <img
          src="https://img.tianditao.com/mall/vmall/index/201909/e1b4ce62e15f4161bde362b18a6f5114.jpg"
        />
      </div>
      <div class="img-box16">
        <img
          src="https://img.jianke.com/mall/vmall/index/201807/3e2c83bdf71544ac9263b52a2942e1cc.png"
        />
      </div>
      <div class="commodity">
        <div>
          <img
            src="https://img.jianke.com/suo//mall/product/201908/766a9849198a4bd8b23b777750153031!200x200.jpg"
          />
          <p>舒筋健腰丸OTC(白云山)</p>
          <p>下单立送吲哚美辛巴布膏4贴</p>
          <p>￥769.00</p>
        </div>
        <div>
          <img
            src="https://img.jianke.com/suo//mall/product/201910/877789332a5a4847b8b08030d244c087!200x200.jpg"
          />
          <p>【补钙大礼包】健力多R氨糖软骨素钙片中老年补钙补软骨护关节维骨保健品</p>
          <p>双11提前购专享！</p>
          <p>￥229.00</p>
        </div>
        <div>
          <img
            src="https://img.jianke.com/suo//upload/prodimage/201907/2019730154134380!200x200.jpg"
          />
          <p>舒筋健腰丸OTC(白云山)</p>
          <p>下单立送吲哚美辛巴布膏4贴</p>
          <p>￥769.00</p>
        </div>
        <div>
          <img
            src="https://img.jianke.com/suo//mall/product/201910/a17b989caa2e44efa0acdb8e72a569be!200x200.jpg"
          />
          <p>【补钙大礼包】健力多R氨糖软骨素钙片中老年补钙补软骨护关节维骨保健品</p>
          <p>双11提前购专享！</p>
          <p>￥229.00</p>
        </div>
      </div>
      <div class="img-box18">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/266c1ec8666a4403b3bb2479d204ee30.png"
        />
      </div>
    </div>


  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  name: "Home",
  data() {
    return {
      homeNav:[
        {
          imgUrl:"https://img.jianke.com/mall/vmall/index/201810/3df1106828994d8db9b8be562d3e512a.png",
          title:"购买咨询",
          path:"/bayCall"
        },
        {
          imgUrl:"https://img.jianke.com/mall/vmall/index/201810/e1a518d01c74495db34ca86dfb02846e.png",
          title:"领卷中心",
          path:"/bayCall"
        },
        {
          imgUrl:"https://img.jianke.com/mall/vmall/index/201810/5b4e627d99c541e791a98979c31bf6cc.png",
          title:"按症找药",
          path:"/bayCall"
        },
        {
          imgUrl:"https://img5.jianke.com/mall/vmall/index/201812/b749ac8adce24fffaddc4b19bce744cf.png",
          title:"肝病艾滋",
          path:"/bayCall"
        },
        {
          imgUrl:"https://img.jianke.com/mall/vmall/index/201810/58831583bb4a4da0be2329381d7b665a.png",
          title:"男性",
          path:"/boy"
        },
        {
          imgUrl:"https://img.jianke.com/mall/vmall/index/201810/35d16c2275264029b8fde76dce0e2d67.png",
          title:"女性",
          path:"/gril"
        },
        {
          imgUrl:"https://img.jianke.com/mall/vmall/index/201810/3abb0e1a82604100b9849e0b6e14bf0c.png",
          title:"全球购",
          path:"/global"
        },
        {
          imgUrl:"https://img.tianditao.com/mall/vmall/index/201907/afc63bf1328f467a9cc6e4fd9dadca7e.png",
          title:"皮肤科",
          path:"/bayCall"
        }
      ]
    }
  },
  methods: {
    toSearch(){
      this.$router.push("/search")
    }
  },

};
</script>

<style scoped>
 .page{
    display: flex;
    flex-direction: column;
    justify-content: space-between
 }
 .header{
	width: 100%;
	height: 0.43rem;
	position: absolute;
    left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
  z-index: 999;
}
.header span:nth-of-type(1){
	font-size: 0.4rem;
	color: #FFFFFF;
}
.header .find{
	width: 2.31rem;
	height: 0.28rem;
	border-radius: 0.3rem;
	background: #FFFFFF;
	margin: 0 0.1rem;
	display: flex;
	align-items: center;
	justify-content: center;
}
.header .find i{
	font-size: 0.15rem
}
.header .find i img{
	width: 100%;
	height: 100%;
}
.header .find input{
	width: 1.8848rem;
	height: 0.16rem;
  padding-left: 5px;
  font:initial
}
.header .city{
  width:.6rem;
  height:.25rem;
  display:flex;
  justify-content:center;
  align-items:center
}
.header .city i{
  font-size:.16rem;
  color:#fff
}
.header .city span:nth-of-type(1){
	font-size: 0.18rem;
  width:.5rem;
	color: #FFFFFF;
  font-family: "楷体";
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bigbox{
	flex: 1;
	overflow-y: auto;
}
.slider{
	width: 100%;
	height: 1.7rem;
}
.slider img{
	width: 100%;
	height: 100%;
}
.home_nav{
	width: 100%;
	height: 1.63rem;
	padding: 0.05rem 0 0.1rem;
	background: #ffffff;
}
.home_nav ul{
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-content: space-around;
	justify-content: space-around;
	
}
.home_nav ul li{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0.05rem 0.18rem;
}
.home_nav ul li img{
	width: 0.4rem;
	height: 0.4rem;
}
.home_nav ul li span{
	font-size: 0.12rem;
	padding: 0.04rem;
}
.jktt-box{
	width: 100%;
	height: 0.36rem;
	padding: 0.05rem 0.12rem;
	margin-bottom: 0.2rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.jktt-box img{
	width: 0.3rem;
	height: 0.3rem;
}
.jktt-box .jktt-list{
	width: 3.11rem;
	height: 0.36rem;
	padding: 0 0.04rem;
	background: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.jktt-box .jktt-list span{
	width: 0.3rem;
	height: 0.17rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.12rem;
	border: 0.01rem solid #F34242;
	color: #F34242;
	padding: 0.01rem 0.02rem;
}
.jktt-box .jktt-list p{
	font-size: 0.12rem;
	width: 2.7rem;
	height: 0.17rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.img-box{
	width: 100%;
	height: 1.365rem;
}
.img-box img{
	width: 100%;
	height: 100%;
}

.img-box2{
	width: 100%;
	height: 1.69rem;
}
.img-box2 img{
	width: 100%;
	height: 100%;
}
.img-box3{
	width: 100%;
	height: 1.47rem;
}
.img-box3 img{
	width: 100%;
	height: 100%;
}
.img-box4{
	width: 100%;
	height: 1.45rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.img-box4 img{
	width: 1.875rem;
	height: 1.45rem;
}
.img-box5{
	width: 100%;
	height: 0.425rem;
}
.img-box5 img{
	width: 100%;
	height: 100%;
}
.img-box6{
	width: 100%;
	height: 0.91rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.img-box6 img{
	width: 1.875rem;
	height: 0.91rem;
}
.img-box7{
	width: 100%;
	height: 0.91rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.img-box7 img{
	width: 1.875rem;
	height: 0.91rem;
}
.img-box8{
	width: 100%;
	height: 1.5019rem;
	display: flex;
	align-items: center;
}
.img-box8 img{
	width: 0.936299rem;
	height:1.5019rem;
}
.img-box9{
	width: 100%;
	height: 0.75rem;
}
.img-box9 img{
	width: 100%;
	height: 100%;
}
.img-box10{
	width: 100%;
	height: 0.5rem;
}
.img-box10 img{
	width: 100%;
	height: 100%;
}
.img-box11{
	width: 100%;
	height: 1.305rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.img-box11 img{
	width: 1.875rem;
	height: 1.305rem;
}
.img-box12{
	width: 100%;
	height: 1.31rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.img-box12 img{
	width: 1.875rem;
	height: 1.31rem;
}
.img-box13,.img-box14,.img-box15{
	width: 100%;
	height: 1.25rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.img-box13 img,.img-box14 img,.img-box15 img{
	width: 0.9375rem;
	height: 1.25rem;
}
.img-box16{
	width: 100%;
	height: 0.5rem;
}
.img-box16 img{
	width: 100%;
	height: 100%;
}
.img-box17{
	width: 100%;
	height: 1.305rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.img-box17 img{
	width: 1.875rem;
	height: 1.305rem;
}

.commodity{
	width: 100%;
	min-height: 2.403899rem;
	padding: 0 0.12rem;
	display: flex;
	flex-wrap: wrap;
}
.commodity div{
	width: 1.733899rem;
	height: 2.403899rem;
	display: flex;
	flex-direction: column;
	
}
.commodity div img{
	width: 1.733899rem;
	height: 1.733899rem;
}
.commodity div p:nth-of-type(1){
	width: 1.733899rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-top: 0.03rem;
	font-size: 0.14rem;
}
.commodity div p:nth-of-type(2){
	width: 1.733899rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 0.12rem;
	color: #999;
	margin: 0.03rem 0;
}
.commodity div p:nth-of-type(3){
	font-size: 0.14rem;
	color: #FF5F57;
}
.img-box18{
	width: 100%;
	height: 1rem;
}
.img-box18 img{
	width: 100%;
	height: 100%;
}
</style>