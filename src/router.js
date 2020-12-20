import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import ckEditor from './pages/ckEditor';
import dragPaste from './pages/dragPaste';
import helloWord from './pages/helloWorld';
import slack from './pages/slack';
import goBack from './pages/goBack';
import goNext from './pages/goNext';
import goJs from './pages/goJs';
import ivrList from './pages/IVR/list';
import ivrNew from './pages/IVR/index';
import js2Pdf from './pages/js2Pdf';
import updateTest from '@/pages/updateTest';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      redirect: '/helloWorld',
    },
    {
      path: '/ckEditor',
      name: 'ckEditor',
      component: ckEditor,
    },
    {
      path: '/helloWorld',
      name: 'helloWord',
      component: helloWord,
    },
    {
      path: '/slack',
      name: 'slack',
      component: slack,
    },
    {
      path: '/goNext',
      name: 'goNext',
      component: goNext,
    },
    {
      path: '/goBack',
      name: 'goBack',
      component: goBack,
    },
    {
      path: '/dragPaste',
      name: 'dragPaste',
      component: dragPaste,
    },
    {
      path: '/goJs',
      name: 'goJs',
      component: goJs,
    },
    {
      path: '/js2Pdf',
      name: 'js2Pdf',
      component: js2Pdf,
    },
    {
      path: '/asyncValidate',
      name: 'asyncValidate',
      component: () => import('./pages/asyncValidate'),
    },
    {
      path: '/ivrList',
      name: 'ivrList',
      component: ivrList,
    },
    {
      path: '/ivrNew',
      name: 'ivrNew',
      component: ivrNew,
    },
    {
      path: '/updateTest',
      name: 'updateTest',
      component: updateTest,
    }
  ],
});

router.beforeEach((to, from, next) => {
  console.log('路由生命周期 beforeEach-> 全局');
  next();
});
router.beforeResolve((to, from, next) => {
  console.log('路由生命周期 beforeResolve-> 全局');
  next();
});
// router.beforeHooks((to, from, next) => {
//   console.log('路由生命周期 beforeHooks-> 全局');
//   next();
// });

export default router;
