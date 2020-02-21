<template>
  <div :class="theClass">
    <span>{{ item.text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    theClass() {
      const classMap = {
        mrkdwn: "p-mrkdwn_element",
        plain_text: "p-plain_text_element"
      };
      return classMap[this.item.type];
    }
  }
};
</script>
