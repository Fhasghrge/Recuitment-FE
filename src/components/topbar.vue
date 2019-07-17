<template>
  <div class="topbar">
    <span class="leftpart">前端</span>
    <user></user>
  </div>
</template>
<script>
import user from './user'
export default {
  components: {
    user
  }
}
</script>

<style>
@media (min-width: 751px) {
  .topbar {
    background-color: rgba(0, 0, 0, 0.3);
    height: 120px;
    width: calc(100vw - 265px);
    margin-left: 265px;
    padding: 54px 40px 24px 40px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }
}
</style>
