
<template>
  <ul class="footer">
    <li 
      v-for="(item, idx) in menuData" 
      :key="idx"
      :class=" [ tabIndex == idx ? 'selected' : '', item.className] "
      @click="tabSelect(idx)">
      <router-link :to=item.router>
        <i class="icon" />
        <span>{{ item.name }}</span>
      </router-link>
    </li>
    
  </ul>
</template>

<script>
  export default {
    components:{},
    data(){
      return {
        tabIndex: 0,
        menuData: [
          {name : '首页', className : 'home', router : '/main'}, 
          {name : '体系', className : 'wallet', router : '/tree'}, 
          {name : '公众号', className : 'message', router : '/wxarticle'},
          {name: '导航', className : 'local', router : '/main'},
          {name: '项目', className : 'list', router : '/main'}
        ]
      }
    },
    watch:{},
    computed:{},
    methods:{
      tabSelect(_tabIndex) {
        this.tabIndex = _tabIndex;
        this.$emit('switchTab', _tabIndex);
      }
    },
    created(){},
    mounted(){}
  }
</script>

<style lang="less" scoped>
  .footer {
    display: flex;
    li {
      padding: 10px 0;
      flex: 1;
      i {
        margin: 4px auto 4px auto;
        width: 24px;
        height: 24px;
      }
      span {
        color: #707070;
      }
      &.selected {
        span {
          color: #d4237a;
        }
      }
      
      &.home {
        i {
          background-image: url(./home.png);
        }
        &.selected {
          i {
            background-image: url(./home_selected.png);
          }
        }
      }

      &.wallet {
        i {
          background-image: url(./wallet.png);
        }
        &.selected {
          i {
            background-image: url(./wallet_selected.png);
          }
        }
      }
      &.message {
        i {
          background-image: url(./message.png);
        }
        &.selected {
          i {
            background-image: url(./message_selected.png);
          }
        }
      }
      &.local {
        i {
          background-image: url(./local.png);
        }
        &.selected {
          i {
            background-image: url(./local_selected.png);
          }
        }
      }
      &.list {
        i {
          background-image: url(./list.png);
        }
        &.selected {
          i {
            background-image: url(./list_selected.png);
          }
        }
      }
    }
  }
</style>