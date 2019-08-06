<template>
  <div class="bar">
    <div class="left">
      <img src="../assets/LOGO1.png"
           @click="goindex" />
    </div>
    <div class="exit">
      <img src="../assets/route.png" />
    </div>
    <div class="middle">
      <h2>{{thisgroup + '组答题'}}</h2>
    </div>
    <user @usershow='usertans'></user>
    <img src="../assets/icon.svg"
         class="icon1"
         @click="mobtans" />
    <mobbar></mobbar>
  </div>
</template>

<script>
import user from './user'
import mobbar from './pribar'
import bus from './bus.js'
export default {
  name: 'banner',
  data () {
    return {
      bannerflag: false,
      mobflag: false,
      thisgroup: '',
      grouplist: [{ groupnum: 0, groupname: '无组别' }, { groupnum: 1, groupname: '产品' }, { groupnum: 2, groupname: '设计' }, { groupnum: 3, groupname: '安卓' }, { groupnum: 4, groupname: 'IOS' }, { groupnum: 5, groupname: '前端' }, { groupnum: 6, groupname: '后台' }, { groupnum: 7, groupname: 'Devops' }]
    }
  },
  components: {
    user, mobbar
  },
  props: {
    group: {
      type: Number,
      default: 0
    }
  },
  methods: {
    mobtans: function () {
      this.mobflag = !this.mobflag
      this.$emit('mainshow', this.mobflag)
    },
    usertans (userflag) {
      this.bannerflag = userflag
      this.$emit('mainshow', this.bannerflag)
    },
    goindex: function () {
      this.$router.push({ path: 'main' })
    }
  },
  mounted () {
    bus.$on('listen', (show) => {
      this.mobflag = show
    })
    for (let a = 0; a < this.grouplist.length; a++) {
      if (this.group === this.grouplist[a].groupnum) {
        this.thisgroup = this.grouplist[a].groupname
        return
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 751px) {
  .bar {
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0 5%;
    padding-top: 2%;
    color: #ffffff;
  }

  .icon1 {
    display: none;
  }
  .exit {
    display: none;
  }
  .left {
    width: 160px;
  }
  .left > img {
    width: 160px;
  }
  .left > img:hover {
    cursor: pointer;
  }
  .middle {
    font-size: 1.5rem;
    text-align: center;
    height: 5rem;
  }

  .middle > h2 {
    margin: 0 auto;
    margin-top: 2%;
  }
}

@media only screen and (max-width: 750px) {
  .left {
    display: none;
  }

  .exit {
    width: 40px;
    position: relative;
  }

  .exit > img {
    width: 13px;
    position: absolute;
    right: 0;
    bottom: 9px;
  }
  .bar {
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
    padding-top: 2%;
    color: #ffffff;
  }

  .middle {
    font-size: 1rem;
    height: 1rem;
    margin: 0 auto;
  }

  .middle > h2 {
    margin: 0 auto;
    margin-top: 5px;
  }

  .icon1 {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }

  .exit {
    transform-origin: center center;
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transition: transform 0.2s;
    -moz-transition: -moz-transform 0.2s;
    -moz-transition: -moz-transform 0.2s;
    -o-transition: -o-transform 0.2s;
    -ms-transition: -ms-transform 0.2s;
  }
}
</style>
