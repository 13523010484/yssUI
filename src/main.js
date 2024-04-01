// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import components from '../package/index.js';

components.forEach((component) => {
  Vue.component(component.name, component);
});

let operatingEnvironment = 'test'; //test 本地开发   master 构建发布
sessionStorage.setItem('operatingEnvironment', operatingEnvironment);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
