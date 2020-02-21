import { expect } from "chai";
import VuexTester from 'vuex-tester';
import store from '../../src/store';
const instance  = new VuexTester(store.modules.sub, 'sub');
const {commit, dispatch, rootState, state, getters, rootGetters} = instance.update(store.modules.sub, 'sub');
const {rootMutationsMap, rootActionsMap} = instance;
console.log(' sub rootMutationsMap-> ', Object.getOwnPropertyNames(rootMutationsMap));
console.log(' sub rootActionsMap-> ', Object.getOwnPropertyNames(rootActionsMap));

describe("sub TEST mutations", async () => {
  // const state = JSON.parse(JSON.stringify(state));
  console.log('sub state -> ', state);
  console.log('sub rootState -> ', rootState);
  console.log('sub getters -> ', Object.getOwnPropertyNames(getters));
  console.log('sub rootGetters -> ', Object.getOwnPropertyNames(rootGetters));
  it("sub mutations MINUS", async function() {
    expect(state.cbd).eql(100);
    commit('MINUS', 10);
    expect(state.cbd).eql(90);
    console.log(' sub test getcbd-> ', getters.getdbd);
  });
});

describe("sub TEST actions", async () => {
  // const state = JSON.parse(JSON.stringify(state));
  it("sub actions _minus", async function() {
    expect(state.cbd).eql(90);
    dispatch('_minus', 10);
    expect(state.cbd).eql(80);
  });
});