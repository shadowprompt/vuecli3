<template>
  <div class="p-section_block__accessory">
    <div class="p-block_kit_date_picker" ref="trigger" @click="onClick">
      <button
        class="c-button c-button--outline c-button--small p-block_kit_date_picker__datepicker_trigger null--outline null--small"
        type="button"
        id="9vWQW-hNZ/G"
        aria-haspopup="true"
        style="min-width: 190px;"
      >
        <div
          class="p-plain_text_element p-block_kit_date_picker__date_readout"
          data-qa="bk-plain_text_element"
        >
          <span dir="auto">04/28/1990</span>
        </div>
        <i
          class="c-icon p-block_kit_date_picker__calendar_icon c-icon--calendar"
          type="calendar"
          aria-hidden="true"
        ></i>
      </button>
    </div>
    <date-picker v-if="showOptions" :location="locationStyle"></date-picker>
    <div class="p-section_block__icons"></div>
  </div>
</template>

<script>
import DatePicker from "../Modal/DatePicker";
export default {
  name: "AccessoryDatePickerItem",
  components: { DatePicker },
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
