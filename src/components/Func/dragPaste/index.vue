<template>
  <section style="width: 300px;height: 200px">
    <div contenteditable="true" style="background-color: red;width: 300px;height: 200px">

    </div>
  </section>
</template>

<script>
import DragPaste from '../../../lib/MyDragPaste';
export default {
  name: 'dragPaste'
  created() {
    this.dragPaste = new DragPaste();
    this.paste = this.dragPaste.paste.bind(this.dragPaste);
  }
}
</script>