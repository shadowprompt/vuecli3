<template>
  <section>
    <el-tree
      :data="data6"
      node-key="id"
      @node-click="handleNodeClick"
      default-expand-all
      draggable
    >
    </el-tree>
    <unex-switch
      v-model="status"
      class="reset reset2"
      :class="{ reset: false }"
      :style="{ width: '200px', color: 'blue' }"
      inactive-text="清空表格"
      @click.native="clickHdl('native')"
      @change="clickHdl('change')"
    >
      <div>nihao</div>
    </unex-switch>
    <unex-date-picker
      action="dfadf"
      type="date"
      placeholder="选择日期"
      v-model="input"
      style="width: 100%;"
    >
      dfad
    </unex-date-picker>
    <!-- <my-dialog level="a" :class="{aaa: true}" :visible="dialogVisible" @close="handleClose">default content
      <div slot="footer">slot footer</div>
      <div slot="title">slot title!!!!</div>
    </my-dialog> -->
  </section>
</template>

<script>
import UnexSwitch from "./UnexSwitch";
import UnexDatePicker from "./UnexDatePicker";
import normalComponent from "./normalComponent";
export default {
  components: {
    "unex-date-picker": UnexDatePicker,
    "unex-switch": UnexSwitch,
    normalComponent
  },
  data() {
    return {
      input: "",
      status: true,
      dialogVisible: true,
      props: {
        label: "name",
        children: "zones"
      },
      count: 1,
      data6: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2",
              children: [
                {
                  id: 11,
                  label: "三级 3-2-1"
                },
                {
                  id: 12,
                  label: "三级 3-2-2"
                },
                {
                  id: 13,
                  label: "三级 3-2-3"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    inputHdl(value) {
      console.log("input ", value);
      this.status = value;
    },
    clickHdl(msg) {
      console.log(msg);
    },
    handleClose() {
      this.dialogVisible = false;
      console.log("close", arguments);
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: "region1" }, { name: "region2" }]);
      }
      if (node.level > 3) return resolve([]);

      var hasChild;
      if (node.data.name === "region1") {
        hasChild = true;
      } else if (node.data.name === "region2") {
        hasChild = false;
      } else {
        hasChild = Math.random() > 0.5;
      }

      setTimeout(() => {
        var data;
        if (hasChild) {
          data = [
            {
              name: "zone" + this.count++
            },
            {
              name: "zone" + this.count++
            }
          ];
        } else {
          data = [];
        }

        resolve(data);
      }, 500);
    }
  }
};
</script>
