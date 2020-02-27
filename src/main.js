import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import store from './store';
import router from './router';
import {ccc} from './test'; // 只要有引入，即使引入的是错误的，被引入文件还是会对应执行
console.log('testfn -> ',ccc );

Vue.config.productionTip = false;
Vue.use(Vuex)

new Vue({
  // render: h => h("div", "33")
  render: h => h(App),
  router,
  store: new Vuex.Store(store),
}).$mount("#app");
