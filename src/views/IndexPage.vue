<template>
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
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import MainContainer from './main'
  import { mapGetters } from 'vuex' 

  export default {
    components:{
      Header,
      Footer,
      MainContainer
    },
    props:{},
    data(){
      return {}
    },
    watch:{},
    computed:{
      ...mapGetters('global', [
        'tabName'
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