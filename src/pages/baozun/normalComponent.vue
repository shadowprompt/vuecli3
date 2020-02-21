<template>
  <el-button v-bind="$attrs">按钮</el-button>
</template>

<script>
export default {
  mounted() {
    window.n = this;
  }
};
</script>
