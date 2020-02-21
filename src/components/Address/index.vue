<template>
  <section>
    <item v-for="(item, index) in list" :key="index" :item="item"></item>
    <p><button class="btn" @click="addItem">Add</button></p>
  </section>
</template>

<script>
import item from "./item";
export default {
  name: "Address",
  components: {
    item
  },
  data() {
    return {
      list: [
        {
          label: "张三",
          value: "zhangsan@qq.com"
        }
      ]
    };
  },
  mounted() {
    window.vm = this;
  },
  methods: {
    addItem() {
      this.list.push({
        label: "",
        value: "",
        editable: true
      });
    }
  }
};
</script>
<style lang="scss">
section {
  background-color: red;
  text-align: left;
  .btn {
    color: blue;
  }
}

.item {
  display: inline-block;
}
</style>
