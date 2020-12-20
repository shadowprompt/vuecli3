<template>
  <div>
    <el-form :model="dataForm" :rules="rules">
      <el-form-item prop="number" ref="minRef">
        最小值<el-input-number v-model="dataForm.min" @blur="onBlur('maxRef')" @change="onBlur('maxRef')"></el-input-number>
      </el-form-item>
      <el-form-item prop="number" ref="maxRef">
        最大值<el-input-number v-model="dataForm.max" @blur="onBlur('minRef')" @change="onBlur('minRef')"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-select v-model="dataForm.type" clearable>
          <el-option :value="1" label="第一个"></el-option>
          <el-option :value="2" label="第二个"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Button } from 'element-ui'
export default {
  name: 'asyncValidate',
  data() {
    return {
      dataForm: {
        min: '',
        max: '',
        type: '',
      },
      rules: {
        number: [
          {
            validator: (rule, value, callback) => {
              console.log('触发校验', rule, this.dataForm.max, this.dataForm.min, value, callback);
              if (this.dataForm.max >= this.dataForm.min) {
                callback();
              } else {
                callback(new Error('最大值不能小于最小值'));
              }
            },
            trigger: ['blur', 'change'],
          },
        ],
      },
    };
  },
  mounted() {
    const el = new Vue({
      el: document.body,
      render(h) {
        return h(Button, {
          props: {
            type: 'primary',
            disabled: true
          }
        }, ['dada'])
      },
    });
    console.log('el -> ', el);
    // el.$mount()
  },
  methods: {
    onBlur(relatedRef) {
      const ref = this.$refs[relatedRef];
      ref && ref.onFieldBlur();
    },
  },
};
</script>
