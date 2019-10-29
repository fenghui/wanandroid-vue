<template>
    <div class="project-article-list wapper">
      <ArticleList 
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
        currPage: 1,
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
          this.$axios.get(`${Api.projectListUrl}/${this.currPage}/json?cid=${this.cid}`)
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
        const el = document.querySelector('.project-article-list');
        const offsetHeight = el.offsetHeight;
        el.onscroll = () => {
          const scrollTop = el.scrollTop;
          const scrollHeight = el.scrollHeight;
          if(offsetHeight + scrollTop - scrollHeight >= -20) {
            if(this.currPage + 1 < this.totalPage) {
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
  .project-article-list {
    margin: 0px 15px;
  }
</style>