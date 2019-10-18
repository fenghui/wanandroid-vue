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
        cid: -1,
        currPage: 1,
        totalPage: 1, 
        articleDatas: []
      }
    },
    watch:{},
    computed:{},
    methods:{
      getArticleList() {
        if(this.cid > 0) {
          Axios.get(`${Api.projectListUrl}/${this.currPage}/json?cid=${this.cid}`)
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
        }
      },
      setScrollListener() {
        const el = document.querySelector('.container');
        const offsetHeight = el.offsetHeight;
        el.onscroll = () => {
          const scrollTop = el.scrollTop;
          const scrollHeight = el.scrollHeight;
          if(offsetHeight + scrollTop - scrollHeight >= -20) {
            if(this.currPage + 1 < this.totalPage) {
              this.currPage++;
              this.getArticleList();
            }
          }
        }
      },
      loadList(cid) {
        this.currPage = 0;
        this.totalPage = 1; 
        this.articleDatas = [];
        this.cid = cid;
        this.getArticleList();
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
  .article-list {
    margin: 10px 15px;
  }
</style>