import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '/src/assets/iconfont/font.css';
import '/src/assets/iconfont/dqgc.css';
import '/src/assets/iconfont/gjdw.css';

// 导入topology-vue组件
import topology from 'topology-vue';
// 需要导入topology-vue.css
import 'topology-vue/topology-vue.css';

Vue.use(topology);
// window.topology = topology;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
