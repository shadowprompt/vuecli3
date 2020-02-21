
<script>
  export default {
    name: 'UnexDatePicker',
    mounted() {
      console.log('mounted', this);
    },
    data(){
      return {
        unexValue: null,
      }
    },
    functional: true,
    render(h, ctx) {
      console.log(ctx)

      // 传销下面的属性给createElem函数的第二个参数
      // class \ style \ attrs \ props \ domProps \ on \ nativeOn \ directives \ scopedSlots \ slot \ key \ ref

      // 将staticClass 和 class 合并
      // todo => 需要考虑 class="reset" :class="reset: false" 冲突的情况
      let classObject;
      let staticClass = {}
      let bindClass = {}

      ctx.data.staticClass && ctx.data.staticClass.split(' ').forEach(item => staticClass[item] = true);
      !ctx.data.class
        ? {}
        : isArray(ctx.data.class)
        ? ctx.data.class.forEach(item => bindClass[item] = true)
        : (bindClass = ctx.data.class);

      classObject = Object.assign({}, staticClass, bindClass)

      // 将styleObject 和 style 合并
      // todo => 需要考虑 style="width: 10px" :style="{width: '20px'}" 冲突的情况
      let staticStyle = ctx.data.staticStyle || {}
      let bindStyle = ctx.data.style || {}
      let styleObject = Object.assign({}, staticStyle, bindStyle)

      // slot \ key \ ref \ on \ nativeOn \ attrs \ props
      let { slot, key, ref, on, nativeOn, attrs, props } = ctx.data

      //console.log(directives)

      // directives \ scopedSlots

      return h(
        'el-upload',
        {
          class: classObject,
          style: styleObject,
          ...{ slot, key, ref, on, nativeOn, attrs, props },
        },
        ctx.children
      )
    },
    // props:['value'],
    // render(h){
    //   const self = this;
    //   return h('el-date-picker',
    //     {
    //       props : {
    //         ...this.$attrs,
    //         value: this.unexValue = this.value
    //       },
    //       on: {
    //           ...this.$listeners,
    //           input: function (event) {
    //             console.log('input ', event);
    //             self.unexValue = event;
    //             self.$emit('input', event)
    //           }
    //       }
    //     },
    //     ((slots, res) => {
    //       Object.keys(slots).forEach(item => res.push(h('template', {slot: item}, slots[item])));
    //       return res;
    //     })(this.$slots, [])
    //   );
    // },
  }
</script>
