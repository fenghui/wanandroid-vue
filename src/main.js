import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import './assets/style/reset.css'
import './assets/style/style.css'
import MainPage from './views/main';
import { TreeList, ArticleList} from './views/tree';
import { WxChapter } from './views/wxarticle';

Vue.config.productionTip = false
Vue.use(VueRouter);

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


const routes = [{
  path: '/',
  component: MainPage
}, {
  path: '/main',
  component: MainPage
}, {
  path: '/tree',
  component: TreeList
}, {
  path: '/articles/:id',
  component: ArticleList
}, {
  path: '/wxarticle',
  component: WxChapter
}];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});