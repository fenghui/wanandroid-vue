<template>
  <div class="main-page">
    <div class="index">
      <Header 
        isLogined="true" 
        :title="tabName"/>
      <div class="container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <Footer />
    </div>
    <LeftMenu v-show="leftMenuShow" />
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import LeftMenu from '../components/LeftMenu'
  import MainContainer from './main'
  import { mapGetters, mapState } from 'vuex' 

  export default {
    components:{
      Header,
      Footer,
      MainContainer,
      LeftMenu
    },
    props:{},
    data(){
      return {}
    },
    watch:{},
    computed:{
      ...mapGetters('global', [
        'tabName'
      ]),
      ...mapState('global', [
        'leftMenuShow'
      ])
    },
    methods:{
    },
    created(){
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
  .main-page {
    width: 100%;
    height: 100%;
  }
  .index {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .container {
    flex: 1;
    overflow-y: scroll;
    background-color: #eeecec;
  }
</style>