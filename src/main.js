import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created() {
    document.documentElement.setAttribute('lang', 'en');
  }
}).$mount('#app')
