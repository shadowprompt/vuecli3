<template>
  <div class="p-section_block__accessory">
    <button
      class="c-button c-button--outline c-button--small p-block_kit_overflow_element__button null--outline null--small"
      type="button"
      aria-haspopup="true"
      @click="onClick"
      ref="trigger"
    >
      <i class="c-icon c-icon--ellipsis" type="ellipsis" aria-hidden="true"></i>
    </button>
      <select-options v-if="showOptions" :location="locationStyle"></select-options>
    <div class="p-section_block__icons"></div>
  </div>
</template>

<script>
    import SelectOptions from "../SelectOptions";
export default {
  name: "AccessoryOverflowItem",
    components: {
        SelectOptions
    },
    data() {
      return {
          showOptions: false,
          locationStyle: {},
      }
    },
    methods: {
        onClick(e) {
            console.log(" ->dd ", e);
            this.showOptions = !this.showOptions;
            const { x, y } = this.$refs.trigger.getBoundingClientRect();
            this.locationStyle = {
                left: x + "px",
                top: y - 24 + "px"
            };
        }
    }
};
</script>

<style scoped></style>
