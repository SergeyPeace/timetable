import Vue from 'vue'
import VueRouter from 'vue-router'
import GroupPage from "@/pages/GroupPage.vue";
import InstitutesPage from "@/pages/InstitutesPage.vue";
// import MainPage from "@/pages/MainPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue"

Vue.use(VueRouter)

const routes = [
  // {name: 'main', component: MainPage, path: '/'},
  {name: 'institutes', component: InstitutesPage, path: '/'},
  {name: 'group', component: GroupPage, path: '/group/:group'},
  {name: 'notFound', component: NotFoundPage, path: '*'},
]

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
