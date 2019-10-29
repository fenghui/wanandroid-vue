<template>
    <div class="wapper articles-container">
      <!-- <span @click="pageBack()">Back</span> -->
      <ArticleList 
        class="article-list"
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
        currPage: 0,
        totalPage: 1,
        articleDatas: [],
        cid: 0,
        isLoading: false
      }
    },
    watch:{
      '$route'() {
        if(this.$route.params.id != undefined) {
          this.articleDatas = [];
          this.currPage = 0;
          this.cid = this.$route.params.id;
          this.getArticleList();
        }
      }    
    },
    computed:{},
    methods:{
      getArticleList() {
        if(this.isLoading) {
          return;
        }
        this.isLoading = true;
        this.$axios.get(`${Api.articleListUrl}/${this.currPage}/json?cid=${this.cid}`)
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
      },
      setScrollListener() {
        const el = document.querySelector('.articles-container');
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
      pageBack() {
        //this.$router.replace('/tree');
        this.$router.back();
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