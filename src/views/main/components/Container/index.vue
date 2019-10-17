<template>
  <div class="container">
    <ArticleList 
      :articleLists="articleDatas" />
  </div>
</template>

<script>
  import { ArticleListItem, ArticleList } from '../../../../components/Article'
  import Axios from 'axios';
  import Api from '../../../../assets/js/api'

  export default {
    components:{
      ArticleList
    },
    props:{},
    data(){
      return {
        currPage: 0,
        totalPage: 1,
        articleDatas: []
      }
    },
    watch:{},
    computed:{},
    methods:{
      getArticleList() {
        Axios.get(`${Api.indexUrlPrefix}/${this.currPage}/json`)
        .then( (response) => {
          const { errorCode, data } = response.data;
          if(errorCode == 0) {
            const { pageCount, datas } = data;
            this.totalPage = pageCount;
            this.articleDatas = this.articleDatas.concat(datas);
          } else {
            console.error('errorCode', errorCode);
          }
        })
        .catch( (error) => {
          console.error(error);
        })
        .then( function() {
        })
      },
      setScrollListener() {
        const el = document.querySelector('.container');
        const offsetHeight = el.offsetHeight;
        el.onscroll = () => {
          const scrollTop = el.scrollTop;
          const scrollHeight = el.scrollHeight;
          if(offsetHeight + scrollTop - scrollHeight >= -20) {
            if(this.currPage < this.totalPage) {
              this.currPage++;
              this.getArticleList();
            }
          }
        }
      }
    },
    created(){
      
    },
    mounted(){
      this.getArticleList();
      this.setScrollListener();
    }
  }
</script>

<style lang="less" scoped>
  .container {

  }
</style>