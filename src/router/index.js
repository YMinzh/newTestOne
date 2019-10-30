import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from '../views/Add.vue'
import Show from '../views/Show.vue'
import Updata from '../views/Updata.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/',
    name: 'show',
    component: Show
  },
  {
    path: '/updata',
    name: 'updata',
    component: Updata
  }
]

const router = new VueRouter({
  routes
})

export default router
