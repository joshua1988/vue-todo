import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions/index';
import getters from './getters/index';
import todo from './modules/todo';
import ui from './modules/ui';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    todo,
    ui,
  },
  // strict: true,
});
