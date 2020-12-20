<template>
  <a-modal :visible="value" title="Basic Modal"
           :width="width"
           class="2323" :body-style="bodyStyle"
           wrapClassName="cct" :dialogStyle="dialogStyle"
           :footer="null"
           @cancel="onCancel"
  >
    <slot></slot>
  </a-modal>
</template>

<script>
  export default {
    props: {
      width: {
        type: [Number, String],
      },
      value: {
        type: Boolean,
      }
    },
    data() {
      return {
        bodyStyle: {},
        dialogStyle: {
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          paddingBottom: 0,
        }
      };
    },
    mounted() {
      const clientHeight = document.documentElement.clientHeight;
      this.bodyStyle = {
        height: clientHeight - 55 + 'px',
      }
    },
    methods: {
      onCancel(e) {
        this.$emit('update:value', false);
      }
    }
  }
</script>
