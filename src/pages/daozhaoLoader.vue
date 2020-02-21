
<template>
  <div>
    <el-input :value="32"></el-input>
  </div>
</template>
<script>
  import dz from '../dz/indexDZ.js';
  import dt from '../dz/dt.dz';
  import cc from '../dz/cc.js';
  export default {
    mounted() {
      console.warn('dz', dz);
      console.warn('dt', dt);
      console.warn('cc', cc);
      this.$nextTick('', 98)
    },
  }
</script>