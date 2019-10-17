<template>
  <div 
    class="banner" 
    :style="{backgroundImage: 'url(' + bannerBackgroundImg + ')'}"
    @click="bannerClick()">
    <div class="desc">
      <span>{{ (banners.data && banners.data.length > 0) ? (banners.data[bannerIndex].title) : '' }}</span>
      <span>{{ bannerIndex + 1 }} / {{ bannerImgCount }}</span>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios';
  import Api from '../../../../assets/js/api'
  export default {
    components:{},
    props:{},
    data(){
      return {
        banners : {},//{"data":[{"desc":"Android高级进阶直播课免费学习","id":23,"imagePath":"https://wanandroid.com/blogimgs/67c28e8c-2716-4b78-95d3-22cbde65d924.jpeg","isVisible":1,"order":0,"title":"Android高级进阶直播课免费学习","type":0,"url":"https://url.163.com/4bj"},{"desc":"一起来做个App吧","id":10,"imagePath":"https://www.wanandroid.com/blogimgs/50c115c2-cf6c-4802-aa7b-a4334de444cd.png","isVisible":1,"order":0,"title":"一起来做个App吧","type":1,"url":"https://www.wanandroid.com/blog/show/2"},{"desc":"","id":6,"imagePath":"https://www.wanandroid.com/blogimgs/62c1bd68-b5f3-4a3c-a649-7ca8c7dfabe6.png","isVisible":1,"order":1,"title":"我们新增了一个常用导航Tab~","type":1,"url":"https://www.wanandroid.com/navi"},{"desc":"","id":20,"imagePath":"https://www.wanandroid.com/blogimgs/90c6cc12-742e-4c9f-b318-b912f163b8d0.png","isVisible":1,"order":2,"title":"flutter 中文社区 ","type":1,"url":"https://flutter.cn/"}],"errorCode":0,"errorMsg":""},
        bannerIndex : 0,
        bannerImgCount : 4,
        bannerBackgroundImg : ''
      }
    },
    watch:{},
    computed:{},
    methods:{
      marqueeBanner() {
        if( this.banners.data && this.banners.data.length > 0) {
          this.bannerIndex = this.bannerIndex >= (this.bannerImgCount - 1) ? 0 : this.bannerIndex + 1;
          this.bannerBackgroundImg = this.banners.data[this.bannerIndex].imagePath;
        }
      },

      bannerClick() {
        //console.log('touch banner', this.banners.data[this.bannerIndex]);
      }
    },
    created(){
      Axios.get(Api.bannerUrl)
        .then( (response) => {
          this.banners = response.data;
          this.bannerBackgroundImg = this.banners.data[this.bannerIndex].imagePath;
          setTimeout(() => {
            this.marqueeBanner();
          }, 10 * 1000);
        })
        .catch( (error) => {
          console.error(error);
        })
        .then( function() {
        });
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
  .banner {
    width: 100%;
    height: 200px;
    display: flex;
    background-size: cover;

    .desc {
      align-self: flex-end;
      height: 40px;
      width: 100%;
      background-color: #50333333;
      display: flex;
      line-height: 40px;
      flex-direction: row;
      color: #ffffff;
      padding: 0 20px;
      font-size: 16px;

      :nth-child(1) {
        flex: 1;
        text-align: left;
      }

      :nth-child(2) {
        
      }
    }
  }
</style>