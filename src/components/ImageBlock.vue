<template>
  <div class="p-image_block_container">
    <div class="p-image_block_title">
      <div
        class="p-plain_text_element p-image_block__title"
      >
        <span dir="auto">image1</span>
      </div>
      <span
        class="c-message_attachment__media_trigger c-message_attachment__media_trigger--caption"
        data-stringify-ignore="true"
        >(1 MB)<button
          class="c-button-unstyled c-expandable_trigger"
          type="button"
          title="collapse"
          aria-expanded="true"
        >
          <i
            class="c-deprecated-icon c-icon--caret-down c-deprecated-icon--inherit"
            type="caret_down"
            aria-hidden="true"
          ></i></button
      ></span>
    </div>
    <div
      class="p-image_block_container__expandable_container"
    >
      <div
        class="c-aspect_box__outer c-message_attachment__image_container"
        style="width: 400px;"
      >
        <div class="c-aspect_box__inner" style="padding-top: 100%;">
          <div class="c-aspect_box__content">
            <a
              target="_blank"
              class="c-link c-message_attachment__image"
              :title="item.alt_text"
              :href="item.image_url"
              rel="noopener noreferrer"
              :style="`background-image: url('${item.image_url}');`"
              >
              {{ item.image_url }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBlock",
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
