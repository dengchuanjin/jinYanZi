<template>
    <div>
        <div class="title">
            <span></span>
            <p>
                <i></i>
                <input type="text">
            </p>
            <i></i>
        </div>
        <div class="content">
            <p class="Guest">
                <i></i>
                <span>客房服务</span>
            </p>
            <p class="Cash">
                <i></i>
                <span>收银台服务</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style type="texe/less" scoped lang="less">
@r:30rem;
.title{
    width:750/@r;
    height:88/@r;
    background:#4c63ec;
}
.title span{
    display:block;
    width:85/@r;
    height:88/@r;
    background:url("../../assets/waiter/leftIcon.png")no-repeat;
    background-size:100% 100%;
    float:left;
    margin-right:10/@r;
}
.title p{
    width:548/@r;
    height:60/@r;
    background:#fff;
    border-radius:50/@r;
    float:left;
    margin-top:15/@r;
}
.title > i{
    width:85/@r;
    height:88/@r;
    background:url("../../assets/waiter/rightIcon.png")no-repeat;
    background-size:100% 100%;
    float:right;
    margin-right:15/@r;
}
.title p i{
    width:35/@r;
    height:58/@r;
    background:url("../../assets/waiter/centerIcon.png")no-repeat;
    background-size:100% 100%;
    float:left;
    margin-left:28/@r;
}
.title p input{
    float:left;
    width:450/@r;
    height:60/@r;
    border:none;
}
.content{
    width:750/@r;
    height:1215/@r;
    background:#e2e2e2;
    padding-top:25/@r;
}
.content p{
    width:365/@r;
    height:385/@r;
    background:#fff;
    float: left;
}
.content p i{
    display:block;
    width:189/@r;
    height:189/@r;
    background:red;
    margin:75/@r 0 0 89/@r;
    
}
.content p span{
    width:365/@r;
    height:50/@r;
    text-align: center;
    display:block;
    line-height:60/@r;
    font-size:35/@r;
    color:#666666;
}
.content .Guest{
    margin-right:20/@r;
}
.content .Guest i{
    background:url("../../assets/waiter/Guest.png")no-repeat;
    background-size:100% 100%;
}
.content .Cash i{
    background:url("../../assets/waiter/Cash.png")no-repeat;
    background-size:100% 100%;
}
</style>
