<template>
  <a-form-model-item v-model="value" :model="model">
    <slot name="label">
      <span>
        语音内容:
      </span>
      <span v-for="(item, index) in value" :key="'span-' + index">{{item.name}}</span>
    </slot>
    <p v-for="(item, index) in value" :key="index">
      <a-tag :key="item.id" :closable="true" @close="onClose(item)">{{item.desc}}</a-tag>
    </p>
    <a-button type="dashed" block>+ 添加语音</a-button>
  </a-form-model-item>
</template>
<script>
  export default {
    name: 'VoiceModelItem',
    props: {
      model: {
        type: Object,
      },
      value: {
        type: Array,
      }
    },
    methods: {
      onClose(value) {
        const tags = this.value.filter(item => item !== value);
        console.log('tags -> ', tags);
        this.$emit('input', tags);
      }
    }
  }
</script>
