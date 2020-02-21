<template>
  <div class="p-actions_block__action">
    <button
      class="c-button c-button--outline-primary c-button--small p-block_kit_button_element null--outline-primary null--small"
      v-if="item.type === 'button'"
      @click="onClick"
    >
      <text-item v-if="item.text" :item="item.text"></text-item>
    </button>
    <accessory-static-select-item v-else :item="item"></accessory-static-select-item>
  </div>
</template>

<script>
import { axios } from "../utils";
import TextItem from "./TextItem";
import AccessoryStaticSelectItem from './BlockElement/AccessoryStaticSelectItem'
export default {
  name: "ActionItem",
  props: {
    item: {
      type: Object
    }
  },
  components: { TextItem,AccessoryStaticSelectItem },
  methods: {
    onClick() {
      console.log("点击了 -> ", this.item);
      axios.post("/actions.do", {
        actions: [
          {
            ...this.item
          }
        ]
      });
    }
  }
};
</script>

<style scoped></style>
