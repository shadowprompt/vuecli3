<template>
  <div class="p-section_block__accessory">
    <button
      class="c-button c-button--outline c-button--small p-block_kit_button_element null--outline null--small"
      type="button"
    >
      <div class="p-plain_text_element" data-qa="bk-plain_text_element">
        <span dir="auto">{{ item.text.text }}</span>
      </div>
    </button>
    <div class="p-section_block__icons"></div>
  </div>
</template>

<script>
export default {
  name: "AccessoryButtonItem",
  props: {
    item: {
      type: Object
    }
  }
};
</script>

<style scoped></style>
