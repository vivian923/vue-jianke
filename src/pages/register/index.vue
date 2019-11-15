<template>
    <div class="page">
            <Header title="用户注册" icon/>
            <section>
                <div class="login_wrap">
                    <div class="login_box">
                        <div class="account_item">
                            <input type="text" placeholder="请输入您的手机号" v-model="phone">
                        </div>
                        <div class="pwd_item">
                            <input type="text" placeholder="验证码">
                            <button class="pwd-switch">获取验证码</button>
                        </div>
                        <div class="pwd_item">
                            <input type="password" placeholder="请输入6-16位密码" v-model="pwd">
                            <div class="pwd-switch2">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABfElEQVRYR+2V0VECQRBEezIwAyECIYQmATEDiEAyECMAIxAz0ARojEDMwAwkg7GGWqgrvIMFqcKPnd+9ne5607NnuHDZhfVRDBQChUAhUAgUAv+PgKQRgBuSw3P/KSWNAbRIDja9fxGQ1HL3pZn1SS7OZUJSB8AHgC7JZaOBOJA0cPepmXVIfv3VhKSraAvgjWRQ2FZjBiTNYhQASHJ1qomK+GcV/V4Cm8Nk4jaZ2GLLNZOwPwOoFY8+e7cgBXKSBAPdUy6NdPcBQOAfk3ysM15rIDmfuHvbzNaJdfexmcVIpgBe6rIRAQYQxEbubunuKuXpGsBwN9hNBtZB2Q2MpD6AMBQiEc5qQEM8NujdzGYkI0PbSkRiBWPND4ewac4pVN8A7gDEam0qVjaS3j5mc45+CYNCjKPX61XF1yYkvQJYkIwxZdUpBgLtsk4k3g8A9yS7WeqHtqCuyXw+XzU9UJXxZI/hFAKjfYgThRhD1gt6tIFctLnfFQMXJ/AD1gGdISqQy3gAAAAASUVORK5CYII=">
                            </div>
                        </div>
                    </div>
                    <div class="login-bar">
                    <v-touch 
                        class="login-btn"
                        tag="button"
                        @tap="register()"
                    >
                        注册</v-touch> 
                    </div>
                    <div class="link">
                    <span>注册即视您同意</span>
                    <a href="/account/clause">《健客服务条款》</a>
                    </div>
                </div>
            </section>
    </div> 
</template>

<script>
import axios from "axios"
export default {
        name:"register",
        data(){
            return {
                phone:"",
                pwd:"",
            }
        },
        methods:{
            register(){
                if(!(/^1[3456789]\d{9}$/.test(Number(this.phone)))){
                    alert("手机号格式错误")
                }else{
                    axios({
                    method:"get",
                    url:"http://localhost:3000/user?username="+this.phone,
                }).then((data)=>{
                    if(data.data[0]){
                        alert("用户名重复")
                    }else{
                        let info={
                            account:this.phone,
                            pwd:this.pwd
                         }
                        axios({
                            method:"post",
                            url:"http://localhost:3000/user",
                            data:{
                                username:this.phone,
                                pwd:this.pwd
                            }
                        })
                            alert("注册成功")
                            this.$router.push("/login")
                        }
                    })
                 }
            }
        }
}
</script>

<style scoped>
section{
    height:3.078rem;
}

section .login_wrap{
    padding:0 0.215rem;
    height:2.7rem;
}
c{
    height:1.02rem;
    display:flex;
    flex-direction:column;
}
section .login_wrap .login_box div{
    height:.5rem;
    border-bottom: 1px solid #efefef;
    font-size: 14px;    
}
section .login_wrap .login_box div input{
    height:100%;
    width:100%;
    padding-left:0.065rem;
}
section .login_wrap .login_box .pwd_item{
    position: relative;
}
section .login_wrap .login_box .pwd_item .pwd-switch{
    width:0.74rem;
    height:0.23rem;
    text-align:center;
    line-height:.23rem;
    color: #2ca3ff;
    background: #fff;
    font-size:12px;
    position: absolute;
    right:0;
    top:25%;
    border: 1px solid #2ca3ff;
}
section .login_wrap .login_box .pwd_item .pwd-switch img, section .login_wrap .login_box .pwd_item .pwd-switch2 img{
    width:100%;
    height:100%
}
section .login_wrap .login_box .pwd_item .pwd-switch2{
    width:0.215rem;
    height:0.215rem;
    position: absolute;
    right:0;
    top:25%;
    border-bottom:0;
}

section .login_wrap .login-bar{
    height:.34rem;
    margin-top:0.255rem;
    display:flex;
}
section .login_wrap .login-bar .login-btn{
    width: 100%;
    height: .32rem;
    line-height: .32rem;
    background-color: #95d1ff;
    border-radius: 2px;
    font-size: 14px;
    color: #e3f2ff;
}
section .login_wrap .link{
    font-size: 12px;
    margin-top:.13rem;
    color: #999;
}
section .login_wrap .link a{
    color: #2ca3ff;
}
</style>