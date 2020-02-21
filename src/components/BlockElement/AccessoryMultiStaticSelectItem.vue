<template>
  <div class="p-section_block__accessory">
    <button
      @click="onClick"
      class="c-button c-button--outline c-button--small null--outline null--small"
      type="button"
    >
      <div class="p-plain_text_element" data-qa="bk-plain_text_element">
        <span dir="auto">{{ selectedText }}</span>
      </div>
    </button>
    <multi-select-options v-if="showOptions" :visible.sync="showOptions"></multi-select-options>
    <div class="p-section_block__icons"></div>
  </div>
</template>

<script>
import MultiSelectOptions from "../MultiSelectOptions";
export default {
  name: "AccessoryMultiStaticSelectItem",
  components: { MultiSelectOptions },
  comments: {
    MultiSelectOptions
  },
  data() {
    return {
      selected: [],
      showOptions: false
    };
  },
  computed: {
    selectedText() {
      return this.selected.length
        ? this.selected.length + " selected"
        : "Select an item";
    }
  },
  methods: {
    onClick(e) {
      console.log(" ->dd ", e);
      this.showOptions = !this.showOptions;
      // const { x, y } = this.$el.getBoundingClientRect();
      // this.locationStyle = {
      //   left: x + "px",
      //   top: y - 24 + "px"
      // };
    }
  }
};
</script>

<style scoped></style>
