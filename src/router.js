import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../src/App';
import dragPaste from '../src/pages/dragPaste';
import helloWord from '../src/pages/HelloWorld';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'App',
    component: App,
    redirect: '/helloWorld',
  }, {
    path: '/helloWorld',
    name: 'helloWord',
    component: helloWord,
  }, {
    path: '/dragPaste',
    name: 'dragPaste',
    component: dragPaste,
  }]
})
