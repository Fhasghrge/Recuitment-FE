<template>
    <div id='main'>
        <div id='header' v-if="headFlag">
            <img src="./img/小箭头-左.png" class="arrow_left" @click="returnToMain" v-if='arrowFlag'>
            <img src="./img/LOGO.png" class='logo' @click="returnToMain">                
            <img src="./img/小箭头.png" class="arrow_right" :class="[{ arrowhead:1},{ rotate1:flag},{ rotate2:(!flag)}]" @click="flag=!flag">
            <img src="./img/头像.png" class='portrait' @click="priFlag=true">
        </div>
        <transition name="draw">
            <div class="box" v-show="flag">
            <button class="btn" v-show="flag" @click="priFlag=true;flag=!flag;">个人信息</button>
            <button class="btn" v-show="flag">退出登陆</button>
            </div>
        </transition>

        <router-view></router-view>

        <div id='private' v-if='priFlag' >
            <img src="./img/头像.png" id="priHead"><span id="priName">{{ privateName }}</span>
            <img src="./img/close.png" class="close" @click="priFlag=false">
            <div id='priText'>
                <div class="priBox priLeft"><p class='priVal'>真实姓名</p><input class="priMsg" value="priName" v-model="priName"><hr class="line"></div>
                <div class="priBox priRight"><p class='priVal'>手机号</p><input class="priMsg" value="priPhone" v-model='priPhone'><hr class="line"></div>                
                <div class="priBox priLeft"><p class='priVal'>信息门户账号</p><input class="priMsg" value="priNumber" v-model="priNumber"><hr class="line"></div>
                <div class="priBox priRight"><p class='priVal'>旧密码</p><input class="priMsg" v-model="oldPassword" type="password"><hr class="line"></div>
                <div class="priBox priLeft"><p class='priVal'>学院</p><input class="priMsg" value="priSchool" v-model="priSchool"><hr class="line"></div>
                <div class="priBox priRight"><p class='priVal'>新密码</p><input class="priMsg" v-model="newPassword" type="password"><hr class="line"></div>
                <div class="priBox priLeft"><p class='priVal'>QQ号</p><input class="priMsg" value="priQQ" v-model="priQQ"><hr class="line"></div>
                <div class="priBox priRight"><p class='priVal'>重复密码</p><input class="priMsg" v-model="rePassword" type="password"><hr class="line"></div>
            </div>
            <a class='confirm' @click='priFlag=false'>确认</a>
        </div>
    </div>
</template>

<script>
export default {
    name:"banner",
    data(){
        return {
            privateName:'Olina',
            headFlag:true,
            flag: false,    // 控制个人信息小框框的显隐
            arrowFlag:false,
            priFlag:false,
            priName:'黄老板',
            priPhone:'110',
            priNumber:'201601120000',
            oldPassword:'',
            newPassword:'',
            priSchool:'霍格沃兹学院',
            priQQ:'123456789',
            rePassword:'',
        }
    },
    methods:{
        returnToMain(){
            var path = this.$route.path.match(/^\/[^\/]*/)[0]
            this.$router.push(path);
        },
        arrowStyle(){
            if(this.$route.path != '/main'){
                if(window.screen.height >= 520 && window.screen.width <= 1080){
                    this.arrowFlag = true;
                }
            }
            else{
                this.arrowFlag = false;
            }
        },
        showHead(){
            if(this.$route.path == '/login' || this.$route.path =='/managerlogin'){
                this.headFlag = false;
            }
            else{
                this.headFlag = true;
            }
        }
    },
    mounted(){
        this.arrowStyle();
        this.showHead();
    },
    watch:{
        "$route.path":function(newVal){
            this.arrowStyle();
            this.showHead();
        }
    }
}
</script>

<style>
</style>
