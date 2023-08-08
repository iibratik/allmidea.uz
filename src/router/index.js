import { createRouter, createWebHistory } from 'vue-router'
import Galery from '@/views/Galery.vue'

const routes = [
  {
    path: '/',
    meta: { title: 'Галерея' },
    component: Galery,
    // Пустой список работников, здесь они будут загружаться из хранилища
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Глобальный навигационный хук `afterEach`
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Галерея' // title по default
  }
})

export default router
