import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueNumber from 'vue-number-animation'

import { BootstrapVue } from 'bootstrap-vue'


Vue.use(BootstrapVue)
Vue.use(VueNumber)
import './assets/styles/app.scss'


Vue.directive('infocus', {
  bind () {
  },
  isLiteral: true,
  inserted: (el, binding) => {
    let f = () => {
      let rect = el.getBoundingClientRect()
      let inView = (
        rect.width > 0 &&
        rect.height > 0 &&
        rect.bottom >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)-170
      )
      if (inView) {
        el.classList.add(binding.value)
        window.removeEventListener('scroll', f)
      }
 
    }
    window.addEventListener('scroll', f)
    f()
  }
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
