<template>
  <div
    class="aa-addressee"
    style="position: relative;border: 1px solid #999999"
  >
    <div
      class="aa-address-box clearfix"
      ref="tags"
      :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }"
    >
      <span class="tags-span">
        <span class="tag" v-for="item in selected" :key="getValueKey(item)">{{
          item.currentLabel
        }}</span>
      </span>
      <input
        ref="input"
        @focus="handleFocus"
        @keydown.enter.prevent="selectOption"
        v-model="query"
        :style="{
          'flex-grow': '1',
          width: inputLength / (inputWidth - 32) + '%',
          'max-width': inputWidth - 42 + 'px',
        }"
      />
    </div>
    <input ref="reference" @focus="handleFocus" @blur="handleBlur" />
    <ul class="scroll-container" v-show="visible" ref="scrollbar">
      <input-select-option
        :created="true"
        :value="query"
        v-if="showNewOption"
      ></input-select-option>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import InputSelectOption from './option';

const getValueByPath = function(object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};
const valueEquals = (a, b) => a === b;
export default {
  name: 'InputSelect',
  props: {
    value: {
      required: true,
    },
    multipleLimit: {
      type: Number,
      default: 0,
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    collapseTags: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    multiple: Boolean,
  },
  components: {
    InputSelectOption,
  },
  data() {
    return {
      options: [],
      cachedOptions: [],
      optionsCount: 0,
      filteredOptionsCount: 0,
      initialInputHeight: 0,
      inputLength: 20,
      inputWidth: 0,
      selected: [],
      query: '', // 当前input搜索词
      previousQuery: null,
      hoverIndex: -1,
      visible: false,
      softFocus: false,
      currentPlaceholder: '',
      cachedPlaceHolder: '',
    };
  },
  provide() {
    return {
      select: this,
    };
  },
  computed: {
    showNewOption() {
      const hasExistingOption = this.options
        .filter(option => !option.created)
        .some(option => option.currentLabel === this.query);
      return (
        this.filterable &&
        this.allowCreate &&
        this.query !== '' &&
        !hasExistingOption
      );
    },
  },
  mounted() {
    document.addEventListener('click', e => {
      console.log(' click -> ', e.target);
    });
    const input = this.$refs.reference;
    if (input) {
      this.initialInputHeight = input.getBoundingClientRect().height || 34;
    }
    this.resetInputHeight();
    window.$is = this;

    this.$nextTick(() => {
      if (input) {
        this.inputWidth = input.getBoundingClientRect().width;
      }
    });
    this.setSelected();
  },
  methods: {
    getValueKey(item) {
      if (
        Object.prototype.toString.call(item.value).toLowerCase() !==
        '[object object]'
      ) {
        return item.value;
      } else {
        return getValueByPath(item.value, this.valueKey);
      }
    },
    handleFocus() {
      this.visible = true;
    },
    handleBlur() {
      this.visible = false;
    },
    selectOption() {
      console.log('selectOption -> ');
      const targetVm = this.options[this.hoverIndex];
      if (targetVm) {
        this.handleOptionSelect(this.options[this.hoverIndex]);
      }
    },
    getValueIndex(arr = [], value) {
      const isObject =
        Object.prototype.toString.call(value).toLowerCase() ===
        '[object object]';
      if (!isObject) {
        return arr.indexOf(value);
      } else {
        const valueKey = this.valueKey;
        let index = -1;
        arr.some((item, i) => {
          if (
            getValueByPath(item, valueKey) === getValueByPath(value, valueKey)
          ) {
            index = i;
            return true;
          }
          return false;
        });
        return index;
      }
    },
    handleQueryChange(val) {
      if (this.previousQuery === val || this.isOnComposition) return;
      if (
        this.previousQuery === null &&
        (typeof this.filterMethod === 'function' ||
          typeof this.remoteMethod === 'function')
      ) {
        this.previousQuery = val;
        return;
      }
      this.previousQuery = val;
      this.$nextTick(() => {
        // if (this.visible) this.broadcast('ElSelectDropdown', 'updatePopper');
      });
      this.hoverIndex = -1;
      if (this.multiple && this.filterable) {
        this.$nextTick(() => {
          const length = this.$refs.input.value.length * 15 + 20;
          this.inputLength = this.collapseTags ? Math.min(50, length) : length;
          this.managePlaceholder();
          this.resetInputHeight();
        });
      }
      if (this.remote && typeof this.remoteMethod === 'function') {
        this.hoverIndex = -1;
        this.remoteMethod(val);
      } else if (typeof this.filterMethod === 'function') {
        this.filterMethod(val);
        // this.broadcast('ElOptionGroup', 'queryChange');
      } else {
        this.filteredOptionsCount = this.optionsCount;
        // this.broadcast('ElOption', 'queryChange', val);
        // this.broadcast('ElOptionGroup', 'queryChange');
      }
      if (
        this.defaultFirstOption &&
        (this.filterable || this.remote) &&
        this.filteredOptionsCount
      ) {
        this.checkDefaultFirstOption();
      }
    },
    managePlaceholder() {
      if (this.currentPlaceholder !== '') {
        this.currentPlaceholder = this.$refs.input.value
          ? ''
          : this.cachedPlaceHolder;
      }
    },
    handleOptionSelect(option, byClick) {
      if (this.multiple) {
        const value = (this.value || []).slice();
        const optionIndex = this.getValueIndex(value, option.value);
        if (optionIndex > -1) {
          value.splice(optionIndex, 1);
        } else if (
          this.multipleLimit <= 0 ||
          value.length < this.multipleLimit
        ) {
          value.push(option.value);
        }
        this.$emit('input', value);
        this.emitChange(value);
        if (option.created) {
          this.query = '';
          this.handleQueryChange('');
          this.inputLength = 20;
        }
        if (this.filterable) this.$refs.input.focus();
      } else {
        this.$emit('input', option.value);
        this.emitChange(option.value);
        this.visible = false;
      }
      this.isSilentBlur = byClick;
      this.setSoftFocus();
      if (this.visible) return;
      this.$nextTick(() => {
        // this.scrollToOption(option);
      });
    },
    setSoftFocus() {
      this.softFocus = true;
      const input = this.$refs.input || this.$refs.reference;
      if (input) {
        input.focus();
      }
    },
    emitChange(val) {
      if (!valueEquals(this.value, val)) {
        this.$emit('change', val);
      }
    },
    resetInputWidth() {
      this.inputWidth = this.$refs.reference.getBoundingClientRect().width;
    },
    resetInputHeight() {
      this.$nextTick(() => {
        if (!this.$refs.reference) return;
        let input = this.$refs.reference;
        const tags = this.$refs.tags;
        const sizeInMap = this.initialInputHeight || 40;
        input.style.height =
          this.selected.length === 0
            ? sizeInMap + 'px'
            : Math.max(
                tags
                  ? tags.clientHeight + (tags.clientHeight > sizeInMap ? 6 : 0)
                  : 0,
                sizeInMap,
              ) + 'px';
      });
    },
    setSelected() {
      let result = [];
      if (Array.isArray(this.value)) {
        this.value.forEach(value => {
          result.push(this.getOption(value));
        });
      }
      this.selected = result;
      this.$nextTick(() => {
        this.resetInputHeight();
      });
    },
    onOptionDestroy(index) {
      if (index > -1) {
        this.optionsCount--;
        this.filteredOptionsCount--;
        this.options.splice(index, 1);
      }
    },
    getOption(value) {
      let option;
      const isObject =
        Object.prototype.toString.call(value).toLowerCase() ===
        '[object object]';
      const isNull =
        Object.prototype.toString.call(value).toLowerCase() === '[object null]';
      const isUndefined =
        Object.prototype.toString.call(value).toLowerCase() ===
        '[object undefined]';

      for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
        const cachedOption = this.cachedOptions[i];
        const isEqual = isObject
          ? getValueByPath(cachedOption.value, this.valueKey) ===
            getValueByPath(value, this.valueKey)
          : cachedOption.value === value;
        if (isEqual) {
          option = cachedOption;
          break;
        }
      }
      if (option) return option;
      const label = !isObject && !isNull && !isUndefined ? value : '';
      let newOption = {
        value: value,
        currentLabel: label,
      };
      if (this.multiple) {
        newOption.hitState = false;
      }
      return newOption;
    },
    resetHoverIndex() {
      setTimeout(() => {
        if (!this.multiple) {
          this.hoverIndex = this.options.indexOf(this.selected);
        } else {
          if (this.selected.length > 0) {
            this.hoverIndex = Math.min.apply(
              null,
              this.selected.map(item => this.options.indexOf(item)),
            );
          } else {
            this.hoverIndex = -1;
          }
        }
      }, 300);
    },
  },
  watch: {
    value(val, oldVal) {
      if (this.multiple) {
        this.resetInputHeight();
        if (
          (val && val.length > 0) ||
          (this.$refs.input && this.query !== '')
        ) {
          this.currentPlaceholder = '';
        } else {
          this.currentPlaceholder = this.cachedPlaceHolder;
        }
        if (this.filterable && !this.reserveKeyword) {
          this.query = '';
          this.handleQueryChange(this.query);
        }
      }
      this.setSelected();
      if (this.filterable && !this.multiple) {
        this.inputLength = 20;
      }
    },
    visible(val) {
      if (!val) {
        // this.broadcast('ElSelectDropdown', 'destroyPopper');
        if (this.$refs.input) {
          this.$refs.input.blur();
        }
        this.query = '';
        this.previousQuery = null;
        this.selectedLabel = '';
        this.inputLength = 20;
        this.menuVisibleOnFocus = false;
        this.resetHoverIndex();
        this.$nextTick(() => {
          if (
            this.$refs.input &&
            this.$refs.input.value === '' &&
            this.selected.length === 0
          ) {
            this.currentPlaceholder = this.cachedPlaceHolder;
          }
        });
        if (!this.multiple) {
          if (this.selected) {
            if (
              this.filterable &&
              this.allowCreate &&
              this.createdSelected &&
              this.createdLabel
            ) {
              this.selectedLabel = this.createdLabel;
            } else {
              this.selectedLabel = this.selected.currentLabel;
            }
            if (this.filterable) this.query = this.selectedLabel;
          }

          if (this.filterable) {
            this.currentPlaceholder = this.cachedPlaceHolder;
          }
        }
      } else {
        // this.broadcast('ElSelectDropdown', 'updatePopper');
        if (this.filterable) {
          this.query = this.remote ? '' : this.selectedLabel;
          this.handleQueryChange(this.query);
          if (this.multiple) {
            this.$refs.input.focus();
          } else {
            if (!this.remote) {
              // this.broadcast('ElOption', 'queryChange', '');
              // this.broadcast('ElOptionGroup', 'queryChange');
            }

            if (this.selectedLabel) {
              this.currentPlaceholder = this.selectedLabel;
              this.selectedLabel = '';
            }
          }
        }
      }
      this.$emit('visible-change', val);
    },
  },
};
</script>

<style scoped>
.aa-address-box {
  position: absolute;
  padding-left: 0;
  min-height: 34px;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  white-space: normal;
}
.tags-span {
  display: contents;
}
.tags-span .tag {
  display: block;
  padding: 4px;
  border: 1px solid #999999;
  margin-left: 4px;
  white-space: nowrap;
}
</style>
