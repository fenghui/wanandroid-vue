import Vue from 'vue'
import App from './App.vue'
import './assets/style/reset.css'
import './assets/style/style.css'
//
import axios from 'axios';
import { router, store} from './router';

Vue.config.productionTip = false


//设置请求携带cookie
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;

// new Vue({
//   render: h => h(App),
// }).$mount('#app')




/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});