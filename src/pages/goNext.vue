<template>
  <section>
    <button @click="goNext">跳转至自身</button>
    <button @click="goNextWithoutTimestamp">跳转至自身不带时间戳</button>
    <button @click="goBack">跳转至goBack</button>
  </section>
</template>
<script>
  export default {
    name: 'goNext',
    data() {
      return {
        a: 'a',
        b: 'b'
      };
    },
    beforeCreate() {
      console.log('组件生命周期 beforeCreate', 'goNext');
    },
    created() {
      console.log('组件生命周期 created', 'goNext');
    },
    mounted() {
      console.log('组件生命周期 mounted', 'goNext');
      this.showInfo();
    },
    beforeDestroy() {
      console.log('组件生命周期 beforeDestroy-> ', 'goNext');
    },
    destroyed() {
      console.log('组件生命周期 destroyed-> ', 'goNext');
    },
    beforeRouteEnter(to, from, next) {
      console.log('路由生命周期 beforeRouteEnter-> ', 'goNext');
      next();
    },
    beforeRouteLeave(to, from, next) {
      console.log('路由生命周期 beforeRouteLeave-> ', 'goNext');
      next();
    },
    beforeRouteUpdate(to, from, next) {
      console.log('路由生命周期 beforeRouteUpdate-> ', 'goNext');
      next();
    },
    methods: {
      goNext() {
        this.$router.push({
          path: '/goNext',
          query: {
            ts: Date.now(),
          }
        }).then(() => {
          console.log('push /goNext -> ');
        })
      },
      goNextWithoutTimestamp() {
        this.$router.push({
          path: '/goNext',
        })
      },
      goBack() {
        this.$router.push('/goBack').then(() => {
          console.log('push /goBack -> ');
        })
      },
      showInfo() {
        const info = this.$route.query.info || 'Default';
        this.$message.info(info);
      },

      // 初始时this.a = ‘a’ this.b = ‘b’;
      funA() {
        this.a = '1221';
        this.funB();
        return this.funC();
      },
      funB() {
        this.a = this.a + '--';
      },
      funC() {
        return this.a + this.b;
      }
      // 将上面的vue代码用React Hooks怎么实现
      // 期望是像在vue中一样funA() 稳定的返回 1221-—b
    },
    watch: {
      '$route'(to) {
        console.log('watch $route', to.query.info, to);
      },
    }
  }
</script>
