<template>
    <div>
        <img src="../img/bigLOGO.png" id="loginLogo">
        <h3 id="BEintroduce">2019年秋季招新答题系统后台界面</h3>
        <div id='managerLogin'>
            <h2>管理员登录</h2>
            <span>账号</span><input type="text"><hr>
            <span>密码</span><input type="password"><hr>
            <a class="confirmLogin" href='/'>确认登录</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #loginLogo{
        margin-top: 6%;
        margin-left: 35%;
	    max-width: 100%;
    }
    #BEintroduce{
        margin-top: -0.05%;
        margin-left: 33%;
	    width: 100%;
	    font-family: PingFangSC-Regular;
	    font-size: 2rem;
	    font-weight: normal;
	    font-stretch: normal;
	    letter-spacing: 2px;
	    color: #ffffff;
        opacity: 0.8;
    }
    #managerLogin{
        padding-top: 1%;
        width: 30%;
        height: 350px;
        background-color: rgba(1, 1, 1, 0.3);
        margin-left: 35%;
        text-align: center;
    }
    #managerLogin h2{
	    width: 100%;
	    font-family: PingFangSC-Regular;
	    font-size: 30px;
	    font-weight: normal;
	    font-stretch: normal;
	    letter-spacing: 0px;
        color: #ffffff;
    }
    #managerLogin input{
        font-size:1.5rem;
        font-family: PingFangSC-Light;
        color: #b3b3b3;
        background:none;  
	    outline:none;  
        border:0px;
        margin-left: 5%;
    }
    #managerLogin hr{
        margin-top: 3%;
        margin-bottom: 10%;
        width: 80%;
    }
    #managerLogin span{
	    width: 100%;
	    font-family: PingFangSC-Light;
	    font-size:1.5rem;
	    font-weight: normal;
	    font-stretch: normal;
	    letter-spacing: 0px;
	    color: #b3b3b3;
    }
    #managerLogin .confirmLogin{
        font-size:1.5rem;
        text-decoration: none;
	    width: 120%;
        height: 100px;
        margin-top: 30%;
        margin-right: 3%;
        color: white;
        border: solid 3px #ffffff;
        padding-left: 25%;
        padding-right: 25%;
        padding-top: 1%;
        padding-bottom: 1%;
    }
</style>

