import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo';
import actions from './actions/index';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    todo,
  },
  strict: true,
});
