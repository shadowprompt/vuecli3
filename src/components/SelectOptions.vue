<template>
  <div class="ReactModalPortal">
    <div
      class="ReactModal__Content ReactModal__Content--after-open popover"
      tabindex="-1"
      role="presentation"
      style="position: absolute; outline: none; transition-duration: 200ms;"
      :style="location"
    >
      <div role="presentation">
        <div
          class="c-select_options_list__wrapper"
          data-qa="tPW=/-options-list-wrapper"
        >
          <div
            class="c-select_options_list"
            data-qa="tPW=/-options-list"
            id="tPW=/-2//G_listbox"
            aria-label="Select an item"
            aria-multiselectable="false"
            role="listbox"
            tabindex="-1"
          >
            <div
              aria-label=""
              aria-readonly="true"
              class="ReactVirtualized__Grid ReactVirtualized__List c-select_options_list__virtual_list"
              role="presentation"
              style="box-sizing: content-box; direction: ltr; height: 84px; position: relative; width: 322px; will-change: transform; overflow: hidden; padding: 12px 0px;"
            >
              <div
                class="ReactVirtualized__Grid__innerScrollContainer"
                role="presentation"
                style="width: auto; height: 84px; max-width: 322px; max-height: 84px; overflow: visible; position: relative;"
              >
                <div
                  aria-selected="false"
                  class="c-select_options_list__option"
                  data-qa="tPW=/_option_0"
                  id="tPW=/-2//G_option_0"
                  role="option"
                  tabindex="-1"
                  style="height: 28px; left: 0px; position: absolute; top: 0px; width: 100%;"
                >
                  <span class="c-select_options_list__option_label"
                    ><div class="p-block-kit-select_options">
                      <div
                        class="p-plain_text_element"
                        data-qa="bk-plain_text_element"
                      >
                        <span dir="auto">Choice 1</span>
                      </div>
                    </div></span
                  >
                </div>
                <div
                  aria-selected="false"
                  class="c-select_options_list__option"
                  data-qa="tPW=/_option_1"
                  id="tPW=/-2//G_option_1"
                  role="option"
                  tabindex="-1"
                  style="height: 28px; left: 0px; position: absolute; top: 28px; width: 100%;"
                >
                  <span class="c-select_options_list__option_label"
                    ><div class="p-block-kit-select_options">
                      <div
                        class="p-plain_text_element"
                        data-qa="bk-plain_text_element"
                      >
                        <span dir="auto">Choice 2</span>
                      </div>
                    </div></span
                  >
                </div>
                <div
                  aria-selected="false"
                  class="c-select_options_list__option"
                  data-qa="tPW=/_option_2"
                  id="tPW=/-2//G_option_2"
                  role="option"
                  tabindex="-1"
                  style="height: 28px; left: 0px; position: absolute; top: 56px; width: 100%;"
                >
                  <span class="c-select_options_list__option_label"
                    ><div class="p-block-kit-select_options">
                      <div
                        class="p-plain_text_element"
                        data-qa="bk-plain_text_element"
                      >
                        <span dir="auto">Choice 3</span>
                      </div>
                    </div></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectOptions",
  props: ['location'],
  mounted() {
    document.body.append(this.$el);
  }
};
</script>

<style scoped></style>
