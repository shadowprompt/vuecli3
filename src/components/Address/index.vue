<template>
  <section>
    <div class="container" @click="containerClick" ref="container">
      <address-item v-for="(item, index) in list" :key="index" :item="item" :index="index"
            :ref="'ref' + index"
            @event="handleEvent">

      </address-item>
    </div>
    <p><button class="btn" @click="addItem">Add</button></p>
  </section>
</template>

<script>
import AddressItem from "./address-item";
export default {
  name: "Address",
  components: {
    AddressItem
  },
  data() {
    return {
      list: [
        {
          label: "张三",
          value: "zhangsan@qq.com",
          editable: false
        }
      ]
    };
  },
  mounted() {
    window.vm = this;
  },
  methods: {
    containerClick(e) {
      console.log('containerClick -> ', e.target);
      if (e.target === this.$refs.container) {
        this.addItem();
      }
    },
    addItem() {
      this.list.push({
        label: "",
        value: "",
        editable: true
      });
    },
    handleEvent({ type, index, value }) {
      console.log('handleEvent -> ', type, index, value);
      if (!value) {
        this.list.splice(index, 1);
        return;
      }
      if (type === 'delete') {
        this.list.splice(index, 1);
      } else if (type === 'blur') {
        const target = this.list[index];
        this.$set(target, 'value', value);
        this.$set(target, 'editable', false);
      } else if (type === 'enter') {
        const target = this.list[index];
        this.$set(target, 'value', value);

        this.list.forEach(item => {
          this.$set(item, 'editable', false);
        });
        const len = this.list.push({
          label: "",
          value: "",
          editable: true
        });
        this.$nextTick(() => {
          const ref = this.$refs['ref' + len];
          ref && ref.querySelector('input').focus();
        });
      }
    },
  }
};
</script>
<style>
section {
  text-align: left;
}
section .btn {
  color: blue;
}

.item {
  display: inline-block;
}
</style>
