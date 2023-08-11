import { createRouter, createWebHistory } from 'vue-router'
import Galery from '@/views/Galery.vue'
import Test from '@/views/Test.vue'
import WaterHeaters from "@/views/WaterHeaters.vue";
import GasWaterHeaters from "@/views/GasWaterHeaters.vue"
import GasBoilers from "@/views/GasBoilers";
import ElectricBoilers from "@/views/ElectricBoilers.vue";
import PriceList from "@/views/PriceList.vue";

const routes = [
  {
    path: '/',
    meta: { title: 'Галерея' },
    component: Galery,
  },
  {
    path: '/test',
    meta: { title: 'Тест' },
    component: Test,
  },
  {
    path: '/water-heaters',
    meta: { title: 'ВОДОНАГРЕВАТЕЛИ' },
    component: WaterHeaters,
  },
  {
    path: '/gas-water-heaters',
    meta: { title: 'ГАЗОВЫЕ ВОДОНАГРЕВАТЕЛИ' },
    component: GasWaterHeaters,
  },
  {
    path: '/gas-boilers',
    meta: { title: 'ГАЗОВЫЕ КОТЛЫ ' },
    component: GasBoilers,
  },
  {
    path: '/electric-boilers',
    meta: { title: 'ЭЛЕКТРИЧЕСКИЕ КОТЛЫ ' },
    component: ElectricBoilers,
  },
  {
    path: '/price-list',
    meta: { title: 'ПРАЙС ЛИСТ' },
    component: PriceList,
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
