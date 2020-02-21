<template>
  <div>
    <div class="p-block_kit_renderer__block_wrapper">
      <div :class="theClass">
        <!-- section -->
        <template v-if="item.type === 'section'">
          <accessory-image-item
            v-if="item.accessory && item.accessory.type === 'image'"
            :item="item.accessory"
          ></accessory-image-item>
          <accessory-button-item
            v-if="item.accessory && item.accessory.type === 'button'"
            :item="item.accessory"
          ></accessory-button-item>
          <accessory-static-select-item
            v-if="item.accessory && item.accessory.type === 'static_select'"
            :item="item.accessory"
          ></accessory-static-select-item>
          <accessory-multi-static-select-item
            v-if="
              item.accessory && item.accessory.type === 'multi_static_select'
            "
            :item="item.accessory"
          ></accessory-multi-static-select-item>
          <accessory-overflow-item
            v-if="item.accessory && item.accessory.type === 'overflow'"
            :item="item.accessory"
          ></accessory-overflow-item>
          <accessory-date-picker-item
            v-if="item.accessory && item.accessory.type === 'datepicker'"
            :item="item.accessory"
          ></accessory-date-picker-item>
          <div
            class="p-section_block_text_content"
            v-if="item.text || item.fields"
          >
            <div class="p-section_block__text" v-if="item.text">
              <TextItem :item="item.text"></TextItem>
            </div>
            <div class="p-section_block__fields" v-if="item.fields">
              <div
                class="p-field_section"
                v-for="(field, index) in item.fields"
                :key="index"
              >
                <text-item :item="field"></text-item>
              </div>
            </div>
          </div>
        </template>
        <!-- divider -->
        <!-- image -->
        <image-block v-if="item.type === 'image'" :item="item"></image-block>
        <!-- actions -->
        <div
          class="p-actions_block_elements"
          v-if="item.type === 'actions' && item.elements"
        >
          <action-item
            v-for="(action, index) in item.elements"
            :item="action"
            :key="index"
          ></action-item>
        </div>
        <!-- context -->
        <div
          class="p-context_block_element"
          v-if="item.type === 'context' && item.elements"
        >
          <text-item
            v-for="(text, index) in item.elements"
            :item="text"
            :key="index"
          >
          </text-item>
        </div>
        <!-- Input -->
        <!-- File -->
      </div>
    </div>
  </div>
</template>
<script>
import TextItem from "./TextItem";
import ActionItem from "./ActionItem";
import AccessoryImageItem from "./BlockElement/AccessoryImageItem";
import AccessoryButtonItem from "./BlockElement/AccessoryButtonItem";
import AccessoryStaticSelectItem from "./BlockElement/AccessoryStaticSelectItem";
import AccessoryMultiStaticSelectItem from "./BlockElement/AccessoryMultiStaticSelectItem";
import AccessoryDatePickerItem from "./BlockElement/AccessoryDatePickerItem";
import AccessoryOverflowItem from "./BlockElement/AccessoryOverflowItem";
import ImageBlock from "./ImageBlock";
export default {
  name: "LayoutBlock",
  props: ["item"],
  components: {
    ImageBlock,
    TextItem,
    ActionItem,
    AccessoryImageItem,
    AccessoryButtonItem,
    AccessoryStaticSelectItem,
    AccessoryMultiStaticSelectItem,
    AccessoryOverflowItem,
    AccessoryDatePickerItem
  },
  data() {
    return {};
  },
  computed: {
    theClass() {
      const classMap = {
        section: "p-section_block",
        divider: "p-divider_block",
        actions: "p-actions_block",
        context: "p-context_block",
        image: "p-image_block"
      };
      return classMap[this.item.type];
    }
  }
};
</script>
