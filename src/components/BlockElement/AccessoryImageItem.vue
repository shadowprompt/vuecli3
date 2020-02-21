<template>
  <div class="p-section_block__accessory">
    <div
      class="p-section_block__image"
      :title="item.alt_text"
      :alt="item.alt_text"
      :style="`background-image: url('${item.image_url}');`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "AccessoryImageItem",
  props: {
    item: {
      type: Object
    }
  }
};
</script>

<style scoped></style>
