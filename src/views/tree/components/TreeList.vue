<template>
  <div class="wapper">
    <ul class="catalog-list">
      <CatalogItem 
        v-for="item in catalogDatas"
        :key="item.id"
        :catalogData="item"/>
    </ul>
  </div>
</template>

<script>
  import CatalogItem from './CatalogItem'
  import Api from '../../../assets/js/api'
  export default {
    components:{
      CatalogItem
    },
    props:{},
    data(){
      return {
        catalogDatas: Array
      }
    },
    watch:{},
    computed:{},
    methods:{
      getCatalogs() {
        this.$axios.get(`${Api.treeUrl}`)
        .then( (response) => {
          const { errorCode, data } = response.data;
          if(errorCode == 0) {
            this.catalogDatas = data;
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
    created(){},
    mounted(){
      this.getCatalogs();
    }
  }
</script>

<style lang="less" scoped>
  .catalog-list {
    margin: 10px 15px;
  }
</style>