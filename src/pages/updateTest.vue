<template>
  <div>
    <child-comp v-if="obj.id" index="one" :id="obj.id"></child-comp>
    <child-comp v-if="testObj.id" index="two" :id="testObj.id" :show.sync="childShow"></child-comp>
    <button @click="updateData">Update</button>
  </div>
</template>

<script>
//  切换路由测试child-comp组件打印的id, 使用vuex的组件two会使用上次的值
import childComp from '@/components/childComp';
export default {
  name: 'setUpdateTest',
  components: {
    childComp
  },
  data() {
    return {
      obj: {},
      childShow: true,
    };
  },
  computed: {
    testObj() {
      return this.$store.state.testObj;
    },
  },
  mounted() {
    this.updateData()
  },
  methods: {
    updateData() {
      setTimeout(() => {
        const timestamp = Date.now();
        this.obj = {
          id: timestamp,
        };
        this.$store.commit('UPDATE_OBJ', {
          id: timestamp,
        })
      }, 200);
    }
  }
};
</script>

