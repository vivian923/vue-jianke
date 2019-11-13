<template>
  <div class="page">
    <main>
      <header>
        <span class="top_car">购物车</span>
        <span class="top_car1">编辑</span>
      </header>
      <div class="checkall">
        <span class="self">健客自营</span>
        <span class="self1">再购79.00元免运费</span>
      </div>
      <div class="item-body">
        <input type="checkbox" class="solecheck" />
        <img
          src="https://image.jianke.com/suo//upload/prodimage/201810/20181022182156533!200x200.jpg"
        />
        <div class="info">
          <span>同仁堂 左归丸 9g*6袋</span>
          <p>规格：9g*40s</p>
          <p class="price">￥98.00</p>
          <span class="pricea">比加入时降低20.00元</span>
          <h2>
            <s>￥0</s>
            <div>
              <button>-</button>
              <input type="text" class="input" />
              <button>+</button>
            </div>
          </h2>
        </div>
      </div>
      <div class="remove">
        <p>
          <span>移入收藏夹</span>
          <span>删除</span>
        </p>
      </div>
      <div class="item-body">
        <input type="checkbox" class="solecheck" />
        <img
          src="https://image.jianke.com/suo//upload/prodimage/201810/20181022182156533!200x200.jpg"
        />
        <div class="info">
          <span>同仁堂 左归丸 9g*6袋</span>
          <p>规格：9g*40s</p>
          <p class="price">￥98.00</p>
          <span class="pricea">比加入时降低20.00元</span>
          <h2>
            <s>￥0</s>
            <div>
              <button>-</button>
              <input type="text" class="input" />
              <button>+</button>
            </div>
          </h2>
        </div>
      </div>
      <div class="remove">
        <p>
          <span>移入收藏夹</span>
          <span>删除</span>
        </p>
      </div>
      <div class="item-body">
        <input type="checkbox" class="solecheck" />
        <img
          src="https://image.jianke.com/suo//upload/prodimage/201810/20181022182156533!200x200.jpg"
        />
        <div class="info">
          <span>同仁堂 左归丸 9g*6袋</span>
          <p>规格：9g*40s</p>
          <p class="price">￥98.00</p>
          <span class="pricea">比加入时降低20.00元</span>
          <h2>
            <s>￥0</s>
            <div>
              <button>-</button>
              <input type="text" class="input" />
              <button>+</button>
            </div>
          </h2>
        </div>
      </div>
      <div class="remove">
        <p>
          <span>移入收藏夹</span>
          <span>删除</span>
        </p>
      </div>
      <div class="item-body">
        <input type="checkbox" class="solecheck" />
        <img
          src="https://image.jianke.com/suo//upload/prodimage/201810/20181022182156533!200x200.jpg"
        />
        <div class="info">
          <span>同仁堂 左归丸 9g*6袋</span>
          <p>规格：9g*40s</p>
          <p class="price">￥98.00</p>
          <span class="pricea">比加入时降低20.00元</span>
          <h2>
            <s>￥0</s>
            <div>
              <button>-</button>
              <input type="text" class="input" />
              <button>+</button>
            </div>
          </h2>
        </div>
      </div>
      <div class="remove">
        <p>
          <span>移入收藏夹</span>
          <span>删除</span>
        </p>
      </div>
       <div class="item-body">
        <input type="checkbox" class="solecheck" />
        <img
          src="https://image.jianke.com/suo//upload/prodimage/201810/20181022182156533!200x200.jpg"
        />
        <div class="info">
          <span>同仁堂 左归丸 9g*6袋</span>
          <p>规格：9g*40s</p>
          <p class="price">￥98.00</p>
          <span class="pricea">比加入时降低20.00元</span>
          <h2>
            <s>￥0</s>
            <div>
              <button>-</button>
              <input type="text" class="input" />
              <button>+</button>
            </div>
          </h2>
        </div>
      </div>
      <div class="remove">
        <p>
          <span>移入收藏夹</span>
          <span>删除</span>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Cart"
};
</script>

<style scoped>
html,body{height: 100%}
html{font-size: 26.67vw;}/*750-----31.25--640*/
body{display: flex;flex-direction: column;}
header{height:0.45rem;background:#fff;display: flex;align-items: center;position: relative;font-size: 17px;}
main{flex: 1;overflow-y: auto;background:  #e5e5e5;}
footer{height:0.49rem;background: green;display: flex;justify-content: space-around;align-items: center;}
.checkall{height: 0.35rem;margin: 0 auto;background:#fff;padding: 0 .15rem;margin-top: .12rem;display: flex;align-items: center;font-size: 17px;}
.top_car{margin-left: 40%;}
.top_car1{margin-left: 34%;}
.self{margin-left: 10%;}
.self1{margin-left: 38%;font-size: 0.12rem; color: #f78646;}
.item-body{height: 0.9784rem;padding: .1rem .1rem 0;background:  #e5e5e5;display: flex;font-size: 0.12rem}
.item-body img{width: 0.58rem;height: 0.58rem;border:solid .05rem #fff;margin-right: .2rem;margin-left: .2rem;}
.remove{    height: 0.12rem;line-height: 0.12rem;text-align: right;padding: .16rem .3rem .2rem;border-bottom: 2px solid #eee;font-size: 17px;}
button{     width: 0.2rem;font-size: 0.14rem;   color: #666;height: .2rem;line-height: .2rem;font-size: 0.12rem;text-align: center;display: inline-block;}
.input{    width: .3rem;height: .2rem;border-right: 1px solid #e5e5e5; border-left: 1px solid #e5e5e5;box-sizing: border-box;}
.item-body h2{display: flex;justify-content: space-between;}
.info{width: 3rem;}
.pricea{display: inline-block;border: 1px solid #ff6464;padding: 0 .1rem;color: #ff6464;}
.price{color: red;}
.solecheck{margin-top: .3rem;}
</style>