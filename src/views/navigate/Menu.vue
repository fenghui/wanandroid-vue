<template>
  <ul class="menu">
    <li
      v-for="(item, index) in navData"
      :key="index"
      :class="tabIndex == index ? 'selected' : ''"
      @click="tabSelect(index)">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
  export default {
    components:{},
    props:{
      navData: Array
    },
    data(){
      return {
        tabIndex: 0
      }
    },
    watch:{},
    computed:{},
    methods:{
      tabSelect(_tabIndex) {
        if(this.tabIndex == _tabIndex) {
          return;
        }
        this.tabIndex = _tabIndex;
        this.$emit('tabChange', _tabIndex);
      }
    },
    created(){},
    mounted(){}
  }
</script>

<style lang="less" scoped>
  .menu {
    height: 100%;
    overflow-y: scroll;
    li {
      padding: 20px 24px;
      font-size: 16px;
      &.selected {
        color: orangered;
        background-color: #ffffff;
      }
    }
  }
</style>