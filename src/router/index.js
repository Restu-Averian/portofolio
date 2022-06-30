import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import CertifView from '../views/CertifView.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      layout:'navbar'
    }
  },
 
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta:{
      layout:'navbar'
    }
  },
 
  {
    path: '/certificates',
    name: 'certificates',
    component: CertifView,
    meta:{
      layout:'navbar'
    }
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
    meta:{
      layout:'blank'
    }
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
