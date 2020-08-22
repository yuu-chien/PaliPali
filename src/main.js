import Vue from 'vue';
import $ from 'jquery';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import ValidationProvider from 'vee-validate';
import App from './App.vue';
import thousandsFilter from './assets/filter/thousands';
import router from './router';

Vue.config.productionTip = false;

// 將 $ 註冊為全域符號
window.$ = $;
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.component('ValidationProvider', ValidationProvider);

Vue.filter('thousands', thousandsFilter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
