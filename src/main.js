import Vue from 'vue'
import App from './App.vue'
import checkView from 'vue-check-view'


Vue.config.productionTip = false

Vue.use(checkView);

new Vue({
  render: h => h(App),
}).$mount('#app')
