<template>
  <div class="header">
    <div>
      <i class="icon" 
        v-bind:class="[ isLogined === 'true' ? 'icon-face' : 'icon-back' ]" />
    </div>
    <div class="title">{{ title }}</div>
    <div><i class="icon icon-search" /></div>
  </div>
</template>

<script>
  export default {
    components:{},
    props:{
      title: { type: String, default: '玩Android'},
      isLogined: { type: String, default: 'false' }
    },
    data(){
      return {
      }
    },
    watch:{},
    computed:{},
    methods:{},
    created(){},
    mounted(){}
  }
</script>

<style lang="less" scoped>
  .header {
    heigth: 40px;
    line-height: 40px;
    text-align: center;
    display: flex;
    padding: 0 10px 0 10px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .icon-back {
      background-image: url(./left.png);
    }
    .icon-face {
      background-image: url(./face.png);
    }
    .icon-search {
      background-image: url(./search.png);
    }
    .title {
      flex: 1;
      font-size: 18px;
    }
  }
</style>