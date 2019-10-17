<template>
  <div class="index">
    <Header 
      isLogined="true" 
      :title="tabNames[tabIndex]"/>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!-- <CatalogPage /> -->
    </div>
    <Footer 
      v-on:switchTab="changeTab"/>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import MainContainer from './main'
  import CatalogPage from './tree'

  export default {
    components:{
      Header,
      Footer,
      MainContainer,
      CatalogPage
    },
    props:{},
    data(){
      return {
        tabNames : [ '玩Android', '体系', '公众号', '导航', '项目' ],
        tabIndex : 0
      }
    },
    watch:{},
    computed:{},
    methods:{
      changeTab(_tabIndex) {
        this.tabIndex = _tabIndex;
      }
    },
    created(){
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
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