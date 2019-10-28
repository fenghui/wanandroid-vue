<template>
  <div class="header">
    <div
      @click="switchLeftMenu">
      <i class="icon" 
        v-bind:class="[ isLogined === 'true' ? 'icon-face' : 'icon-back' ]" />
    </div>
    <div class="title">{{ title }}</div>
    <div @click="search"><i class="icon icon-search" /></div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
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
    computed:{
      ...mapState('global', ['leftMenuShow', 'tabIndex'])
    },
    methods:{
      // userInfo() {

      // },
      search() {
        alert(this.leftMenuShow + "," + this.tabIndex);
        //alert('开发中...');
      },
      ...mapActions('global', ['switchLeftMenu'])
    },
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