<template>
  <div>
    <div id="testPdf">
      <span style="color: red">How are you?</span>
      <span style="color: green">你好吗？</span>
      <div>dada</div>
    </div>
    <iframe id="testIf" width="80%" height="400"></iframe>
  </div>
</template>

<script>
import { jsPDF } from 'jspdf/dist/jspdf.es';
export default {
  name: 'js2pdf',
  data() {
    return {
      doc: new jsPDF('p', 'mm', 'a4'),
    };
  },
  mounted() {
    // Default export is a4 paper, portrait, using millimeters for units
    // const doc = new jsPDF();
    const doc = this.doc;
    console.log('jsPDF -> ', jsPDF, doc);
    // doc.text('Hello world!', 10, 10);
    doc.setFont('times', 'italic');
    doc.html(document.querySelector('#testPdf'), {
      callback: function (dc) {
        console.log('cb -> ', arguments, dc.output('blob'));
        const blobPdf = new Blob([dc.output('blob')], { type: 'application/pdf' });
        console.log('blobPdf -> ', blobPdf);
        const blobUrl = URL.createObjectURL(blobPdf);
        document.querySelector('#testIf').src = blobUrl;
        console.log('blobUrl -> ', blobUrl);
      }
    });

    // doc.save('a4.pdf');
    window.vm = this;

    // var string = doc.output('datauristring');
    // var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
    // var x = window.open();
    // x.document.open();
    // x.document.write(embed);
    // x.document.close();


  },
};
</script>
