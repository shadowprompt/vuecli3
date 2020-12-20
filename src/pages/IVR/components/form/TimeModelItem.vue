<template>
  <a-form-model-item :value="value" :model="model">
    <slot name="label">
      <span>
        时间选择:
      </span>
      <press-key :data="keyData" @change="onChange">
        <template slot-scope="scope">
          <a-time-picker v-model="scope.item.startTime" @change="scope.change"></a-time-picker> 至
          <a-time-picker v-model="scope.item.endTime" @change="scope.change"></a-time-picker>
        </template>
      </press-key>
    </slot>
  </a-form-model-item>
</template>
<script>
import PressKey from '../PressKey';
export default {
  name: 'TimeModelItem',
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
      keyData: [
        {
          label: '周一',
          value: 1,
        },
        {
          label: '周二',
          value: 2,
        },
        {
          label: '周三',
          value: 3,
        },
        {
          label: '周四',
          value: 4,
        },
        {
          label: '周五',
          value: 5,
        },
        {
          label: '周六',
          value: 6,
        },
        {
          label: '周日',
          value: 7,
        },
      ],
    };
  },
  methods: {
    onChange(data) {
      this.$emit('input', data);
    }
  },
};
</script>
