const defaultOption = {
  acceptImages: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  isDropOver: false,
  divideMedia: false,
  dragCount: 0
};
export default class DragPaste {
  constructor(opt) {
    this.opt = {
      ...defaultOption,
      ...opt
    };
    // document.addEventListener('dragover', (e) => {
    //   console.log('98')
    //   e.preventDefault();
    //   this.dragOver(e);
    // });
  }
  onOverDragEnter(e) {
    this.opt.dragCount++;
    console.log('onOverDragEnter', e);
  }
  onOverDragLeave(e) {
    this.opt.dragCount--;
    console.log('onOverDragLeave', e);
    if (this.opt.dragCount < 1) {
      this.opt.isDropOver = false;
    }
  }
  dragEnter(e) {
    console.log('dragEnter', e);
    if (e.dataTransfer.items) {
      for (let t = 0; t < e.dataTransfer.items.length; t += 1) {
        if (e.dataTransfer.items[t].kind === "file") {
          this.opt.isDropOver = true;
        }
      }
    } else {
      for (let t = 0; t < e.dataTransfer.files.length; t += 1) {
        this.opt.isDropOver = true;
      }
    }
  }
  dragLeave(e) {
    console.log('onDragLeave', e);
    if (this.opt.dragCount === 0) {
      this.opt.isDropOver = false;
    }
  }
  dragOver(e) {
    e.preventDefault();
  }
  drop(e) {
    e.preventDefault();
    this.opt.dragCount = 0;
    this.opt.isDropOver = false;
    const images = [];
    const videos = [];
    const files = [];
    if (e.dataTransfer.items) {
      for (let o = 0; o < e.dataTransfer.items.length; o += 1) {
        if (e.dataTransfer.items[o].kind === 'file') {
          const file = e.dataTransfer.items[o].getAsFile();
          if (this.opt.divideMedia) {
            this.opt.acceptImages.includes(e.dataTransfer.items[o].type)
              ? images.push(file)
              : e.dataTransfer.items[o].type.startsWith('video/')
                ? videos.push(file)
                : files.push(file);
          } else {
            files.push(file);
          }
        }
      }
    } else {
      for (let n = 0; n < e.dataTransfer.files.length; n += 1) {
        const file = e.dataTransfer.files[n];
        files.push(file);
      }
    }
    console.log('images', images);
    console.log('videos', videos);
    console.log('files', files);
  }
  decodeHTML(e) {
    if (!e) return null;
    let t = /<!--\s*StartFragment\s*-->/gm.exec(e);
    if (t) {
      t = t.index + t[0].length;
    } else {
      const n = /<body.*?>/.exec(e) || { index: 0, 0: ''};
      t = n.index + n[0].length;
    }
    let n = /<!--\s*EndFragment\s*-->/gm.exec(e);
    if (n) {
      n = n.index;
    } else {
      n = (/<\/body.*?>/.exec(e) || { index: e.length }).index;
    }
    return e.slice(t, n);
  }
  isSingleLocalGifInHtml(e) {
    return this.isSingleLocalInHtml(e, 'gif');
  }
  isSingleLocalInHtml(e, t) {
    try {
      const textHtml = 'text/html';
      if (e && e.types && e.types.includes(textHtml)) {
        const html = e.getData(textHtml);
        const div = document.createElement('div');
        div.innerHTML = this.decodeHTML(html, false);
        if (div.children.length === 1) {
          const child = div.children[0];
          return (
            child.tagName.toLowerCase() === 'img' &&
            child.src &&
            child.src.toLowerCase().startsWith('file://') &&
            child.src.toLowerCase().endsWith(`.${t}`)
          );
        }
      }
    } catch (e) {
      console.error('isSingleLocalGifInHtml', e);
    }
    return false;
  }
  isSkipReadFile(e) {
    try {
      const textHtml = 'text/html';
      if (e && e.types && e.types.includes(textHtml)) {
        const html = e.getData(textHtml);
        const i = html.indexOf('>');
        if (i >= 0) {
          const e = html.substring(0, i);
          if (
            e.startsWith('<html') &&
            (e.includes(
              'xmlns:o="urn:schemas-microsoft-com:office:office"\r\nxmlns:x="urn:schemas-microsoft-com:office:excel"'
            ) ||
              e.includes(
                'xmlns:o="urn:schemas-microsoft-com:office:office"\r\nxmlns:dt='
              ))
          ) {
            return false;
          }
        }
      }
    } catch (e) {
      console.error('isSkipReadFile', e);
    }
    return false;
  }
  dealOneTable(e) {
    console.log('dealOneTable', e);
    const t = e.rows,
      n = [];
    for (let e = 0; e < t.length; e += 1) {
      const i = t.item(e);
      n[e] ||
        (n[e] = {
          cells: []
        }),
        (i.tagName === 'TH' ||
          i.tagName === 'th' ||
          (i.parentNode &&
            (i.parentNode.tagName === 'THEAD' ||
              i.parentNode.tagName === 'thead'))) &&
          (n[e].type = 'head');
      const { cells: o } = i;
      for (let t = 0, i = 0; t < o.length; t += 1, i += 1) {
        const r = o.item(t);
        for (; n[e].cells[i]; ) i += 1;
        if (
          ((n[e].cells[i] = {
            text: r.textContent
          }),
          r.tagName !== 'TD' &&
            r.tagName !== 'td' &&
            (n[e].cells[i].tagName = r.tagName),
          r.rowSpan > 1 && (n[e].cells[i].rowSpan = r.rowSpan),
          r.colSpan > 1 && (n[e].cells[i].colSpan = r.colSpan),
          r.rowSpan > 1)
        )
          for (let t = 1; t < r.rowSpan; t += 1)
            n[e + t] ||
              (n[e + t] = {
                type: 'row',
                cells: []
              }),
              (n[e + t].cells[i] = {
                type: 'ref',
                ref: {
                  r: e,
                  c: i
                }
              });
        if (r.colSpan > 1)
          for (let t = 1; t < r.colSpan; t += 1)
            for (let o = 0; o < r.rowSpan; o += 1)
              n[e + o].cells[i + t] = {
                type: 'ref',
                ref: {
                  r: e,
                  c: i
                }
              };
      }
    }
    return {
      rows: n,
      rowCount: t.length
    };
  }
  paste(e) {
    console.log('粘贴', e);
    let t = false;
    if (!e.clipboardData) return;
    if (this.isSingleLocalGifInHtml(e.clipboardData)) {
      return e.preventDefault();
    }
    const { items = [], types = [] } = e.clipboardData;
    const files = [];
    if (this.isSkipReadFile(e.clipboardData)) {
      t = false;
    } else {
      Array.prototype.forEach.call(items, t => {
        if (t.kind === 'file') {
          e.preventDefault();
          const file = t.getAsFile();
          file && files.push(file);
        }
      });
    }
    if (files.length > 0) {
      let e = 0;
      if (e >= files.length) return;
      const n = files[e];
      e += 1;
      console.log('uploading', n);
      // p.a.showModal("upload-image-modal", {
      //   file: n,
      //   src: void 0,
      //   saveCallback: () =>{
      //     d.a.sendImageMsg(n)
      //   },
      //     closedCallback: () =>{
      //     t()
      //   }
      // })
    } else {
      this.isSingleLocalInHtml(e.clipboardData, 'png') && e.preventDefault();
      types.forEach(n => {
        if (n === 'text/html') {
          const html = e.clipboardData.getData(n);
          let r = html;
          if (!t) {
            r = this.decodeHTML(html, false);
          }
          const s = document.createElement('html');
          s.innerHTML = r;
          const styleArr = s.getElementsByTagName('style');
          for (let i = 0; i < styleArr.length; i++) {
            styleArr[i].parentNode.removeChild(styleArr[i]);
          }
          // const c = [];
          // const tableArr = s.getElementsByTagName('table');
          // for (let i = 0; i < tableArr.length; i++) {
          //   const t = this.dealOneTable(tableArr[i]);
          //   t.rows.length > 0 && c.push(t);
          // }
          // if (c.length > 0) {
          //   const { inputText: e } = this;
          //   return void setTimeout(() => {
          //     const t = JSON.stringify(c);
              // n = E.a.getConfig().messageBodyMaxSize - 200;
              // f.a.getStringByteLengthInUTF8(t) < n ? p.a.showConfirm(this.$t("chat:isContinueTable"), this.$t("chat:isContinueTableMsg"), () =>{
              //   A.a.sendTableMsg(c),
              //   this.inputText = e
              // }) : p.a.showDialog({
              //   title: this.$t("chat:tableTooLarge"),
              //   text: this.$t("chat:tableTooLargeMsg")
              // })
            // }, 0);
          // }
          // const aArr = s.getElementsByTagName('a');
          // const aTargets = [];
          // for (let e = 0; e < aArr.length; e += 1) {
          //   const t = aArr[e];
          //   if (
          //     t.href &&
          //     t.innerText && t.innerText.trim() &&
          //     (t.href.startsWith('http://') ||
          //       t.href.startsWith('https://') ||
          //       t.href.startsWith('ftp://')) &&
          //     t.innerText !== t.href
          //   ) {
          //     const e = `( *| * ${Math.random()} * |*)`;
          //     aTargets.push({
          //       hash: e,
          //       text: t.innerText,
          //       href: t.href
          //     });
          //     t.innerHTML = e;
          //   }
          // }
          // if (aTargets.length > 0) {
          //   e.preventDefault();
          //   let t = s.innerText;
          //   aTargets.forEach(e => {
          //     t = t.replace(e.hash, `${e.text} (${e.href})`);
          //   });
          //   t = o.a.trim(t, "\n "),
          //     this.insertAtCursor(t)
          // }
        }
      });
    }
  }
}
