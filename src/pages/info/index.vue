<template>
  <div class="info">
    <Header title="账号中心" icon />

    <div class="main">
        <v-touch class="headP" @tap="handleShow()">
            <span>头像</span>
            <div class="head_img">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573922178940&di=a297edb44786064a43e24af6b65dc790&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F27%2F20180827130009_yknlb.thumb.224_0.jpg" alt="">
            </div>
            <i class="iconfont">&#xe60f;</i>
        </v-touch>

        <div class="vipLevel">
            <span>会员等级</span>
            <div class="content">
                普通
            </div>
            <i class="iconfont">&#xe60f;</i>
        </div>

        <div class="name">
            <span>姓名</span>
            <div class="content">
                请输入姓名
            </div>
            <i class="iconfont">&#xe60f;</i>
        </div>

        <div class="NickName">
            <span>昵称</span>
            <div class="content">
                186****6507
            </div>
            <i class="iconfont">&#xe60f;</i>
        </div>

        <div class="sex">
            <span>性别</span>
            <div class="content">
                男
            </div>
            <i class="iconfont">&#xe60f;</i>
        </div>

        <div class="bornDay">
            <span>出生日期</span>
            <div class="content">
                请选择出生日期
            </div>
            <i class="iconfont">&#xe60f;</i>
        </div>

        <div class="security">
            <span>账号与安全</span>
            <i class="iconfont">&#xe60f;</i>
        </div>

        <div class="address">
            <span>收货地址</span>
            <div class="content">
                请选择出生日期
            </div>
            <i class="iconfont">&#xe60f;</i>
        </div>

    </div>



    <div class="bottom">
      <ul>
        <li>
          <a href="#">
            欢迎您:
            <span>18591659174</span>
          </a> |
          <v-touch tag="a" @tap="exit()">退出</v-touch>
        </li>
        <li>
          <a href="#">关于健客</a> |
          <a href="#">帮助中心</a>
        </li>
      </ul>
      <p>微信关注【健客网上药店】领取200元优惠券</p>
      <p>健客全国免费专线 400-6666-800</p>
      <p>药品交易资格证：粤C20140009</p>
      <p>Copyright©2006-2017 健客 版权所有</p>
    </div>
    <transition name="mask">
        <v-touch class="mask" v-if="flag"  @tap="handleShow()"></v-touch>
    </transition>

    <transition name="headShow">
    <div class="headShow"  v-if="flag">
        <div class="top">
            <span>上传头像</span>
            <v-touch  @tap="handleShow()">X</v-touch>
        </div>
        <div class="bottom">
            <div class="headImg">
                <input type="text" class="headInput">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573922178940&di=a297edb44786064a43e24af6b65dc790&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F27%2F20180827130009_yknlb.thumb.224_0.jpg" alt="">
            </div>
            <p>我们只接受jpg，jpeg，png格式图像</p>
            <button class="submit">上传</button>
        </div>
    </div>
    </transition>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            flag:false
        }
    },
    methods: {
        handleShow(){
            this.flag=!this.flag
        }
    },
};
</script>

<style>
.info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #eee;
}

.main{
    flex: 1;
    padding: .1rem 0 0;
}
.main .headP{
    height: .44rem;
    background: #fff;
    padding: 0 .1rem;
    margin-bottom: .1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: .01rem solid #e3e3e3;
    border-bottom: .01rem solid #e3e3e3;
}
.main .headP span{
    font-size: .14rem;
    color: #333;
}
.main .headP .head_img{
    width: .37rem;
    height: .37rem;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 2.6rem;
}
.main .headP .head_img img{
    width: 100%;
    height: 100%;
}


.main .vipLevel{
    height: .44rem;
    background: #fff;
    padding: 0 .1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .01rem solid #e3e3e3;
}
.main .vipLevel span{
    height: .37rem;
    width: 1.5rem;
    font-size: .14rem;
    color: #333;
    line-height: .37rem;
}
.main .vipLevel .content{
    width: 1.7rem;
    height: .37rem;
    overflow: hidden;
    font-size: .14rem;
    color: #ACACAC;
    text-align: end;
    line-height: .37rem;
}
.main .name{
    height: .44rem;
    background: #fff;
    padding: 0 .1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .01rem solid #e3e3e3;
}
.main .name span{
    height: .37rem;
    width: 1.5rem;
    font-size: .14rem;
    color: #333;
    line-height: .37rem;
}
.main .name .content{
    width: 1.7rem;
    height: .37rem;
    overflow: hidden;
    font-size: .14rem;
    color: #666;
    text-align: end;
    line-height: .37rem;
}

.main .NickName{
    height: .44rem;
    background: #fff;
    padding: 0 .1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .01rem solid #e3e3e3;
}
.main .NickName span{
    height: .37rem;
    width: 1.5rem;
    font-size: .14rem;
    color: #333;
    line-height: .37rem;
}
.main .NickName .content{
    width: 1.7rem;
    height: .37rem;
    overflow: hidden;
    font-size: .14rem;
    color: #666;
    text-align: end;
    line-height: .37rem;
}
.main .sex{
    height: .44rem;
    background: #fff;
    padding: 0 .1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .01rem solid #e3e3e3;
}
.main .sex span{
    height: .37rem;
    width: 1.5rem;
    font-size: .14rem;
    color: #333;
    line-height: .37rem;
}
.main .sex .content{
    width: 1.7rem;
    height: .37rem;
    overflow: hidden;
    font-size: .14rem;
    color: #666;
    text-align: end;
    line-height: .37rem;
}

.main .bornDay{
    height: .44rem;
    background: #fff;
    padding: 0 .1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .01rem solid #e3e3e3;
    margin-bottom: .1rem;
}
.main .bornDay span{
    height: .37rem;
    width: 1.5rem;
    font-size: .14rem;
    color: #333;
    line-height: .37rem;
}
.main .bornDay .content{
    width: 1.7rem;
    height: .37rem;
    overflow: hidden;
    font-size: .14rem;
    color: #ACACAC;
    text-align: end;
    line-height: .37rem;
}


.main .security{
    height: .44rem;
    background: #fff;
    padding: 0 .1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: .01rem solid #e3e3e3;
    border-bottom: .01rem solid #e3e3e3;
}
.main .security span{
    height: .37rem;
    width: 1.5rem;
    font-size: .14rem;
    color: #333;
    line-height: .37rem;
}

.main .address{
    height: .44rem;
    background: #fff;
    padding: 0 .1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .01rem solid #e3e3e3;
}
.main .address span{
    height: .37rem;
    width: 1.5rem;
    font-size: .14rem;
    color: #333;
    line-height: .37rem;
}
.main .address .content{
    width: 1.7rem;
    height: .37rem;
    overflow: hidden;
    font-size: .14rem;
    color: #666;
    text-align: end;
    line-height: .37rem;
}




.bottom{
	height: 1.5rem;
	background: white;
	display: flex;
	flex-direction: column;
}
.bottom ul{
	height: 0.44rem;
	padding: 0.14rem 0.15rem 0.12rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.bottom ul li{
	font-size: 0.12rem;
}
.bottom ul li a{
	color: #333;
}
.bottom p:nth-of-type(1){
	font-size: 0.13rem;
	color: #0075DE;
}
.bottom p{
	font-size: 0.12rem;
	color: #333;
	text-align: center;
	margin: 0.035rem 0 ;
}
.mask{
    background: rgba(0,0,0,.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
}
.headShow{
    height: 4.67rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
}
.headShow .top{
    height: .44rem;
    padding: 0 .15rem;
    font-size: .18rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: .1rem .1rem 0 0;
    background: white;
}
.headShow .bottom{
    height: 4.23rem;
    background: white;
    padding: .2rem .1rem .48rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}
.headShow .bottom .headImg{
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.headShow .bottom .headImg .headInput{
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0;
}
.headShow .bottom .headImg img{
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    border-radius: 50%;
}
.headShow .bottom p{
    font-size: .14rem;
    color: #ACACAC;
    margin-bottom: 1rem;
}
.headShow .bottom .submit{
    width: 100%;
    height: .44rem;
    border-radius: .05rem;
    background: #06A6F8;
    font-size: .14rem;
    color: #fff;
}

.mask-enter-to,.mask-leave{
    opacity: 0;
}
.mask-enter-active,.mask-leave-active{
    transition: all .3s ease-in;
}

.headShow-enter,.headShow-leave-to{
    bottom: -4.67rem;
}
.headShow-enter-active,.headShow-leave-active{
    transition: all .6s;
}
</style>