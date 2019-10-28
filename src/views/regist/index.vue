<template>
  <div class="regist">
    <h4 class="title">用户注册</h4>
    <div class="container">
      <form>
        <input type="text" placeholder="用户名" /> 
        <input type="password" placeholder="密码" /> 
        <input type="password" placeholder="确认密码" /> 
        <button type="sumit">注册</button>
        <router-link to="/login"><p class="text-left">已注册，立即登录</p></router-link>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    components:{},
    props:{},
    data(){
      return {
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
  .regist {
    width: 100%;
    height: 100%;
    background-color: #eeecec;
    .title {
      background-color: green;
      width: 100%;
      line-height: 40px;
      color: #ffffff;
    }
    .container {
      margin: 40px 20px;
      input {
        height: 40px;
        width: 100%;
        border: 1px solid #333333;
        margin: 10px 0;
        background: #ffffff;
      }
      button {
        width: 100%;
        height: 40px;
        color: #ffffff;
        background-color: green;
      }
      p {
        margin-top: 10px;
      }
      .guide {
        display: flex;
        p {
          flex: 1;
        }
      }
    }
  }
</style>