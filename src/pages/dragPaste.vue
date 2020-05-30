<template>
  <section
    class="outer-container"
    contenteditable="true"
    @drop="onDrop"
    @dragenter="onDragEnter"
    @dragleave="onDragLeave"
    @dragover="onDragOver"
  >
    <div class="inner-container">
      {{ opt }}
      <div style="width: 149px;height: 120px;background-color: cornflowerblue">
        988
      </div>
    </div>
    <div
      class="drop-over"
      v-if="opt.isDropOver"
      @dragenter="onOverDragEnter"
      @dragleave="onOverDragLeave"
    >
      文件拖至此处
    </div>
  </section>
</template>

<script>
import DragPaste from '../lib/MyDragPaste';
export default {
  name: 'dragPaste',
  data() {
    return {
      isOfficialAccount: false,
      opt: {}
    };
  },
  created() {
    this.dragPaste = new DragPaste();
    this.opt = this.dragPaste.opt;
    this.paste = this.dragPaste.paste.bind(this.dragPaste);
  },
  mounted() {
    this.$el.addEventListener("paste", this.paste);
  },
  methods: {
    onOverDragEnter(e) {
      this.dragPaste.onOverDragEnter(e);
    },
    onOverDragLeave(e) {
      this.dragPaste.onOverDragLeave(e);
    },
    onDragEnter(e) {
      this.dragPaste.dragEnter(e);
    },
    onDragLeave(e) {
      this.dragPaste.dragLeave(e);
    },
    onDragOver(e) {
      this.dragPaste.dragOver(e);
    },
    onDrop(e) {
      this.dragPaste.drop(e);
    }
  }
};
</script>

<style>
.outer-container {
  box-sizing: border-box;
  width: 300px;
  height: 400px;
  position: relative;
}
*[contenteditable="false"] {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: red;
  padding: 8px 10px;
}
*[contenteditable="true"] {
  border: 1px solid #589cfa;
  outline: none;
}
.drop-over {
  box-sizing: border-box;
  top: 0;
  left: 0;
  border: 10px dashed cornflowerblue;
  position: absolute;
  background-color: rgba(244, 220, 3, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
