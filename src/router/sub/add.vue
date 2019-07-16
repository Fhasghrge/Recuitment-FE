<template>
    <div>
        <div id='addHead'><h3>{{groupName}}</h3><span>/招新题目</span></div>
        <div id='motify'>
            <a href="./#/manager" id="return">返回</a>
            <textarea name="" id="quesDescribe" cols="30" rows="5" ref="textarea"></textarea>
            <span id='typeTips'>题目类型</span><select name="questionType" id="questionType">
                <option value="单选">单选</option>
                <option value="多选">多选</option>
                <option value="填空">填空</option>
                <option value="简答">简答</option>
                <option value="上传文件">上传文件</option>
            </select>
            <label><input type="checkbox" value=""/>必答</label>
            <div id='optionHead'>
                <p class="optionHead">选项文字</p>
                <p class="permit optionHead">允许填空</p>
                <p class="upDown optionHead">上移下移</p>
            </div>
            <ul v-for="(item,index) in optionList" :key="index" id='optionText'>
                <li :class="item.name">
                <input type="text" :value="item.text">
                <img src="../../img/添加icon.png" class="addImg">
                <img src="../../img/减少icon.png" class="delImg">
                <input type="checkbox" id='checkPermit'>
                <img src="../../img/上移icon.png" class="upImg">
                <img src="../../img/下移icon.png" class="downImg">
                </li>
            </ul>
            <button id="addBtn" @click="addOption">添加选项</button>
            <span id='confirmMsg'>{{confirmMsg}}</span><button id="confirmBtn">保存修改</button>
        </div>
    </div>
</template>

<script>
import { stringify } from 'querystring';
export default {
    data(){
        return {
            groupName:'设计组',
            optionList:[
                {text:"选项1",id:1,name:"option1"},
            ],
            confirmMsg:'保存失败 请检查网络'
        }
    },
    methods:{
        addOption(){
            let len = this.optionList.length;
            if(len>4){
                alert('最多只能四个选项');
                return;
            }
            let id = len++;
            let option = {
                text:"选项"+id.toString(),
                id:id,
                name:"option"+id.toString()
            }
            this.optionList.push(option);
        }
    },
    mounted(){
        this.$refs.textarea.value = '请输入题目描述';
    }
}
</script>

<style scoped>
    #motify{
        position: relative;
        margin-left: 20%;
        margin-top: 2%;
        width: 60%;
        height: 600px;
        background: black;
    }
    #addHead{
        display: flex;  
        margin-left: 25%;
    }
    #addHead h3{
        margin-top: 5%;
	    font-family: PingFangSC-Regular;
	    font-size: 1.4rem;
	    font-weight: normal;
	    font-stretch: normal;
	    letter-spacing: 0px;
	    color: #e9e9e9;
    }
    #addHead span{
        margin-top: 4.5%;
	    font-family: PingFangSC-Regular;
	    font-size: 1.8rem;
	    font-weight: normal;
	    letter-spacing: 0px;
	    color: #e9e9e9;
    }
    #motify #return{
        position: absolute;
        margin-top: 3%;
        margin-left: 3%;
        padding: 0.5%;
        padding-left: 2%;
        padding-right: 2%;
        color: #e9e9e9;
        font-size: 1rem;
        background: black;
        border: 1px white solid;
    }
    #motify #return:hover{
        cursor: pointer;
    }
    #motify #quesDescribe{
        position: absolute;
        padding-left: 2%;
        padding-top: 2%;
        margin-top: 10%;
        margin-left: 13%;
        width: 70%;
        color: #e9e9e9;
        font-size: 1.3rem;
    }
    #motify #questionType{
        width: 80px;
        font-size: 0.9rem;
        color: white;
        text-align: center;
    }
    #motify select{
        position: absolute;
        margin-top: 26.3%;
        margin-left: 24%;
        background: black;
        color: white;
    }
    #motify #typeTips{
        position: absolute;
        margin-top: 26%;
        margin-left: 13%;
        color: white;
    }
    #motify label{
        position: absolute;
        margin-top: 26.4%;
        margin-left: 38%;
        color:white;
    }
    #optionHead{
        position: absolute;
        color: white;
        display: flex;
        margin-left: 14%;
        width: 70%;
        height: 6%;
        border: 1.5px solid white;
        margin-top: 32%;
        padding-left: 1%;
    }
    #optionHead .optionHead{
        margin-top: 1%;
    }
    #optionHead .permit{
        margin-left: 40%;
    }
    #optionHead .upDown{
        margin-left: 20%;
    }
    #optionText{
        margin-left: 10%;
        margin-top: 39%;
        position: absolute;
    }
    #optionText input{
        position: relative;
        color: #e9e9e9;
        background: black;
        border: 1.5px white solid;
        width: 100%;
        padding-left: 3%;
        padding-top: 3%;
        padding-bottom: 3%;
        font-size: 1rem;
    }
    #optionText .addImg,.delImg{
        position: absolute;
        margin-left: 95%;
        margin-top: -12%;
    }
    #optionText .delImg{
        margin-left: 110%;
    }
    #optionText #checkPermit{
        position: absolute;
        width: 20%;
        margin-top: -9%;
        margin-left: 140%;
    }
    #optionText .upImg,.downImg{
        position: absolute;
        margin-left: 210%;
        margin-top: -12%;
    }
    #optionText .downImg{
        margin-left: 230%;
    }
    #optionText .option2{
        margin-top: 20%;
    }
    .option3{
        margin-top: 40%;
    }
    .option4{
        margin-top: 60%;
    }
    .option5{
        margin-top: 80%;
    }
    .option6{
        margin-top: 100%;
    }
    #addBtn,#confirmBtn{
        position: absolute;
        margin-top: 58%;
        color: white;
        background: black;
        border: 1.5px solid white;
        border-radius: 5px;
        font-size: 1rem;
        padding: 0.8%;
        margin-left: 15%;
    }
    #confirmMsg{
        position: absolute;
        margin-top: 58%;
        color:red;
        font-size: 1rem;
        padding: 0.8%;
        margin-left: 60%;
    }
    #confirmBtn{
        width: 12%;
        margin-left: 80%;
        border: 0.1px solid white;
        background-color: #10619a
    }
</style>