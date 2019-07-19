<template>
    <div id='text'>
        <h1 class='welcome-header'>{{Header}}</h1>
        <p class='introduce'>{{ introduce }}</p>
        <a href="" class='begin' v-if='flag'>开始答题</a>
    </div>
</template>

<script>
export default {
    data(){
        return {
            flag:false,  // flag控制开始答题按钮，true为显示，false为隐藏
            Header:'前端组',
            introduce:'这里是前端组的介绍哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或',
        }
    },
    mounted(){
        this.axios.get('www.baidu.com').then((result) => {
            console.log(result);
        });
    },
}
</script>