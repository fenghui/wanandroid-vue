<template>
  <div class="container">
    <Banner />
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

  .container {
    background-color: #eeecec;
    .list {
      padding: 0 10px;
    }
  }
</style>