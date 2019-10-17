<template>
    <ArticleList 
      class="article-list"
      :articleLists="articleDatas" />
</template>

<script>
  import { ArticleListItem, ArticleList } from '../../../components/Article'
  import Axios from 'axios';
  import Api from '../../../assets/js/api'

  export default {
    components:{
      ArticleList
    },
    props:{
    },
    data(){
      return {
        currPage: 0,
        totalPage: 1,
        articleDatas: [],
        cid: 0
      }
    },
    watch:{},
    computed:{},
    methods:{
      getArticleList() {
        Axios.get(`${Api.articleListUrl}/${this.currPage}/json?cid=${this.cid}`)
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
      this.cid = this.$route.params.id;
    },
    mounted(){
      this.getArticleList();
      this.setScrollListener();
    }
  }
</script>

<style lang="less" scoped>
  .article-list {
    margin: 10px 15px;
  }
</style>