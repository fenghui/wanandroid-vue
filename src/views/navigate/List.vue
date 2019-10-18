<template>
  <div class="list">
    <h3>{{ articles.name }}</h3>
    <div>
      <span 
        v-for="(item, index) in articles.articles" 
        :key="item.id" 
        :class="[itemBg[index % 4]]">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    components:{},
    props:{
      articles: Object
    },
    data(){
      return {
        itemBg : ['bg-orange', 'bg-orangered', 'bg-green', 'bg-greenyellow']
      }
    },
    watch:{},
    computed:{},
    methods:{},
    created(){},
    mounted(){}
  }
</script>

<style lang="less" scoped>
  .list {
    margin: 5px;
    border-radius: 15px;
    // height: 100%;
    overflow-y: scroll;
    background-color: #ffffff;
    h3 {
      height: 40px;
      line-height: 40px;
    }
    div {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      span {
        margin: 5px;
        border-radius: 20px;
        padding: 10px 20px;
        font-size: 13px;
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
        a {
          color: #ffffff;
        }
      }
    }
  }
</style>