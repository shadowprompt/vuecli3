<template>
  <section>
    <div class="button-list">
      <cus-button @click.native="onClick">Random</cus-button>
    </div>
    <section>
      <layout-block
        v-for="(block, index) in blocks"
        :item="block"
        :key="index"
      ></layout-block>
    </section>
  </section>
</template>

<script>
  import slackBlocks from '../json/slackBlocks';
  import LayoutBlock from "../components/LayoutBlock";
  import cusButton from "../components/cusButton";
  import "../assets/block-kit-builder.b16b93b.min.css";
  import "../assets/modern.vendor.50820df.min.css";
export default {
  name: 'slack.vue',
  components: {
    LayoutBlock,
    cusButton
  },
  data() {
    return {
      blocks: [],
    };
  },
  methods: {
    onClick() {
      this.blocks = parseInt((Math.random() * 100) % 2) ? slackBlocks.blocks1 : slackBlocks.blocks2;
    },
  },
};
</script>

<style scoped></style>
