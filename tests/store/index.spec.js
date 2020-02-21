import { expect } from "chai";
import VuexTester from 'vuex-tester';
import store from '../../src/store';
const instance  = new VuexTester(store);
const {commit, dispatch, rootState, state, getters, rootGetters} = instance.update(store, '');
const {rootMutationsMap, rootActionsMap} = instance;
console.log(' rootMutationsMap-> ', Object.getOwnPropertyNames(rootMutationsMap));
console.log(' rootActionsMap-> ', Object.getOwnPropertyNames(rootActionsMap));

describe("TEST mutations", async () => {
  // const state = JSON.parse(JSON.stringify(state));
  console.log('state -> ', state);
  console.log('rootState -> ', rootState);
  console.log('getters -> ', Object.getOwnPropertyNames(getters));
  console.log('rootGetters -> ', Object.getOwnPropertyNames(rootGetters));
  it("mutations ADD", async function() {
    expect(state.abc).eql(1);
    commit('ADD', 10);
    expect(state.abc).eql(11);
  });
  // it("mutations sub/MINUS", async function() {
  //   expect(rootState.sub.cbd).eql(100);
  //   commit('sub/MINUS', 10);
  //   expect(rootState.sub.cbd).eql(90);
  // });
});

describe("TEST actions", async () => {
  // const state = JSON.parse(JSON.stringify(state));
  it("actions _add", async function() {
    expect(state.abc).eql(11);
    dispatch('_add', 10);
    expect(state.abc).eql(21);
  });
});

describe("TEST getters", async () => {
  // const state = JSON.parse(JSON.stringify(state));
  it("getters getabc", async function() {
    console.log(' ok2-> ', Object.getOwnPropertyNames(rootGetters));
    expect(state.abc).eql(21);

    expect(rootGetters.getabc).eql(22);
    expect(rootGetters['sub/sss/getxyz']).eql(56);
  });
});