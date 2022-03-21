import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '/src/assets/iconfont/font.css';
import '/src/assets/iconfont/dqgc.css';
import '/src/assets/iconfont/gjdw.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
