import { createRouter, createWebHistory } from 'vue-router'
import Galery from "@/views/Galery.vue"

const routes = [
  {
    path: '/',
    redirect: '/gallery',
    meta: { title: 'Галерея' },
    // Пустой список работников, здесь они будут загружаться из хранилища
  },
  {

    path: '/gallery',
    meta: { title: 'Галерея' },
    component: Galery
    // Пустой список работников, здесь они будут загружаться из хранилища
  },
  // Параметризированный маршрут для отображения данных о документе
  // {
  //   path: '/document/:id',
  //   component: DocumentDetails,
  //   meta: { title: 'Документ' },
  //   props: true,
  // },
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
    document.title = 'Страница' // title по default
  }
})

export default router
