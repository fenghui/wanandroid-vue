import IndexPage from './views/IndexPage'
import MainPage from './views/main';
import { TreeList, ArticleList} from './views/tree';
import { WxChapter } from './views/wxarticle';
import Navigate from './views/navigate';
import { Projects } from './views/project';
import Login from './views/login';
import Regist from './views/regist';
import Collects from './views/collects';
import VueRouter from 'vue-router';
import Vue from 'vue';
import store from './store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: IndexPage,
    children: [
      {
        path: '/',
        component: MainPage
      },
      {
        path: '/main',
        component: MainPage
      },
      {
        path: 'tree',
        component: TreeList
      }, 
      {
        path: 'articles/:id',
        component: ArticleList
      }, 
      {
        path: 'wxarticle',
        component: WxChapter
      }, 
      {
        path: 'navigate',
        component: Navigate
      }, 
      {
        path: 'project',
        component: Projects
      }
    ]
  }, 
  {
    path: '/login',
    component: Login
  }, 
  {
    path: '/regist',
    component: Regist
  },
  {
    path: '/collects',
    component: Collects,
    meta: { requireAuth: true }
  }
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
      if (store.state.user.isLogined) { // 判断当前是否是登录状态，已登录
          next();
          return
      } else { // 未登录，跳转到登录
          next({
              path: '/login',
              query: {
                  from: to.fullPath // 跳转到登录页时，把当前url设置为url参数，以便登录成功，再跳到当前页
              }
          })
          return
      }
  }
  next()
})

export { router, store};