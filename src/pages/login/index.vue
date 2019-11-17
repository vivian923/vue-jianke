<template>
        <div class="page">
            <Header title="用户登录" icon/>
            <section>
                <div class="nav">
                    <div class="phone">手机号快捷登录</div>
                    <div class="admin">账号密码登录</div>
                </div>
                <div class="login_wrap">
                    <div class="login_box">
                        <div class="account_item">
                            <input type="text" placeholder="请输入手机号/邮箱" ref="phone">
                        </div>
                        <div class="pwd_item">
                            <input type="password" placeholder="请输入您的密码" ref="pwd">
                            <div class="pwd-switch">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABfElEQVRYR+2V0VECQRBEezIwAyECIYQmATEDiEAyECMAIxAz0ARojEDMwAwkg7GGWqgrvIMFqcKPnd+9ne5607NnuHDZhfVRDBQChUAhUAgUAv+PgKQRgBuSw3P/KSWNAbRIDja9fxGQ1HL3pZn1SS7OZUJSB8AHgC7JZaOBOJA0cPepmXVIfv3VhKSraAvgjWRQ2FZjBiTNYhQASHJ1qomK+GcV/V4Cm8Nk4jaZ2GLLNZOwPwOoFY8+e7cgBXKSBAPdUy6NdPcBQOAfk3ysM15rIDmfuHvbzNaJdfexmcVIpgBe6rIRAQYQxEbubunuKuXpGsBwN9hNBtZB2Q2MpD6AMBQiEc5qQEM8NujdzGYkI0PbSkRiBWPND4ewac4pVN8A7gDEam0qVjaS3j5mc45+CYNCjKPX61XF1yYkvQJYkIwxZdUpBgLtsk4k3g8A9yS7WeqHtqCuyXw+XzU9UJXxZI/hFAKjfYgThRhD1gt6tIFctLnfFQMXJ/AD1gGdISqQy3gAAAAASUVORK5CYII=">
                            </div>
                        </div>
                    </div>
                    <div class="login-bar">
                    <v-touch
                    class="login-btn"
                    tag="button"
                    @tap="login()"
                    >
                    登录
                    </v-touch> 
                    </div>
                    <div class="link">
                        <a>忘记密码</a>
                        <router-link
                            tag="a"
                            to="/register"
                        >
                            注册
                        </router-link>
                    </div>
                </div>
            </section> 
        </div> 

</template>

<script>
import axios from "axios"
import Cookie from "vue-cookies"

export default {
    name:'login',
    methods:{
        login(){
                axios({
                    method:"get",
                    url:"http://localhost:3000/user?username="+this.$refs.phone.value
                }).then((data)=>{
                    if(data.data[0].username==this.$refs.phone.value && data.data[0].pwd==this.$refs.pwd.value){
                        Cookie.set("token",this.$refs.phone.value,"20min")
                        let info={
                            name:this.$refs.phone.value,
                            pwd:this.$refs.pwd.value
                        }    
                        this.$store.dispatch("account/handleUser",info);
                        alert("登录成功")
                        this.$refs.phone.value="";
                        this.$refs.pwd.value="";
                        let path=this.$route.params.to||"/home";
                        this.$router.push(path)
                    }else{
                        alert("登录失败")
                    }
                })
                
        }
    }
}
</script>

<style scoped>
section{
    height:3.078rem;
}
section .nav{
    display:flex;
    width:100%;
    height:0.368rem;
    padding:0 0.215rem;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
}
section .nav div{
    flex:1;
    font-size:14px;
    text-align:center;
    line-height:0.368rem;
    position: relative;
}
section .nav .admin::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    border-bottom: 2px solid #2ca3ff;
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
    width:0.215rem;
    height:0.215rem;
    position: absolute;
    right:0;
    top:25%;
    border-bottom:0;
}
section .login_wrap .login_box .pwd_item .pwd-switch img{
    width:100%;
    height:100%
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
    background-color: skyblue;
    border-radius: 2px;
    font-size: 14px;
    color: #fff;
}
section .login_wrap .link{
    font-size:14px;
    margin-top:.13rem;
    display:flex;
    justify-content:space-between;
}
section .login_wrap .link a{
    color: #2ca3ff;
}

</style>