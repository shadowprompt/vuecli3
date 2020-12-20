<template>
  <div>
    This a child component {{index}} - {{ id }}
    <button @click="onClick">test modifier sync</button>
  </div>
</template>

<script>
export default {
  name: 'childComp',
  props: ['id', 'index', 'show'],
  computed: {
    showBackup() {
      return this.show;
    },
  },
  mounted() {
    console.log('mounted -> id = ', this.id, 'index = ', this.index);
  },
  methods: {
    onClick() {
      this.$emit('update:show', !this.show);
    },
  },
  watch: {
    showBackup: {
      // immediate: true,
      handler(val) {
        console.log('watch showBackup -> ', val);
      },
    }
  },
};
</script>
