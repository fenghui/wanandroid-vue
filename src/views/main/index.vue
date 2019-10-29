<template>
  <div class="main-container">
    <Banner class="banner" />
    <Container class="list" />
  </div>
</template>

<script>
  import Banner from './components/Banner'
  import Container from './components/Container'

  export default {
    components:{
      Banner,
      Container
    },
    props:{},
    data(){
      return {
      }
    },
    watch:{},
    computed:{},
    methods:{
    },
    created(){
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
  .main-container {
    height: 100%;
    background-color: #eeecec;
    overflow-y: scroll;
    .list {
      padding: 0 10px;
    }
  }
</style>