// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.prototype.$axios = axios
import Admin from './admin'


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Admin },
  template: '<Admin/>'
})
