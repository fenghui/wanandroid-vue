<template>
  <div class="left-menu">
    <div 
      class="bg"
      @click="switchLeftMenu" />
    <div class="container">
      <div 
        class="title"
        @click="login">
        <img 
          src="https://www.wanandroid.com/resources/image/pc/logo.png"
          class="face" />
        <h4>
          {{ this.isLogined ? this.userInfo.nickname : '点击登录' }}
        </h4>
      </div>
      <ul class="menu-list">
        <router-link to="/collects">
          <li>
            <i class="icon icon-heart"/>
            <span>我的收藏</span>
          </li>
        </router-link>
        <!-- <li>
          <i class="icon icon-internet"/>
          <span>常用网站</span>
        </li> -->
        <li>
          <i class="icon icon-theme"/>
          <span>主题</span>
        </li>
        <!-- <li>
          <i class="icon icon-share"/>
          <span>分享</span>
        </li> -->
        <a href="https://fenghui.github.io" target="_blank">
          <li>
            <i class="icon icon-user"/>
            <span>关于作者</span>
          </li>
        </a>
        <li 
          v-if="this.isLogined"
          @click="logout">
          <i class="icon icon-logout"/>
          <span>退出登录</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Api from '../../assets/js/api';
  import { mapActions, mapState } from 'vuex';
  export default {
    components:{},
    props:{},
    data(){
      return {
      }
    },
    watch:{},
    computed: {
      ...mapState( 'user', [ 'isLogined', 'userInfo' ] )
    },
    methods:{
      ...mapActions('global', ['switchLeftMenu']),
      login() {
        if(!this.isLogined) {
          this.$router.push('/login');
        }
      },
      logout() {
        this.$axios.get(Api.logoutUrl)
          .then( (response) => {
            const { errorCode } = response.data;
            if(errorCode == 0) {
              this.$store.dispatch('user/logout');
            } else {
              console.error('errorCode', errorCode);
            }
          });
      }
    },
    created(){},
    mounted(){}
  }
</script>

<style lang="less" scoped>
  .left-menu {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    .bg {
      width: 100%;
      height: 100%;
      background-color: gray;
      opacity: 0.5;
    }
    .container {
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height: 100%;
      background: #ffffff;
      .title {
        background-color: orangered;
        width: 100%;
        height: auto;
        padding: 10px 0;
        .face {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          margin: 10px;
        }
        h4 {
          color: #ffffff;
        }
      }
      .menu-list {
        .icon-heart {
          background-image: url(heart.png);
        }
        .icon-internet {
          background-image: url(internet.png);
        }
        .icon-theme {
          background-image: url(theme.png);
        }
        .icon-share {
          background-image: url(share.png);
        }
        .icon-user {
          background-image: url(user.png);
        }
        .icon-logout {
          background-image: url(logout.png);
        }
        li {
          width: 100%;
          display: inline-flex;
          line-height: 30px;
          padding: 20px 10px;
          span {
            margin-left: 20px;
          }
        }
      }
    }
  }
</style>