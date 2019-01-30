<template>
    <div>
     <div class="title">金燕子酒店</div>
    <div class="logo"></div>
    <p class="Account_number">
        <input type="text" placeholder="请输入账号">
    </p>
    <p class="Password">
        <input type="text" placeholder="请输入密码">
    </p>
    <div class="signIn" @click="clickLogin">登录</div>
    <div class="bottomimg"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        clickLogin(){
            this.$router.push({
                name:"WaiterHomePage"
            })
        }
    }

}
</script>

<style type="texe/less" scoped lang="less">
@r:30rem;
.title{
    text-align: center;
    padding:20/@r 0;
}
.logo{
    width:750/@r;
    height:310/@r;
    background:url("../assets/img/jyzlogo_02.png")no-repeat;
    background-size:100% 100%;
}
p{
    width:600/@r;
    height:100/@r;
    border:2/@r solid gray;
    margin:100/@r auto;
    border-radius:50/@r;
}
p input{
    width:500/@r;
    height:91/@r;
    margin:3/@r 0 0 40/@r;
    border:none;
}
.signIn{
    width:600/@r;
    height:100/@r;
    background:#4c63ec;
    border-radius:50/@r;
    text-align: center;
    line-height:100/@r;
    color:#fff;
    font-size:30/@r;
    margin:0 auto;
}
.bottomimg{
    width:750/@r;
    height:156/@r;
    background:url("../assets/img/bottomimg_02.png")no-repeat;
    background-size:100% 100%;
    margin-top:200/@r;
}
</style>
