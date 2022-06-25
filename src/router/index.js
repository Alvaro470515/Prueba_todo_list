import Vue from 'vue'
import VueRouter from 'vue-router'
import tareaActual from '../components/tareaActual.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Tareas',
    component: tareaActual
  },
]

const router = new VueRouter({
  routes
})

export default router
