<template>
  <div class="hello">
    <ul>
      <li
        v-for="(blockItem, index) in list"
        :key="index"
        :blockItem="blockItem"
      >
        {{ index }}
      </li>
    </ul>
    <el-select v-model="selectValue"
               multiple filterable allow-create default-first-option>
      <el-option v-for="item in selectOptions" :key="item" :label="item" :value="item"></el-option>
    </el-select>

    ---

    <input-select id="id4t_sis_targets" ref="sis0" v-model='arr'
                  multiple filterable allow-create
    >
      <input-select-option v-for="item in arr" :key="item" :value="item">{{item}}</input-select-option>
    </input-select>
    <ul>
      <li
        v-for="(blockItem, index) in list"
        :key="index"
        :blockItem="blockItem"
      >
        {{ index }}
      </li>
    </ul>
    {{ a.a }}
    {{ abc(a.a) }}

    <iframe id="editorIframe" style="width: 100%;height: 100%;border:none">
    </iframe>

    <section>
      <p>
        <label>
          <span>account</span>
          <input v-model="form.account"></input>
        </label>
      </p>
      <p>
        <label>
          <span>password</span>
          <input v-model="form.password"></input>
        </label>
      </p>
      <p>
        <label>
          <span><img :src="captchaUrl" @click="timestamp = Date.now()"></span>
          <input v-model="form.captcha"></input>
        </label>
      </p>
      <p><button @click="onSubmit">登录</button></p>
    </section>
    <my-address></my-address>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { axios } from '../utils';
import myAddress from '../components/Address'
import InputSelect from '../components/input-select'
import InputSelectOption from '../components/input-select/option'

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    myAddress,
    InputSelect,
    InputSelectOption,
  },
  data() {
    return {
      form: {
        account: '18918121373',
        password: 'UBVJdWPoJP4sr4dmcN6CxQ==',
        captcha: '',
      },
      timestamp: Date.now(),
      list: [2, 5, { id: 3 }],
      a: {
        a: 110
      },
      blocks: [],
      selectValue: [],
      selectOptions: ['1', '123', '1222'],
      arr: [],
    };
  },
  computed: {
    ...mapState(["listData"]),
    abc() {
      const first = this.list[0];
      return function(ok) {
        console.log("ok", ok);
        return ok + "_" + first;
      };
    },
    captchaUrl() {
      return `https://select.pdgzf.com/api/v1.0/gzf/captcha/image/captcha.png?height=47&width=135&date=${this.timestamp}`
    },

  },
  mounted() {
    window.vm = this;
    this.$nextTick(() => this.$store.commit("ADD_ITEM", 99));
    document.addEventListener("click", e => {
      console.log(" 点击-> ", e.target);
    });
    const iframe = document.querySelector('#editorIframe');
    if (iframe) {
      iframe.onload = () => {
        console.log('iframe onload');
      };
    }
    console.log('mounted', iframe);
  },
  methods: {
    async onSubmit() {
      const res = await axios.post('/api/gzf', {
        ...this.form,
      });
      console.log(' res-> ', res);
    },
    handleEnter() {
      console.log(' enter-> ', arguments);
    },
  },
  watch: {
    listData: {
      deep: true,
      handler() {
        console.log("watch list", arguments, arguments[0] === arguments[1]);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
