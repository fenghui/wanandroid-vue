<template>
  <a :href="articleData.link" target="_blank">
    <li class="articlelist-item">
      <div class="left">
        <div class="title">
          <h3>{{ articleData.title }}</h3>
          <p v-html="articleData.desc"></p>
        </div>
        <div class="info">
          <i class="icon" :class="[articleData.collect ? 'icon-like-selected' : 'icon-like']"  />
          <i class="icon icon-edit" />
          <span>{{ articleData.niceDate }}</span>
          <span>{{ articleData.author || articleData.shareUser }}</span>
        </div>
      </div>
      <div class="right">
        <div 
          v-bind:class="[articleData.envelopePic == '' ? 'no-pic' : 'pic']">
          {{ articleData.envelopePic == '' ? articleData.superChapterName : '' }}
        </div>
      </div>
    </li>
  </a>
</template>

<script>
  export default {
    components:{},
    props:{
      articleData: Object
    },
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
  .articlelist-item {
    background-color: #ffffff;
    border-radius: 20px;
    margin: 10px 0;
    padding: 15px 10px;
    display: flex;
    .left {
      flex: 4;
      text-align: left;
      margin-right: 10px;
      p {
        font-size: 14px;
        margin: 10px 0;
      }
      .title {
        flex: 1;
      }
      .info {
        height: 20px;
        line-height: 20px;
        display: flex;
        font-size: 13px;
        overflow: hidden;
        .icon-like {
          width: 20px;
          height: 20px;
          background-image: url(./like.png);
        }
        .icon-like-selected {
          width: 20px;
          height: 20px;
          background-image: url(./like_selected.png);
        }
        .icon-edit {
          width: 20px;
          height: 20px;
          background-image: url(./edit.png);
          margin: 0 10px;
        }
        :nth-child(3) {
          margin-right: 10px;
        }
      }
      display: flex;
      flex-direction: column;
    }
    .right {
      flex: 1;
      .pic {
        width: 100%;
        height: 100%;
        background-image: url(https://www.wanandroid.com/blogimgs/1cd80531-67b7-46f2-8a3e-25bce4a57dff.png);
        background-size: cover;
      }
      .no-pic {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color:brown;
        line-height: 80px;
        font-size: 14px;
        color: #ffffff;
      }
    }
  }
</style>