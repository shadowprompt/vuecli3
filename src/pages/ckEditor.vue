<template>
  <section>
    <div id="testEditor">
      <p>this is a <span class="text-huge">underline</span>
        <span style="text-decoration-line: underline;">下划线1</span>
        分隔下<span style="text-decoration: underline">下划线2</span>
      </p>
      <p>this is a <span class="text-huge">bold</span>
        <span style="font-weight: bold">加粗1</span>
        分隔下<b>加粗2</b>
      </p>
      <p>This is a simple box:</p>

      <section class="simple-box">
        <h1 class="simple-box-title">Box title</h1>
        <div class="simple-box-description">
          <p>The description goes here.</p>
          <ul>
            <li>It can contain lists,</li>
            <li>and other block elements like headings.</li>
          </ul>
        </div>
      </section>
    </div>
    <!--    <iframe id="testFrame" @load="onload"> </iframe>-->
  </section>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
// import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
//
import SimpleBox from '../ckComponent/simplebox/simplebox';
import Placeholder from '../ckComponent/placeholder/placeholder';

import BoldPlugin from '../ckComponent/system/bold';
import UnderLinePlugin from '../ckComponent/system/underline';
import FontSizePlugin from '../ckComponent/system/fontsize';


export default {
  name: 'test',
  data() {
    return {
      editor: ClassicEditor,
    };
  },
  mounted() {
    // this.printPlugins();
    this.createEditor(document.querySelector('#testEditor'));
    window.vm = this;
  },
  methods: {
    onload() {
      console.log('onload -> ');
      const iframe = document.querySelector('iframe');
      this.createEditor(iframe.contentDocument.body);
    },
    onReady(editor) {
      // window.ee = editor
      // console.log('ready -> ', editor);
    },
    createEditor(node) {
      ClassicEditor.create(node, {
        plugins: [
          EssentialsPlugin,
          HeadingPlugin,
          ListPlugin,
          BoldPlugin,
          ItalicPlugin,
          LinkPlugin,
          ParagraphPlugin,
          SimpleBox,
          Placeholder,
          UnderLinePlugin,
          FontSizePlugin,
        ],
        toolbar: {
          items: [
            'heading',
            'bold',
            '|',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            'imageUpload',
            'blockQuote',
            'undo',
            'redo',
            'simplebox',
            'placeholder',
            'underline',
            'fontsize',
          ],
        },
        placeholderConfig: {
          types: ['date', 'color', 'first name', 'surname'], // ADDED
        },
      })
        .then(editor => {
          console.log(editor);
          window.editor = editor;
          CKEditorInspector.attach(editor);
        })
        .catch(error => {
          console.error(error);
        });
    },
    printPlugins() {
      const plugins = ClassicEditor.builtinPlugins.map(
        plugin => plugin.pluginName,
      );
      console.log('plugins -> ', plugins);
      console.log(
        ' -> ',
        Array.from(ClassicEditor.ui.componentFactory.names()),
      );
    },
  },
};
</script>
<style>
.simple-box {
  padding: 10px;
  margin: 1em 0;

  background: rgba(0, 0, 0, 0.1);
  border: solid 1px hsl(0, 0%, 77%);
  border-radius: 2px;
}

.simple-box-title,
.simple-box-description {
  padding: 10px;
  margin: 0;

  background: #fff;
  border: solid 1px hsl(0, 0%, 77%);
}

.simple-box-title {
  margin-bottom: 10px;
}
</style>
