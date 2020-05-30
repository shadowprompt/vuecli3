import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import dragPaste from './pages/dragPaste';
import helloWord from './pages/HelloWorld';
import goJs from './pages/goJs';

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
  }, {
    path: '/goJs',
    name: 'goJs',
    component: goJs,
  }]
})
