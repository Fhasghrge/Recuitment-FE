<template>
  <div class="part2" id="part2">
    <div class="opion">
      <button id="act1" @click="x1" v-bind:class="[{ button1: flag }, { button2: hide }]">登录</button>
      <button id="act2" @click="x2" v-bind:class="[{ button2: flag }, { button1: hide }]">注册</button>
    </div>
    <div class="act" v-bind:style="flag1">
      <input class="input1" id="username" type="text" placeholder="账号|信息门户账号" />
      <input class="input1" id="password" type="password" placeholder="密码" />
    </div>
    <div class="hide" v-bind:style="flag2">
      <input class="input1" id="name" type="text" placeholder="真实姓名" />
      <input class="input1" id="schnum" type="text" placeholder="学号" />
      <input class="input1" id="tel" type="text" placeholder="手机号（联系方式）" />
      <input class="input1" id="pas" type="text" placeholder="密码" />
      <input class="input1" id="pas1" type="text" placeholder="重复密码" />
    </div>
    <div>
      <button class="button" v-text="text">确认登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      flag1: 'display:block',
      flag2: 'display:none',
      text: '确认登录',
      flag: true,
      hide: false
    }
  },
  methods: {
    x1: function () {
      this.flag1 = 'display:block'
      this.flag2 = 'display:none'
      this.text = '确认登录'
      this.flag = true
      this.hide = false
    },
    x2: function () {
      this.flag1 = 'display:none'
      this.flag2 = 'display:block'
      this.text = '注册'
      this.flag = false
      this.hide = true
    }
  }
}
</script>

<style>
@media (min-width: 751px) {
  .part2 {
    width: 30%;
    height: 65%;
    background-color: black;
    text-align: center;
    margin-left: -15%;
    min-width: 325px;
  }

  .opion {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;
    padding: 0;
    width: 80%;
    margin: 1.2rem auto;
  }

  .button1 {
    background-color: inherit;
    border: 0;
    color: #ffffff;
    font-size: 20px;
    border-bottom: solid 2px #cfcfcf;
  }

  .button2 {
    background-color: inherit;
    border: 0;
    color: rgba(255, 255, 255, 0.4);
    font-size: 20px;
  }

  .act {
    height: 45%;
    padding-top: 15%;
  }

  .hide {
    height: 45%;
    padding-bottom: 15%;
    display: none;
  }

  .input1 {
    height: 1rem;
    width: 80%;
    margin: 1rem auto;
    margin-bottom: 0;
    border: 1px;
    border-bottom: 1px solid rgb(171, 171, 171);
    background-color: inherit;
    font-size: 1rem;
    font-family: PingFangSC-Light;
    padding-bottom: 0.7rem;
    color: #ffffff;
    padding-left: 0.5rem;
  }

  .button {
    border: solid 3px rgba(255, 255, 255, 0.8);
    width: 80%;
    height: 2.5rem;
    font-family: PingFangSC-Regular;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    background-color: inherit;
    margin-top: 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 750px) {
  .part2 {
    width: 80%;
    height: 45%;
    background-color: black;
    text-align: center;
    margin: 0 auto;
    margin-top: 10%;
  }

  .opion {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;
    padding: 0;
    width: 80%;
    margin: 0 auto;
  }

  .button1 {
    background-color: inherit;
    border: 0;
    color: #ffffff;
    border-bottom: solid 2px #cfcfcf;
    font-size: 1rem;
  }

  .button2 {
    background-color: inherit;
    border: 0;
    color: rgba(255, 255, 255, 0.4);
    font-size: 1rem;
  }

  .ul1 {
    display: flex;
    justify-content: space-around;
    font-size: 0.8rem;
    padding: 0 0;
    width: 80%;
    margin: 5px auto;
  }

  .act {
    height: 50%;
    padding-top: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .hide {
    height: 50%;
    padding-bottom: 1.5rem;
    padding-top: 1rem;
    display: none;
    margin-bottom: 0.5rem;
  }

  .input1 {
    height: 0.7rem;
    width: 75%;
    margin: 0.6rem auto;
    margin-bottom: 0;
    border: 1px;
    border-bottom: 1px solid rgb(171, 171, 171);
    background-color: inherit;
    font-size: 0.8rem;
    font-family: PingFangSC-Light;
    padding-bottom: 0.6rem;
    color: #ffffff;
    padding-left: 0.2rem;
  }

  .button {
    border: solid 2px rgba(255, 255, 255, 0.8);
    width: 75%;
    height: 2rem;
    font-family: PingFangSC-Regular;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    background-color: inherit;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
}
</style>
