<template>
  <div class="proj-chapter">
    <ul class="tabbar">
      <li 
        v-for="(item, index) in projectTree"
        :key="item.id"
        :class="index == tabIndex ? 'selected' : ''"
        @click="switchTab(index)">
        {{item.name}}
      </li>
    </ul>
    <div class="list">
      <ArticleList ref="list"/>
    </div>
  </div>
</template>

<script>
  import ArticleList from './ArticleList'
  import Api from '../../../assets/js/api'
  export default {
    components:{
      ArticleList
    },
    props:{},
    data(){
      return {
        projectTree: [],
        tabIndex: -1
      }
    },
    watch:{},
    computed:{
      cid() {
        let _cid = -1;
        if(this.projectTree.length > 0 && this.tabIndex > -1) {
          _cid = this.projectTree[this.tabIndex].id;
        }
        return _cid;
      }
    },
    methods:{
      getProjectTreeList() {
        this.$axios.get(Api.projectTreeUrl)
        .then( (response) => {
          const { errorCode, data } = response.data;
          if(errorCode == 0) {
            this.projectTree = data;
            this.tabIndex = 0;
            this.$refs.list.loadList(this.cid);
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
      switchTab(_tabIndex) {
        this.tabIndex = _tabIndex;
        this.$refs.list.loadList(this.cid);
      }
    },
    created(){},
    mounted(){
      this.getProjectTreeList();
    }
  }
</script>

<style lang="less" scoped>
  .proj-chapter {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .tabbar {
      display: inline-flex;
      display: -webkit-inline-box;
      background-color: orangered;
      overflow-x: scroll;
      width: 100%;
      // height: 100px;
      li {
        width: 100px;
        font-weight: bold;
        padding: 15px;
        font-size: 14px;
        color: #ffffff;
        text-align: center;

        &.selected {
          border-bottom: 5px solid #ffffff;
        }
      }
    }
    .list {
      flex: 1;
      overflow-y: hidden;
    }
  }
</style>