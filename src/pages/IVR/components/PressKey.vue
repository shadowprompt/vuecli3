<template>
  <section>
    <a-tag
      v-for="(item, index) in data"
      @click="onClick(index)"
      :key="index"
      :style="{
        border: activeIndex === index ? '1px solid red' : '',
        color: isSelected(index) ? 'red' : '',
      }"
    >
      {{ item.label }}
    </a-tag>
    <div>
      <div v-for="(item, index) in data" :key="'tabContext-' + index" v-show="activeIndex === index">
        <slot :item="item" :change="onTimeChange"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PressKey',
  props: {
    data: {
      type: Array,
    },
    multiple: {
      type: Boolean,
    },
  },
  data() {
    return {
      activeIndex: 0,
      selected: this.multiple ? [0] : [],
    };
  },
  computed: {
    isSelected() {
      return index => {
        return this.selected.includes(index);
      };
    },
  },
  methods: {
    onClick(index) {
      if (this.multiple) {
        if (!this.isSelected(index)) {
          this.activeIndex = index;
        } else {
          if (this.activeIndex === index) {
            this.activeIndex = null;
          }
          // this.activeIndex = index;
        }
        this.updateSelected(index);
      } else {
        this.activeIndex = index;
      }
      this.$emit('change', this.getSelected());
    },
    updateSelected(index) {
      if (this.selected.includes(index)) {
        this.selected = this.selected.filter(item => item !== index);
      } else {
        this.selected.push(index);
      }
    },
    getItem(index) {
      return this.data[index];
    },
    getSelected() {
      if (this.multiple) {
        return this.selected.map(item => this.getItem(item));
      }
      return this.getItem(this.activeIndex);
    },
    onTimeChange() {
      this.onClick(this.activeIndex);
    },
  },
};
</script>

<style>
  .press-key .ant-tabs-nav .ant-tabs-tab {
    padding: 2px 9px;
    margin: 0;
    border: 1px solid #F3F3F3;
  }
</style>
