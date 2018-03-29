import Vue from 'vue';
import Router from 'vue-router';
import ChangelogGenerator from '@/components/ChangelogGenerator';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChangelogGenerator',
      component: ChangelogGenerator,
    },
  ],
});
