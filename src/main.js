import Vue from 'vue'
import App from './App.vue'
import { vfmPlugin } from 'vue-final-modal'
import Vuelidate from 'vuelidate'

import store from './store/index'

Vue.config.productionTip = false

Vue.use(vfmPlugin)
Vue.use(Vuelidate)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
