<template>
  <section>
    <section>
      <a-tabs default-active-key="1" @change="tabChange">
        <a-tab-pane key="1" tab="线上">
          <div id="container1"></div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="测试">
          <div id="container2"></div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="草稿">
          <div id="container3"></div>
        </a-tab-pane>
      </a-tabs>
    </section>
    <side-bar :value.sync="modalShow" :width="400">
      <a-tabs default-active-key="sideBar1">
        <a-tab-pane key="sideBar1" tab="基本信息">
          <label>基本信息</label>
          <a-form-model layout="vertical" :model="form">
            <a-form-model-item label="名称">
              <a-input v-model="form.name" placeholder="input placeholder" />
            </a-form-model-item>
            <a-form-model-item label="类型">
              <a-select v-model="form.type">
                <a-select-option value="1">1</a-select-option>
                <a-select-option value="2">2</a-select-option>
              </a-select>
            </a-form-model-item>
            <label>语音播报</label>
              <voice-mode-item v-model="form.voices" :model="form"></voice-mode-item>
            <label>规则设定</label>
            <a-form-model-item label="采集时间（秒）">
              <a-select v-model="form.time">
                <a-select-option value="1">1</a-select-option>
                <a-select-option value="2">2</a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item label="最大异常次数">
              <a-select v-model="form.count">
                <a-select-option value="1">1</a-select-option>
                <a-select-option value="2">2</a-select-option>
              </a-select>
            </a-form-model-item>
            <a-button type="primary">输出操作</a-button>
          </a-form-model>
        </a-tab-pane>
        <a-tab-pane key="sideBar2" tab="输出操作">
          <time-model-item v-model="form.date"></time-model-item>
          <key-model-item v-model="form.keys"></key-model-item>
        </a-tab-pane>
      </a-tabs>
    </side-bar>
  </section>
</template>

<script>
import G6 from '@antv/g6';
import SideBar from './components/SideBar';
import VoiceModeItem from './components/form/VoiceModeItem';
import TimeModelItem from './components/form/TimeModelItem';
import KeyModelItem from './components/form/KeyModelItem';

const data = {
  id: '0',
  icon: 'phone',
  name: '300607',
  des: '金融礼品卡流程',
  children: [
    {
      id: '00',
      icon: 'phone',
      name: '单按键采集',
      des: '流程开始及按键拨号',
      children: [
        {
          id: '000',
          icon: 'avtar',
          name: '转人工',
          des: '转酒店人工',
          remark: '多次异常',
        },
        {
          id: '01',
          icon: 'avtar',
          name: '转人工',
          des: '转酒店人工',
          remark: '按键错误',
        },
        {
          id: '02',
          icon: 'phone_income',
          name: '重播话术',
          des: '重播并返回',
          remark: '按键超时',
        },
        {
          id: '03',
          icon: 'phone_income',
          name: '测试',
          des: '重播并返回',
        },
      ],
    },
  ],
};

const defaultStateStyles = {
  default: {
    fill: 'yellow',
  },
  hover: {
    stroke: '#1989fa',
    // lineWidth: 8
  },
  selected: {
    lineWidth: 1.5,
    stroke: '#1989fa',
    fill: '#edf6ff',
  },
};

const defaultNodeStyle = {
  // fill: "#91d5ff",
  // stroke: "#40a9ff",
  // radius: 5
};

const defaultEdgeStyle = {
  stroke: '#bbc3ce',
  // endArrow: {
  //     path: 'M 0,0 L 12, 6 L 9,0 L 12, -6 Z',
  //     fill: '#91d5ff',
  //     d: -20
  // }
};

const defaultLayout = {
  type: 'compactBox',
  direction: 'TB',
  getId: function getId(d) {
    return d.id;
  },
  getHeight: function getHeight() {
    return 16 + 20;
  },
  getWidth: function getWidth() {
    return 16 + 100;
  },
  getVGap: function getVGap() {
    return 40 + 20;
  },
  getHGap: function getHGap() {
    return 70;
  },
};

const defaultLabelCfg = {
  style: {
    // fill: "#000",
    // fontSize: 12
  },
};

const ICON_MAP = {
  phone:
    'http://prototype.site.ctripcorp.com/git/Platform/offline/master/im-CS/dest/img/im-client/icon-toast-success.png',
  avtar:
    'http://prototype.site.ctripcorp.com/git/Platform/offline/master/im-CS/dest/img/im-client/icon-toast-fail.png',
};

const config = {
  name: {
    // color: '#2b2d30',
    color: 'rgba(43, 45, 48, 0.8)',
  },
  des: {
    color: '#696c73',
  },
  remark: {
    border: '#bbc3ce',
    backgroundColor: '#fff',
    color: '#2b2d30',
  },
};
export default {
  name: 'IVRNew',
  components: { SideBar, VoiceModeItem, TimeModelItem, KeyModelItem },
  data() {
    return {
      graph: null,
      graphMap: {
        1: null,
        2: null,
        3: null,
      },
      tabKey: 1,
      modalShow: false,
      form: {
        voices: [
          {
            id: '001',
            name: '名1',
            desc: '描述1',
          },
          {
            id: '002',
            name: '名2',
            desc: '描述2',
          },
        ],
      },
    };
  },
  computed: {
    currentGraph() {
      return this.graphMap[this.tabKey];
    },
  },
  created: function() {},
  mounted: function() {
    this.globalRegister();
    this.render();
    this.eventRegister();
  },
  methods: {
    getGraph() {
      const { tabKey } = this;
      if (!this.currentGraph) {
        const containerId = 'container' + tabKey;
        console.log('containerId -> ', containerId);
        const width = document.getElementById(containerId).scrollWidth;
        // const height = document.getElementById('container').scrollHeight || 500;
        const height = 500;
        this.graphMap[tabKey] = new G6.TreeGraph({
          container: containerId,
          width,
          height,
          linkCenter: true,
          modes: {
            default: [
              // 'drag-canvas',
              // 'zoom-canvas',
              'click-select',
            ],
          },
          defaultNode: {
            type: 'card-node',
            size: [200, 60],
            style: defaultNodeStyle,
            labelCfg: defaultLabelCfg,
          },
          defaultEdge: {
            type: 'flow-line',
            style: defaultEdgeStyle,
          },
          nodeStateStyles: defaultStateStyles,
          edgeStateStyles: defaultStateStyles,
          layout: defaultLayout,
        });
      }
      return this.currentGraph;
    },
    render() {
      const graph = this.getGraph();
      graph.data(data);
      graph.render();
      graph.fitView();
    },
    globalRegister() {
      G6.registerEdge('flow-line', {
        draw(cfg, group) {
          const startPoint = cfg.startPoint;
          const endPoint = cfg.endPoint;
          const { style } = cfg;
          return group.addShape('path', {
            attrs: {
              stroke: style.stroke,
              // endArrow: style.endArrow,
              path: [
                // ['M', startPoint.x, startPoint.y + (cfg.sourceNode._cfg.bboxCache.height)/2],
                // ['L', startPoint.x, (startPoint.y + endPoint.y) / 2],
                // ['L', endPoint.x, (startPoint.y + endPoint.y) / 2 ],
                // ['L', endPoint.x, endPoint.y - (cfg.targetNode._cfg.bboxCache.height)/2],
                [
                  'M',
                  startPoint.x,
                  startPoint.y + cfg.sourceNode._cfg.bboxCache.height / 2,
                ],
                ['L', startPoint.x, (startPoint.y + endPoint.y) / 2],
                ['L', endPoint.x, (startPoint.y + endPoint.y) / 2],
                [
                  'L',
                  endPoint.x,
                  endPoint.y - cfg.targetNode._cfg.bboxCache.height / 2,
                ],
              ],
            },
          });
        },
      });
      G6.registerNode(
        'card-node',
        {
          drawShape: function drawShape(cfg, group) {
            const r = 2;
            const keyShape = group.addShape('rect', {
              attrs: {
                x: 0,
                y: 0,
                width: 200,
                height: 60,
                stroke: 'rgba(0,0,0, 0.15)',
                fill: '#ffffff',
                shadowColor: '#ff0000',
                radius: r,
              },
              name: 'main-box',
              draggable: true,
            });
            const mainBBox = keyShape.getBBox();

            // left icon
            group.addShape('image', {
              attrs: {
                x: 8,
                y: 12,
                height: 16,
                width: 16,
                cursor: 'pointer',
                img: ICON_MAP[cfg.icon] || ICON_MAP['phone'],
                // fill: color,
              },
              name: 'node-icon',
            });
            // name text
            const nameText = group.addShape('text', {
              attrs: {
                textBaseline: 'top',
                x: 30,
                y: 14,
                lineHeight: 20,

                text: cfg.name,
                fill: config.name.color,
              },
              name: 'name',
            });
            const nameBBox = nameText.getBBox();
            // nameText.attr({
            //     x: (mainBBox.width - nameBBox.width) / 2,
            // });

            // des text
            const desText = group.addShape('text', {
              attrs: {
                textBaseline: 'top',
                x: 30,
                y: 36,
                lineHeight: 20,
                text: cfg.des,
                fill: config.des.color,
              },
              name: `des-title`,
            });
            desText.attr({
              x: nameBBox.x,
            });

            if (cfg.remark) {
              // remak text
              const remarkRect = group.addShape('rect', {
                attrs: {
                  // x: 0,
                  // y: 0,
                  width: 70,
                  height: 20,
                  // stroke: "#f2f2f2",
                  stroke: config.remark.border,
                  fill: config.remark.backgroundColor,
                  color: config.remark.color,
                  radius: 10,
                },
                name: 'remark-box',
                draggable: true,
              });
              const remarkBBox = remarkRect.getBBox();
              remarkRect.attr({
                x: (mainBBox.width - remarkBBox.width) / 2,
                y: -15 - remarkBBox.height,
              });
              const remarkText = group.addShape('text', {
                attrs: {
                  textBaseline: 'top',
                  text: cfg.remark,
                  fill: 'rgba(0,0,0, 0.4)',
                  // fill: '#ff0000'
                },
                name: 'remark-text',
              });
              const remarkTextBBox = remarkText.getBBox();
              remarkText.attr({
                x: (mainBBox.width - remarkTextBBox.width) / 2,
                y: -10 - remarkBBox.height,
              });
            }
            // keyShape.toFront();
            return keyShape;
          },
        },
        'single-node',
      );
    },
    eventRegister() {
      const graph = this.getGraph();
      const self = this;
      graph.on('click', ev => {
        console.log('click ', ev);
        const shape = ev.target;
        const item = ev.item;
        if (item) {
          const type = item.getType();
        }
      });

      graph.on('node:mouseenter', evt => {
        const { item } = evt;
        console.log('mouseenter', item, evt);
        graph.setItemState(item, 'hover', true);
      });

      graph.on('node:mouseleave', evt => {
        const { item } = evt;
        graph.setItemState(item, 'hover', false);
      });

      graph.on('node:click', evt => {
        const { item, target } = evt;
        const targetType = target.get('type');
        const name = target.get('name');
        console.log('node:click', evt);
        self.modalShow = true;
      });

      graph.on('nodeselectchange', e => {
        // 当前操作的item
        // 当前操作后，所有被选中的 items 集合
        // 当前操作时选中(true)还是取消选中(false)

        console.log('nodeselectchange', e.target, e.selectedItems, e.select);
      });
    },
    tabChange(key) {
      console.log('key', key);
      this.tabKey = key;
      this.$nextTick(() => {
        this.render();
        this.eventRegister();
      });
    },
  },
};
</script>
