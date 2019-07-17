<template>
  <div class="wrapper2">
    <div class="mainshow2">
      <div class="btnbar"><button class="return2"
                @click="goback">返回</button><button class="download2">下载附件</button></div>
      <div class="table2">
        <table>
          <tr>
            <th class="name">姓名</th>
            <th class="schnum">学号</th>
            <th class="sch">学院</th>
            <th class="timeup">最近提交时间</th>
            <th class="score">分数</th>
            <th class="peo">阅卷人</th>
            <th class="opera">操作</th>
          </tr>
          <tr>
            <td>王可可</td>
            <td>2018091608000</td>
            <td>通信工程</td>
            <td>06/23 21:28</td>
            <td>88</td>
            <td>范老板</td>
            <td><button>阅卷</button></td>
          </tr>
          <tr>
            <td>李二狗</td>
            <td>2018091608000</td>
            <td>可达鸭研究所</td>
            <td>06/23 21:28</td>
            <td>97</td>
            <td>范老板</td>
            <td><button>阅卷</button></td>
          </tr>
          <tr>
            <td>李二狗</td>
            <td>2018091608000</td>
            <td>可达鸭研究所</td>
            <td>06/23 21:28</td>
            <td>97</td>
            <td>范老板</td>
            <td><button>阅卷</button></td>
          </tr>
          <tr>
            <td>李二狗</td>
            <td>2018091608000</td>
            <td>可达鸭研究所</td>
            <td>06/23 21:28</td>
            <td>97</td>
            <td>范老板</td>
            <td><button>阅卷</button></td>
          </tr>

        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
@media (min-width: 751px) {
  .wrapper2 {
    width: calc(100vw - 335px);
    min-height: calc(100vh - 140px);
    margin: 20px 55px 0 295px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .mainshow2 {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 100px;
  }
  .btnbar {
    margin: 42px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .return2 {
    width: 79px;
    height: 36px;
    background-color: inherit;
    border: solid 2px #ffffff;
    color: #ffffff;
    font-size: 1rem;
  }
  .download2 {
    width: 120px;
    height: 48px;
    border: solid 2px #ffffff;
    background-color: inherit;
    color: #ffffff;
    font-size: 1rem;
  }
  .table2 {
    margin: 0 auto;
    overflow: scroll;
  }
  table {
    margin: 0 auto;
  }
  th {
    background-color: #8b8b8b;
    box-shadow: inset 0px 1px 3px 0px rgba(66, 60, 60, 0.5);
    border: solid 1px #000000;
    height: 64px;
    padding: 0 45px;
    text-align: center;
  }
  td {
    height: 65px;
    background-color: #d8d8d8;
    text-align: center;
  }
  td > button {
    border-radius: 12.5px;
    border: solid 1px #979797;
    width: 64px;
    height: 33px;
  }
}
</style>
