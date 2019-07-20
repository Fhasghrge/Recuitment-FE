<template>
  <div class="radio">
    <p class="headline">{{title}}</p>
    <div class="rad">
      <div v-for="(opt,indexr) in options"
           :key="indexr"
           class="optall">
        <input type="radio"
               name="radio"
               class="radio1"
               :id="radio(indexr)" />
        <label :for="radio(indexr)"
               class="radio2">{{options[indexr]}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    options: {
      type: Array,
      default: () => ['帅', '我就是帅帅帅帅', '好帅', '帅爆了']
    },
    ID: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: '有多帅'
    }
  },
  methods: {
    radio: function (index) {
      return 'radio' + index
    }
  }
}
</script>

<style>
.radio {
  margin: 0 auto;
}
@media only screen and (min-width: 751px) {
}
@media only screen and (max-width: 750px) {
}
</style>
