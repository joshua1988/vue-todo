import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo';
import actions from './actions/index';
import getters from './getters/index';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    todo,
  },
  strict: true,
});
