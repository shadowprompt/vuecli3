<template>
  <section>
    <!--<ul>-->
      <!--<item v-for="(item, index) in items" :key="index" :item="item">{{-->
        <!--item-->
      <!--}}</item>-->
    <!--</ul>-->
    <!--<ul>-->
      <!--<item v-for="(item, index) in items" :key="index" :item="item">{{-->
        <!--item-->
      <!--}}</item>-->
    <!--</ul>-->
    <router-link to="/ckEditor">ckEditor</router-link>
    <router-link to="/helloWorld">helloWorld</router-link>
    <router-link to="/slack">slack</router-link>
    <router-link to="/dragPaste">dragPaste</router-link>
    <router-link to="/goJs">goJs</router-link>
    <router-link to="/js2Pdf">js2Pdf</router-link>
    <router-link to="/ivrList">ivrList</router-link>
    <router-link to="/ivrNew">ivrNew</router-link>
    <router-link to="/goNext">生命周期</router-link>
    <router-link to="/goBack">goBack</router-link>
    <router-link to="/asyncValidate">asyncValidate</router-link>
    <router-link to="/updateTest">updateTest</router-link>
    <router-view :key="$route.fullPath"></router-view>
  </section>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      // items: [2, 4, 6]
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  padding: 4px;
}
</style>
