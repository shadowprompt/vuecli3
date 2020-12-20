<template>
  <li
    class="option-li"
    style="padding:2px;border: 1px solid red;display: block"
    @mouseenter="hoverItem"
  >
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script>
export default {
  name: 'InputSelectOption',
  inject: ['select'],
  props: {
    value: {
      required: true,
    },
    label: [String, Number],
    created: Boolean,
  },
  created() {
    this.select.options.push(this);
    this.select.cachedOptions.push(this);
    this.select.optionsCount++;
    this.select.filteredOptionsCount++;
  },
  beforeDestroy() {
    const { selected, multiple } = this.select;
    let selectedOptions = multiple ? selected : [selected];
    let index = this.select.cachedOptions.indexOf(this);
    let selectedIndex = selectedOptions.indexOf(this);

    // if option is not selected, remove it from cache
    if (index > -1 && selectedIndex < 0) {
      this.select.cachedOptions.splice(index, 1);
    }
    this.select.onOptionDestroy(this.select.options.indexOf(this));
  },
  computed: {
    currentLabel() {
      return this.label || (this.isObject ? '' : this.value);
    },
    currentValue() {
      return this.value || this.label || '';
    },
  },
  methods: {
    hoverItem() {
      this.select.hoverIndex = this.select.options.indexOf(this);
    },
  },
  watch: {
    value(val, oldVal) {
      console.log('watch val -> ', val, ':', oldVal);
    },
  },
};
</script>

<style scoped>
.option-li:hover {
  background-color: #00ffff;
}
</style>
