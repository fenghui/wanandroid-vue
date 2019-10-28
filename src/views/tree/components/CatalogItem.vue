<template>
  <li class="catalog-item">
    <h4>{{ catalogData.name }}</h4>
    <div>
      <span 
        v-for="(item, index) in catalogData.children" 
        :key="item.id"
        :class="[itemBg[index % 4]]"
        @click="itemClick(item.id)">
        <router-link :to="'/articles/' + item.id">
          {{ item.name }}
        </router-link>
      </span>
    </div>
  </li>
</template>

<script>
  const bgClass = ['bg-orange', 'bg-orangered', 'bg-green', 'bg-greenyellow'];
  export default {
    components:{},
    props:{
      catalogData: Object
    },
    data(){
      return {
      }
    },
    watch:{},
    computed:{
      itemBg() {
        return bgClass;
      }
    },
    methods:{
      itemClick(id) {
        //console.log(id);
      }
    },
    created(){},
    mounted(){}
  }
</script>

<style lang="less" scoped>
  .catalog-item {
    padding: 10px 20px;
    margin-top: 10px;
    background-color: #ffffff;
    border-radius: 20px;
    h4 {
      height: 40px;
      line-height: 40px;
    }
    div {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      span {
        margin: 0 10px 10px 0;
        border-radius: 20px;
        padding: 10px 20px;
        color: #ffffff;
        background-color: aqua;
        &.bg-orange {
          background-color: orange;
        }
        &.bg-orangered {
          background-color: orangered;
        }
        &.bg-green {
          background-color: green;
        }
        &.bg-greenyellow {
          background-color: greenyellow;
        }
      }
    }
  }
</style>