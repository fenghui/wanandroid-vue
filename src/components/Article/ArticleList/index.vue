<template>
  <ul class="article-list">
    <ArticleListItem 
      v-for=" article in articleLists " 
      :key="article.id"
      :articleData="article"  />
  </ul>
</template>

<script>
  import ArticleListItem from '../ArticleListItem'
  export default {
    components:{
      ArticleListItem
    },
    props:{
      articleLists: Array
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
  .article-list {
    height: 100%;
  }
</style>