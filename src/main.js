import Vue from 'vue'
import App from './App.vue'

import { vfmPlugin } from 'vue-final-modal'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(vfmPlugin)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
