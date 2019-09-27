import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes';

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }    
  }  
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
