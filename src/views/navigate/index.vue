<template>
  <div class="navigate">
    <Menu 
      :navData="navData"
      @tabChange="tabSelect" />
    <List 
      class="list1"
      :articles="navData.length > 0 ? navData[tabIndex] : {}" />
  </div>
</template>

<script>
  import Axios from 'axios';
  import Api from '../../assets/js/api'
  import Menu from './Menu';
  import List from './List';
  export default {
    components:{
      Menu,
      List
    },
    props:{},
    data(){
      return {
        tabIndex: 0,
        navData: []
      }
    },
    watch:{},
    computed:{},
    methods:{
      getNavList() {
        Axios.get(Api.navUrl)
        .then( (response) => {
          const { errorCode, data } = response.data;
          if(errorCode == 0) {
            this.navData = data;
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
      tabSelect(_tabIndex) {
        this.tabIndex = _tabIndex;
      }
    },
    created(){},
    mounted(){
      this.getNavList();
    }
  }
</script>

<style lang="less" scoped>
  .navigate {
    display: flex;
    height: 100%;

    .list1 {
      flex: 1;
    }
  }
</style>