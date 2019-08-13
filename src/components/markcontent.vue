<template>
  <div class="kind">
    <div v-for="(item,index) in que"
         :key="index">
      <inp v-if="item.type === 3"
           :ID="item.ID"
           :answer="item.answer"></inp>
      <short v-if="item.type === 4"
             :ID="item.ID"
             :answer="item.answer"></short>
      <uploadque v-if="item.type === 5"
                 :ID="item.ID"
                 :answer="item.answer"></uploadque>
    </div>
  </div>
</template>

<script>
import inp from './sigleinp'
import short from './shortanswer'
import uploadque from './upload'
export default {
  name: 'ques',
  data () {
    return {
    }
  },
  props: {
    username: {
      type: String,
      default: ''
    },
    que: {
      type: Array,
      default: () => []
    }
  },
  components: {
    inp, short, uploadque
  }
}
</script>

<style scoped>
.headline {
  margin: 1rem auto 0.5rem auto;
}
.ipt {
  background-color: inherit;
  border: 0;
  border-bottom: solid 2px #4a4a4a;
  line-height: 2rem;
  color: #ffffff;
  font-size: 1rem;
  width: 50%;
  margin-left: 1rem;
}
.txt {
  background-color: inherit;
  color: #ffffff;
  border: solid 2px #4a4a4a;
  height: 5rem;
  font-size: 1rem;
  width: 80%;
  margin-left: 1rem;
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
</style>
