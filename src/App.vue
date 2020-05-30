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
    <router-link to="/">Index</router-link>
    <router-link to="/helloWorld">helloWorld</router-link>
    <router-link to="/dragPaste">dragPaste</router-link>
    <router-link to="/goJs">goJs</router-link>
    <router-view></router-view>
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
