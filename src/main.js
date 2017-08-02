// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index.vue'
import DetailPage from './pages/detail.vue'
import Count from './pages/detail/count.vue'
import Analysis from './pages/detail/analysis.vue'
import Forecast from './pages/detail/forecast.vue'
import Publish from './pages/detail/publish.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {

      path: '/detail',
      component: DetailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'publish',
          component: Publish
        },
        {
          path: 'count',
          component: Count
        },
        {
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'forecast',
          component: Forecast
        }
      ]
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
