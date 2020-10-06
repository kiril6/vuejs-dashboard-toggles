import Vue from 'vue'
import VueRouter from 'vue-router'
import Marketing from '../views/Marketing.vue'
import Finance from '../views/Finance.vue'
import Personnel from '../views/Personnel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/marketing',
    name: 'Marketing',
    component: Marketing
  },
  {
    path: '/finance',
    name: 'Finance',
    component: Finance
  },
  {
    path: '/personnel',
    name: 'Personnel',
    component: Personnel
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
