<template>
    <div class="wapper wxarticle-coontainer">
      <ArticleList 
        class="wx-article-list"
        :articleLists="articleDatas" />
    </div>
</template>

<script>
  import { ArticleListItem, ArticleList } from '../../../components/Article'
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
        currPage: 0,
        totalPage: 1, 
        articleDatas: [],
        isLoading: false
      }
    },
    watch:{},
    computed:{},
    methods:{
      getArticleList() {
        if(this.cid > 0) {
          if(this.isLoading) {
            return;
          }
          this.isLoading = true;
          this.$axios.get(`${Api.wxArticleListUrl}/${this.cid}/${this.currPage}/json`)
          .then( (response) => {
            const { errorCode, data } = response.data;
            if(errorCode == 0) {
              const { pageCount, datas } = data;
              this.totalPage = pageCount;
              this.articleDatas = this.articleDatas.concat(datas);
            } else {
              console.error('errorCode', errorCode);
            }
            this.isLoading = false;
          })
          .catch( (error) => {
            console.error(error);
            this.isLoading = false;
          })
          .then( function() {
          })
        }
      },
      setScrollListener() {
        const el = document.querySelector('.wxarticle-coontainer');
        const offsetHeight = el.offsetHeight;
        el.onscroll = () => {
          const scrollTop = el.scrollTop;
          const scrollHeight = el.scrollHeight;
          if(offsetHeight + scrollTop - scrollHeight >= -20) {
            if(this.currPage < this.totalPage) {
              if(this.isLoading) {
                return;
              }
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
  .wx-article-list {
    margin: 10px 15px;
  }
</style>