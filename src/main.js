import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
//import './permission' // permission control
//import '@/icons'
import messageUtil from '@/utils/message'
import '@/style/element-ui.scss'
import 'element-ui/lib/theme-chalk/display.css';
import '@/style/common.scss'

// 全局方法挂载

Vue.prototype.$messageUtil=messageUtil
//Vue.component('Pagination', Pagination)

//import selectFilter from '@/filter/selectFilter'
//Vue.filter('selectFilter', selectFilter)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
