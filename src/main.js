// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#layout',
  router,
  template: '<Layout/>',
  components: { Layout }
})
