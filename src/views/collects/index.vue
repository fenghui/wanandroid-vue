<template>
  <div class="custom-list">
    <div class="header">
      <div 
        class="icon left"
        @click="pageBack()"></div>
      <div class="center">我的收藏</div>
      <div class="right"></div>
    </div>
    <ArticleList 
      class="list" 
      :articleLists="articleDatas"/>
  </div>
</template>

<script>
  import ArticleList from '../../components/Article/ArticleList';
  import Api from '../../assets/js/api';
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
        articleDatas: []
      }
    },
    watch:{},
    computed:{},
    methods:{
      getArticleList() {
        this.$axios.get(`${Api.collectUrl}/${this.currPage}/json`)
        .then( (response) => {
          const { errorCode, data } = response.data;
          if(errorCode == 0) {
            const { pageCount, datas } = data;
            this.totalPage = pageCount;
            this.articleDatas = this.articleDatas.concat(datas);
          } else if(errorCode == -1001) {
            this.$router.push('/login');
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
      },
      pageBack() {
        this.$router.push('/');
      }
    },
    created(){},
    mounted(){
      //this.setScrollListener();
      this.getArticleList();
    }
  }
</script>

<style lang="less" scoped>
  .custom-list {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-direction: column;

    .header {
      width: 100%;
      display: flex;
      height: 40px;
      line-height: 40px;
      .left {
        background-image: url('back.png');
        margin-left: 20px;
        margin-top: 5px;
      }
      .center {
        flex: 1;
        text-align: center;
      }
      .right {
        width: 50px;
      }
    }

    .list {
      flex: 1;
      background-color: #eeecec;
      overflow-y: scroll;
      padding: 10px;
    }
  }
</style>