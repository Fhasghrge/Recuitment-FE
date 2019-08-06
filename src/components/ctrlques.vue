<template>
  <div class="kind">
    <div v-for="(item,index) in questions"
         :key="index">
      <radio v-if="item.type === 1"
             :options="item.options"
             :ID="item.ID"
             :title="item.title"
             :answer="item.answer"></radio>
      <che v-if="item.type === 2"
           :options="item.options"
           :ID="item.ID"
           :title="item.title"
           :answer="item.answer"></che>
      <inp v-if="item.type === 3"
           :ID="item.ID"
           :title="item.title"
           :answer="item.answer"></inp>
      <short v-if="item.type === 4"
             :ID="item.ID"
             :title="item.title"
             :answer="item.answer"></short>
      <uploadque v-if="item.type === 5"
                 :ID="item.ID"
                 :title="item.title"
                 :answer="item.answer"></uploadque>
    </div>
    <!-- <radio></radio>
    <che></che>
    <inp></inp>
    <short></short>
    <short></short>
    <short></short>
    <short></short>
    <short></short>
    <short></short>
    <uploadque></uploadque> -->
  </div>
</template>

<script>
import radio from './radio'
import che from './checkbox'
import inp from './sigleinp'
import short from './shortanswer'
import uploadque from './upload'
export default {
  name: 'ques',
  data () {
    var thisgroup = this.$route.query.groups
    return {
      group: thisgroup,
      all: [],
      questions: []
    }
  },
  components: {
    radio, che, inp, short, uploadque
  },
  created () {
    this.getques()
  },
  methods: {
    getques: function () {
      this.$axios({
        methods: 'post',
        url: '/user/exam/get'
      }).then((response) => {
        console.log(response)
        if (response.data.code === 0) {
          this.all = response.data.data
          for (let a = 0; a < this.all.length; a++) {
            if (this.all[a].groups === this.group || this.all[a].groups === 0) {
              this.questions.push(this.all[a])
            }
          }
          console.log(this.questions)
        }
      })
    }
  }
}
</script>

<style scoped>
.kind {
  position: relative;
  background-color: black;
  color: white;
  width: 78%;
  margin-left: 20%;
  padding: 2%;
}
.headline {
  margin: 1rem auto 0.5rem auto;
}
.rad {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}

.radio1 {
  display: none;
}

.radio2 {
  position: relative;
  background-color: rgba(25, 25, 25, 0.8);
  display: inline-block;
  font-size: 1rem;
  min-height: 2rem;
  padding: 0.5rem 1rem 0 1rem;
  width: 100%;
  flex-wrap: wrap;
}
input:checked + label {
  background-color: #3e3e3e;
}
.ipt {
  background-color: inherit;
  border: 0;
  border-bottom: solid 2px #4a4a4a;
  line-height: 2rem;
  color: #ffffff;
  font-size: 1rem;
}
.txt {
  background-color: inherit;
  color: #ffffff;
  border: solid 2px #4a4a4a;
  height: 5rem;
  font-size: 1rem;
}
.load {
  margin-left: 1rem;
  width: 25px;
  height: 20px;
}

.upl {
  margin: 0 5px;
}
a {
  color: #d9d9d9;
}
.eg {
  margin-left: 20px;
}
.loading {
  height: 7px;
  background-color: #919191;
  width: 35%;
  margin: 0 0;
  border-radius: 3.5px;
}
.single {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0.5rem auto;
}
.in {
  background-color: #d9d9d9;
  height: 7px;
  border-radius: 3.5px;
}
.done {
  height: 1rem;
}
.done > img {
  width: 1rem;
  height: 1rem;
}
@media only screen and (min-width: 751px) {
  .ipt {
    width: 50%;
    margin-left: 1rem;
  }
  .txt {
    width: 80%;
    margin-left: 1rem;
  }
  .eg {
    margin-left: 20px;
  }
  .optall {
    width: 15%;
    text-align: center;
  }
  .docu {
    width: 50%;
    border: solid 2px #4a4a4a;
    margin: 1rem auto 1rem 1rem;
  }
  .sub {
    position: fixed;
    right: 0;
    top: 23vh;
    color: #ffffff;
    text-align: center;
    background-color: rgba(22, 22, 22, 0.91);
    height: 37%;
    width: 13%;
  }
  .ddl {
    margin: 2rem auto 3rem auto;
  }
  .lasttime {
    display: inline-block;
    margin-top: 0.4rem;
  }
  .btn1 {
    border: solid 2px #ffffff;
    background-color: inherit;
    font-size: 1rem;
    color: #ffffff;
    width: 80%;
    height: 40px;
  }
  .autosave {
    color: #579eda;
    font-size: 1rem;
    font-family: PingFangSC-Regular;
    margin-top: 2rem;
    display: inline-block;
  }
}

@media only screen and (max-width: 750px) {
  .rad {
    flex-wrap: wrap;
  }
  .optall {
    width: 40%;
    text-align: center;
  }
  .radio2 {
    margin: 10px;
    box-sizing: border-box;
    padding-top: 4px;
    margin-left: 0;
  }
  .ipt {
    width: 100%;
    margin: 0 auto;
  }
  .txt {
    width: 100%;
    margin: 0 auto;
  }
  .docu {
    width: 100%;
    border: solid 2px #4a4a4a;
    margin: 1rem auto 1rem 0;
  }
  .sub {
    text-align: center;
  }
  .ddl {
    display: none;
  }
  .autosave {
    display: none;
  }
  .btn1 {
    color: #ffffff;
    border: solid 1px rgba(255, 255, 255, 0.8);
    background-color: inherit;
    font-size: 1rem;
    width: 36%;
    height: 35px;
  }
  select {
    -webkit-appearance: none; /* google */
    -moz-appearance: none; /* firefox */
    appearance: none; /* IE */
    width: 80px;
    font-size: 0.9rem;
    color: white;
    text-align: center;
    background-color: black;
  }
  .ctrlBox {
    position: relative;
    color: blue;
    width: 30%;
    margin-left: 50%;
    display: flex;
  }
}
</style>
