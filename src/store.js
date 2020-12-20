export default {
  namespace: true,
  state: {
    abc: 1,
    listData: [],
    testObj: {},
  },
  mutations: {
    ADD(state, payload) {
      state.abc = state.abc + payload;
    },
    ADD_ITEM(state, payload) {
      state.listData.push(payload);
    },
    UPDATE_OBJ(state, payload) {
      state.testObj = payload;
    }
  },
  actions: {
    _add(context, params) {
      console.log("context -> ", context);
      context.commit("ADD", params);
    }
  },
  getters: {
    getabc(state, getters, rootState, rootGetters) {
      console.log(
        "getters getabc-> ",
        state,
        rootState,
        Object.getOwnPropertyNames(getters),
        Object.getOwnPropertyNames(rootGetters)
      );
      return state.abc + 1;
    }
  },
  modules: {
    sub: {
      namespace: true,
      state: {
        cbd: 100
      },
      mutations: {
        MINUS(state, payload) {
          console.log(" MINUS arg-> ", arguments);
          state.cbd = state.cbd - payload;
          console.log(" MINUS result-> ", state.cbd);
        }
      },
      actions: {
        _minus(context, params) {
          console.log("context -> ", context);
          context.commit("MINUS", params);
        }
      },
      getters: {
        getcbd(state, getters, rootState, rootGetters) {
          console.log(
            "getters getcbd-> ",
            state,
            rootState,
            Object.getOwnPropertyNames(getters),
            Object.getOwnPropertyNames(rootGetters)
          );
          return state.cbd - 1;
        }
      },
      modules: {
        sss: {
          namespace: true,
          state: {
            xyz: 55
          },
          mutations: {
            PLUS(state, payload) {
              state.xyz = state.xyz - payload;
            }
          },
          getters: {
            getxyz(state) {
              console.log("getters getxyz-> ", arguments);
              return state.xyz + 1;
            }
          }
        }
      }
    }
  }
};
