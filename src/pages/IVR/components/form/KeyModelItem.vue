<template>
  <a-form-model-item :value="value" :model="model">
    <slot name="label">
      <span>
        按键:
      </span>
      <press-key :data="keyData" @change="onChange" multiple>
        <template slot-scope="scope">
          <a-select v-model="scope.item.type" @change="scope.change">
            <a-select-option
              v-for="(item, index) in optionList"
              :key="'option-' + index"
              :value="item"
              >
              {{ item }}
            </a-select-option>
          </a-select>
        </template>
      </press-key>
    </slot>
  </a-form-model-item>
</template>
<script>
import PressKey from '../PressKey';

export default {
  name: 'KeyModelItem',
  props: {
    model: {
      type: Object,
    },
    value: {
      type: [Array, Object],
    },
  },
  components: {
    PressKey,
  },
  data() {
    return {
      keyData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '*', '#'].map(item => ({
        label: item + '',
        value: item + '',
      })),
      optionList: ['a', 'b'],
    };
  },
  methods: {
    onChange(data) {
      console.log('change -> ', data);
      this.$emit('input', data);
    },
  },
};
</script>
