<template>
  <div class="p-section_block__accessory">
    <div class="c-search-select" data-qa="tPW=/" @click="onClick">
      <div
        class="c-select_input__wrapper c-select_input--small c-select_input--with_icon"
        role="group"
        data-qa="tPW=/-wrapper"
        style="width: 190px;"
      >
        <div class="c-select_input__input_container">
          <input
            aria-autocomplete="list"
            aria-expanded="false"
            aria-owns="tPW=/-2//G_listbox"
            aria-required="false"
            aria-labelledby=""
            aria-describedby=""
            autocomplete="off"
            data-qa="tPW=/-input"
            role="combobox"
            aria-invalid="false"
            class="c-input_text c-select_input"
            id="tPW=/-2//G"
            name="tPW=/-2//G"
            placeholder="Select an item"
            type="text"
            value=""
          />
          <div class="c-select_input__content" data-qa="tPW=/-input-content">
            <span class="c-select_input__content_text"></span>
          </div>
        </div>
        <div class="c-select_input__icon_container">
          <i
            class="c-icon c-icon--chevron-down c-icon--inline"
            type="chevron-down"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
    <select-options
      v-if="showOptions"
      :location="locationStyle"
    ></select-options>
    <div class="p-section_block__icons"></div>
  </div>
</template>

<script>
import SelectOptions from "../SelectOptions";
export default {
  name: "AccessoryStaticSelectItem",
  components: { SelectOptions },
  props: {
    item: {
      type: Object
    }
  },
  comments: {
    SelectOptions
  },
  data() {
    return {
      showOptions: false,
      locationStyle: {}
    };
  },
  methods: {
    onClick(e) {
      console.log(" ->dd ", e);
      this.showOptions = !this.showOptions;
      const { x, y } = this.$el.getBoundingClientRect();
      this.locationStyle = {
        left: x + "px",
        top: y - 24 + "px"
      };
    }
  }
};
</script>

<style scoped></style>
