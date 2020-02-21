<template>
  <div class="ReactModalPortal">
    <div
      class="ReactModal__Overlay ReactModal__Overlay--after-open c-dialog"
      ref="overlay"
    >
      <div
        class="ReactModal__Content ReactModal__Content--after-open c-dialog__content"
        ref="content"
        tabindex="-1"
        role="dialog"
        aria-label="Select an item"
        data-qa="dialog"
      >
        <div class="c-dialog__header" data-qa="dialog_header">
          <h1 class="c-dialog__title overflow_ellipsis">Select an item</h1>
          <button
            class="c-button-unstyled c-icon_button c-icon_button--light c-dialog__close"
            type="button"
            aria-label="Close"
            data-qa="dialog_close"
          >
            <i class="c-icon c-icon--times" type="times" aria-hidden="true"></i>
          </button>
        </div>
        <div
          class="c-dialog__body c-dialog__body--slack_scrollbar"
          data-qa="dialog_body"
        >
          <div class="multi_select_element_container">
            <div
              class="c-multi-select"
              data-qa="yG1u"
              @click="onClick"
              ref="trigger"
            >
              <div
                class="c-multi_select_input c-multi_select_input--initial"
                style="width: 100%; max-height: 92px;"
              >
                <span
                  class="c-multi_select_input__tokens"
                  role="combobox"
                  aria-owns="yG1u-V/X_listbox"
                  tabindex="-1"
                ></span
                ><input
                  id="yG1u-V/X"
                  type="text"
                  size="1"
                  class="c-multi_select_input__input c-multi_select_input__input--initial"
                  placeholder="Select an item"
                  role="combobox"
                  autocomplete="off"
                  aria-autocomplete="list"
                  aria-expanded="false"
                  aria-owns="yG1u-V/X_listbox"
                  data-qa="yG1u-input"
                  aria-label="Select an item"
                  value=""
                />
                <div
                  class="c-multi_select_input__announcer"
                  aria-live="assertive"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <select-options
          v-if="showOptions"
          :location="locationStyle"
        ></select-options>
        <div
          class="c-dialog__footer c-dialog__footer--has_buttons"
          data-qa="dialog_footer"
        >
          <div class="c-dialog__footer_buttons">
            <button
              class="c-button c-button--outline c-button--medium c-dialog__cancel null--outline null--medium"
              type="button"
              data-qa="dialog_cancel"
            >
              Cancel</button
            ><button
              class="c-button c-button--primary c-button--medium c-dialog__go null--primary null--medium"
              type="button"
              data-qa="dialog_go"
            >
              Confirm
              <div
                class="c-infinite_spinner c-button-loading__spinner c-button--loading_spinner--hidden c-infinite_spinner--medium c-infinite_spinner--blue"
              >
                <svg class="c-infinite_spinner__spinner" viewBox="0 0 78 78">
                  <circle
                    class="c-infinite_spinner__bg"
                    cx="50%"
                    cy="50%"
                    r="35"
                  ></circle>
                  <circle
                    class="c-infinite_spinner__path"
                    cx="50%"
                    cy="50%"
                    r="35"
                  ></circle></svg
                ><svg
                  class="c-infinite_spinner__spinner c-infinite_spinner__tail"
                  viewBox="0 0 78 78"
                >
                  <circle
                    class="c-infinite_spinner__path"
                    cx="50%"
                    cy="50%"
                    r="35"
                  ></circle>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectOptions from "./SelectOptions";
export default {
  name: "MultiSelectOptions",
  components: { SelectOptions },
  props: ["visible"],
  data() {
    return {
      locationStyle: {},
      showOptions: false
    };
  },
  comments: {
    SelectOptions
  },
  mounted() {
    this.$refs.overlay &&
      this.$refs.overlay.addEventListener("click", e => {
        if (this.$refs.content.contains(e.target)) {
          e.stopPropagation();
        } else {
          this.$emit("update:visible", false);
        }
      });
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
