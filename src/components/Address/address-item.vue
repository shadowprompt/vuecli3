<template>
  <div class="item" style="padding: 5px 0 5px 5px;margin-right: 10px;">
    <div v-if="item.editable"  :style="{width: inputWidth + 'px'}">
      <input style="width: 100%" ref="textArea" v-model="text" @input="onInput" @keyup="onKeyUp" @blur="onBlur">
      <pre style="visibility: hidden;position: fixed" ref="pre">{{text}}</pre>
    </div>
    <span v-else @click="onClick" @dblclick="onDbClick">{{ item.label }}<{{item.value}}></span>
  </div>
</template>

<script>
export default {
  name: "AddressItem",
  props: ["item", 'index'],
  data() {
    return {
      text: "",
      inputWidth: 6,
    };
  },
  mounted() {
    this.focus();
  },
  methods: {
    focus() {
      const ref = this.$refs.textArea;
      ref && ref.focus();
    },
    onInput(value) {
      console.log('onInput -> ', value);
      this.$nextTick(() => {
        this.inputWidth = Math.max(this.$refs.pre.clientWidth, 6);
      });
    },
    onClick(e) {
      e.target.style.backgroundColor = 'red';
    },
    onDbClick() {
      console.log('onClick -> ', );
      this.text = this.item.value;
      this.item.editable = true;
      this.$nextTick(() => {
        this.inputWidth = Math.max(this.$refs.pre.clientWidth, 6);
        this.focus();
      })
    },
    onBlur() {
      this.$emit('event', {
        type: 'blur',
        index: this.index,
        value: this.text,
      });
    },
    onKeyUp(e) {
      console.log('onKeyUp -> ', this.text, e);
      if (e.keyCode === 8) {
        console.log('删除 -> ');
        if (this.text.length === 0) { // 已经删除完毕了
          this.$emit('event', {
            type: 'delete',
            index: this.index,
          })
        }
      } else if (e.keyCode === 13) {
        if (this.text.length > 0) {
          this.$emit('event', {
            type: 'enter',
            index: this.index,
            value: this.text,
          });
        }
      }

    },
  },
  watch: {

  }
};
</script>
<style>
  input {
    border: none;
    outline: none;
  }
</style>
