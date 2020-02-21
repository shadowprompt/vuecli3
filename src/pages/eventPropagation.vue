<template>
  <section>
    <div id="abc" ref="abc">
      abc
    </div>
    <section>
      <div id="efg" ref="efg">
        efg
        {{ abc }}
      </div>
    </section>
    <button @click="handleClick">取消</button>
  </section>
</template>

<script>
const myConsole = (...res) => {
  console.log(...res);
};
export default {
  name: "Test",
  components: {},
  data() {
    return {
      inputTxt: "",
      abc: []
    };
  },
  mounted() {
    this.$refs.abc.addEventListener("mousedown", e => {
      myConsole("abc 冒泡 mousedown", e);
      // e.stopPropagation();
      e.preventDefault();
    });
    this.$refs.abc.addEventListener("mouseup", e => {
      myConsole("abc 冒泡 mouseup", e);
      e.stopPropagation();
      e.preventDefault();
    });
    this.$refs.abc.addEventListener("click", e => {
      myConsole("abc 冒泡 click", e);
      // e.stopPropagation();
      // e.preventDefault();
    });
    this.$refs.abc.addEventListener("click", e => {
      myConsole("abc2 冒泡 click", e);
      // e.stopPropagation();
      // e.preventDefault();
    });

    document.addEventListener("mousedown", e => {
      myConsole("document 冒泡 mousedown", e);
    });
    document.addEventListener("mouseup", e => {
      myConsole("document 冒泡 mouseup", e);
    });
    document.addEventListener(
      "click",
      e => {
        myConsole("捕获 click", e); // 捕获最先触发，如果此时阻止冒泡的话，冒泡的事件都无法执行
        // e.stopPropagation();
        // e.preventDefault();
      },
      true
    );
  },
  methods: {
    fn(e) {
      myConsole("document 冒泡 click", e);
      this.abcFn();
    },
    abcFn() {
      this.abc = [Date.now()];
    },
    handleClick() {
      myConsole("取消点击");
      document.removeEventListener("click", e => {
        myConsole("冒泡 click", e);
      });
      document.removeEventListener("click", this.fn);
    }
  }
};
</script>

<style>
#abc {
  width: 200px;
  height: 200px;
  background: green;
}
</style>
