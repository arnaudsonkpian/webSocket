import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
// import ToolbarComponent from '../components/ToolbarComponent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/toolbarComponent',
    //   name: 'toolbarComponent',
    //   component: ToolbarComponent,
    // },

  ],
})

export default router
