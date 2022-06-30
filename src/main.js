import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'

Vue.config.productionTip = false
import Blank from './layouts/BlankLayouts.vue'
import Navbar from './layouts/NavbarLayouts.vue'
Vue.component('blank-layout',Blank)
Vue.component('navbar-layout',Navbar)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
