<template>
  <div class="che">
    <p class="headline">{{title}}</p>
    <div class="rad">
      <div v-for="(opt,indexc) in options"
           :key="indexc"
           class="optall">
        <input type="checkbox"
               name="radio"
               class="radio1"
               :id="che(indexc)" />
        <label :for="che(indexc)"
               class="radio2">{{options[indexc]}}</label>
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
      default: () => ['帅', '我就是栓', '好帅', '帅爆了']
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
    che: function (index) {
      return 'che' + index
    }
  }
}
</script>

<style>
@media only screen and (min-width: 751px) {
}
@media only screen and (max-width: 750px) {
}
</style>
