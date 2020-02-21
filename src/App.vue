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
    <hello-world ok="okTest" @input="onInput"></hello-world>
  </section>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import item from "./components/LayoutBlock.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    item
  },
  // data() {
  //   return {
  //     items: [2, 4, 6]
  //   };
  // },
  methods: {
    onInput(){
      console.log(' -> input');
    }
  }
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
</style>
