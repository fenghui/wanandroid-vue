<template>
  <div class="login">
    <h4 class="title">用户登录</h4>
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <input 
          type="text" 
          placeholder="用户名" 
          v-model="formData.username" /> 
        <input 
          type="password" 
          placeholder="密码" 
          v-model="formData.password" /> 
        <p class="txt-error">{{ this.errorMsg }}</p>
        <button type="sumit">登录</button>
        <div class="guide">
          <p class="text-left">
            <router-link to="/regist">还没注册</router-link>
          </p>
          <p class="text-right">忘记密码？</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Api from '../../assets/js/api';
  import { mapState, mapActions } from 'vuex';
  import qs from 'qs';
  export default {
    components:{},
    props:{},
    data(){
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMsg: ''
      }
    },
    watch:{},
    computed:{},
    methods:{
      onSubmit() {
        this.$axios.post(Api.loginUrl, qs.stringify(this.formData))
        .then( (response) => {
          const { errorCode, data, errorMsg } = response.data;
          if(errorCode == 0) {
            this.login(data);
            this.errorMsg = '';
            this.$router.push('/');
          } else {
            this.errorMsg = errorMsg;
            console.error('errorCode', errorCode);
          }
        })
        .catch( (error) => {
          console.error(error);
        })
        .then( function() {
        })
      },
      ...mapActions( 'user', [ 'login' ] )
    },
    created(){},
    mounted(){}
  }
</script>

<style lang="less" scoped>
  .login {
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