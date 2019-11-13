<template>
    <article class="cbox">
                <div class="outbox"  v-for="(item,index) in rax" :key="index">
                    <div class="innerbox">
                        <div class="pic">
                             <img :src="item.productImageUrl | imgurl">
                        </div>
                        <div class="info">
                            <div class="names">{{item.productName}}</div>
                            <div class="btn">
                                <span class="hp"><span>{{item.productPrice | price}}</span></span>
                                <div>立即购买</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </article>
</template>

<script>
import{rax} from "@api/global"
import { filter } from 'minimatch'

export default {
    data(){
        return{
            rax:[]
        }
    },
    async created(){
        let data=await rax("861058,861062,861064,861066,861069,861072,861075")
        this.rax=data.splice(0,5)
    },
    filters:{
        imgurl(value){
            return "https:"+value
        },
        price(value){
            return "￥"+(value/100)+".00"
        }
    }
}
</script>

<style scoped>
.cbox{
    padding:0 12px;
    display:flex;
    flex-wrap:wrap;
    min-height:2rem
}
.cbox .outbox{
    width:1.05050rem;
    height:1.92650rem;
    padding:0 5px;
    margin:5px 0;
    box-sizing: unset
}
.cbox .outbox .innerbox{
    width:0.9705rem;
    height:1.84650rem;
    padding:4px;
    display:flex;
    flex-direction:column;
}
.cbox .outbox .innerbox .pic{
    width:0.9705rem;
    height:0.9705rem;
    flex:1;
}
.cbox .outbox .innerbox .pic img{
    width:100%;
    height:100%
}
.cbox .outbox .innerbox .info{
    flex: 1;
    padding:4px
}
.cbox .outbox .innerbox .info .names{
    width:100%;
    overflow: hidden;
    font-size:13px;
    height:0.2rem;
}
.cbox .outbox .innerbox .info .btn{
    width:0.89050rem;
    height:0.546rem;
    margin-top:2px;
}
.cbox .outbox .innerbox .info .btn .hp{
    display: flex;
}
.cbox .outbox .innerbox .info .btn .hp label{
    font-size:10px;
    color: #f53b10;
    display:flex;
    align-items: flex-end;
}
.cbox .outbox .innerbox .info .btn .hp span{
    font-size:15px;
    color: #f53b10;
}
.cbox .outbox .innerbox .info .btn div{
    color:#fff;
    font-size:12px;
    padding: 4px 8px;
    border-radius: 30px;
    background:#f53b10;
    text-align:center;
    margin-top:5px;
}
</style>