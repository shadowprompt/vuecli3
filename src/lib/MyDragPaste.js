import DragPaste from './DragPaste';
export default class MyDragPaste extends DragPaste {
  constructor(opt) {
    super(opt);
    if (!DragPaste.instance) {
      DragPaste.instance = this;
    }
    return DragPaste.instance;
  }
  emit(name, payload) {
    console.log(name, payload);
  }
  static instance
}