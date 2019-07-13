<template>
  <div>
    <banner></banner>
    <question></question>
  </div>
</template>

<script>
import banner from '../../components/banner'
import question from '../../components/question'
export default {
  name: 'answer',
  components: {
    banner,
    question
  }
}
</script>

<style scoped>

#app {
  width: 100%;
}
</style>
