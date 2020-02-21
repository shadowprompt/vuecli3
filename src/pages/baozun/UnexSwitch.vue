<script>
export default {
  name: "UnexSwitch",
  mounted() {
    console.log("mounted", this);
  },
  data() {
    return {
      unexValue: null
    };
  },
  props: ["value"],
  render(h) {
    const self = this;
    return h(
      "el-switch",
      {
        // domProps: {
        //   value: self.value
        // },
        props: {
          ...this.$attrs,
          value: (this.unexValue = this.value)
        },
        on: {
          ...this.$listeners,
          input: function(event) {
            console.log("input ", event);
            self.unexValue = event;
            self.$emit("input", event);
          }
        }
      },
      ((slots, res) => {
        Object.keys(slots).forEach(item =>
          res.push(h("template", { slot: item }, slots[item]))
        );
        return res;
      })(this.$slots, [])
    );
  }
};
</script>
