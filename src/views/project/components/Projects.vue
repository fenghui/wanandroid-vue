<template>
  <div class="wx-chapter">
    <ul class="tabbar">
      <li 
        v-for="(item, index) in projectTree"
        :key="item.id"
        :class="index == tabIndex ? 'selected' : ''"
        @click="switchTab(index)">
        {{item.name}}
      </li>
    </ul>
    <ArticleList ref="list"/>
  </div>
</template>

<script>
  import ArticleList from './ArticleList'
  import Axios from 'axios';
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
        Axios.get(Api.projectTreeUrl)
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
  .wx-chapter {
    width: 100%;
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
  }
</style>