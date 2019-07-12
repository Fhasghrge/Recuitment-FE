<template>
    <div id='container'>
        <router-view></router-view>
        <div id='text'>
            <p class='tips' v-if="flag">距离开始答题还有：</p>
            <p class='date' v-if="flag">{{ date }}</p>
            <p class='tips' v-if="!flag">距离答题结束还有：</p>
            <p class='date' v-if="!flag">{{ date }}</p>
        </div>
        <div id='group' v-if='Itemflag'>
            <img src="../img/icons/产品.svg"><router-link to="/main/product">产品</router-link>
            <img src="../img/icons-new/前端开发@3x.svg"><router-link to="/main/FE">前端</router-link>
            <img src="../img/icons/后台@1x.svg"><router-link to="/main/BE">后台</router-link>
            <img src="../img/icons/移动.svg"><router-link to="/main/mobile">移动</router-link>
            <img src="../img/icons/设计.svg"><router-link to="/main/design">设计</router-link>
            <img src="../img/icons-new/DevOps@3x.svg"><router-link to="/main/DevOps">DevOps</router-link>
        </div>
        <a href="" id='notes' ref="notes" @click.prevent="notesFlag=true">答题须知</a>
        <div id='noteText' v-if="notesFlag" ref="noteText">
            <img src="../img/close.png" class="close" @click="notesFlag=false">
            <h2>答题须知</h2>
            <p>这里是答题须知的内容哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或</p>
            <a href="" v-if='!flag'>开始答题</a>
        </div>
    </div>
</template>

<script>
    import { setInterval } from 'timers';
    export default{
        data(){
            return{
                date:'',
                ddlStr:'2019/09/01',
                flag:true,      // flag 控制 显示倒计时 还是 显示开始答题按钮,true为未开始，false为进行中
                notesFlag:false,
                Itemflag:true,
            }
        },
        methods:{
            Djs_time(){    // 拼接出日期
                setInterval(()=>{
                    var ddl = new Date(this.ddlStr);
                    var presentTime = new Date();
                    var rightTime = ddl - presentTime;
                    var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
                    var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24);
                    var mm = Math.floor((rightTime / 1000 / 60) % 60);
                    var ss = Math.floor((rightTime / 1000) % 60);
                    this.date = dd+'d '+hh+':'+mm+':'+ss;
                },1000);
            },
            mobileStyle(){
                if(this.$route.path != '/main'){
                    if(window.screen.height >= 520 && window.screen.width <= 1080){
                        this.Itemflag = false;
                    }
                }
                else{
                    this.Itemflag = true;
                }
            }
        },
        mounted(){
            this.Djs_time();
            this.mobileStyle();
            // console.log(this.$route.path)
        },
        watch:{
            "$route.path":function(newVal){
                this.mobileStyle();
            }
        }
    }
</script>