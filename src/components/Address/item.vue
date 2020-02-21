<template>
  <div class="item">
    <textarea ref="textArea" v-if="item.editable" v-model="text"></textarea>
    <span v-else>{{ item.label }}</span>
  </div>
</template>

<script>
export default {
  name: "AddressItem",
  props: ["item"],
  data() {
    return {
      text: ""
    };
  },
  watch: {
    "item.editable": {
      immediate: true,
      handler(value) {
        console.log("watch", this.item);
        if (value) {
          this.text = this.item.label + this.item.value;
          this.$nextTick(() => {
            const { textArea } = this.$refs;
            textArea && textArea.focus();
          });
        }
      }
    }
  }
};
</script>
