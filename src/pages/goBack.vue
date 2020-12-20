<template>
  <section>
    <button @click="goBack">退回</button>
  </section>
</template>
<script>
  export default {
    name: 'goBack',
    beforeCreate() {
      console.log('组件生命周期 beforeCreate', 'goBack');
    },
    created() {
      console.log('组件生命周期 created', 'goBack');
    },
    mounted() {
      console.log('组件生命周期 mounted', 'goBack');
    },
    beforeDestroy() {
      console.log('组件生命周期 beforeDestroy-> ', 'goBack');
    },
    destroyed() {
      console.log('组件生命周期 destroyed-> ', 'goBack');
    },
    beforeRouteEnter(to, from, next) {
      console.log('路由生命周期 beforeRouteEnter-> ', 'goBack');
      next();
    },
    beforeRouteLeave(to, from, next) {
      console.log('路由生命周期 beforeRouteLeave-> ', 'goBack');
      next()
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    }
  }
</script>
