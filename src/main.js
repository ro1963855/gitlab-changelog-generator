// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vSelect from 'vue-select';
import './assets/stylesheet/build/all.css';
import App from './App';
import router from './router';

export const bus = new Vue();

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('v-select', vSelect);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
