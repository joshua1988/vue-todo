import Vue from 'vue';
import Router from 'vue-router';
import TodoContainer from '@/containers/TodoContainer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoContainer',
      component: TodoContainer,
    },
  ],
});
