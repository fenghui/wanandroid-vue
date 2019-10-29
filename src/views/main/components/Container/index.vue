<template>
  <ArticleList 
      :articleLists="articleDatas" />
</template>

<script>
  import { ArticleListItem, ArticleList } from '../../../../components/Article'
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
        articleDatas: [],
        isLoading: false
      }
    },
    watch:{},
    computed:{},
    methods:{
      getArticleList() {
        this.isLoading = true;
        this.$axios.get(`${Api.indexUrlPrefix}/${this.currPage}/json`)
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
          this.isLoading = false;
          console.error(error);
        })
        .then( function() {
        })
      },
      setScrollListener() {
        const el = document.querySelector('.main-container');
        const offsetHeight = el.offsetHeight;
        el.onscroll = () => {
          const scrollTop = el.scrollTop;
          const scrollHeight = el.scrollHeight;
          if(offsetHeight + scrollTop - scrollHeight >= -20) {
            if(this.currPage < this.totalPage) {
              if(!this.isLoading) {
                this.currPage++;
                this.getArticleList();
              }
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

</style>