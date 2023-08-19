<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="item in priceimagesCount"
        :key="item"
        height="100%"
      >
        <v-col cols="10">
          <v-img
            :src="
              require(`@/assets/images/${pricePath}/${item}.${priceFormat}`)
            "
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </div>
    </div>
    <!-- Добавьте нужное количество слайдов -->
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  data() {
    const priceimagesCount = []
    for (let i = 1; i <= 14; i++) {
      priceimagesCount.push(`8-${i}`)
    }
    return {
      pricePath: 'cards',
      windowsWidth: window.innerWidth,
      priceFormat: 'png',
      priceimagesCount,
    }
  },
  mounted() {
    // Инициализация Swiper в методе mounted компонента
    this.mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical', // Установите вертикальное направление
      slidesPerView: 1, // Показывать только один слайд на экране
      spaceBetween: 10, // Расстояние между слайдами
      height: 580, // Высота каждого слайда
    })
  },
  beforeDestroy() {
    // Уничтожение Swiper при уничтожении компонента
    if (this.mySwiper) {
      this.mySwiper.destroy()
      this.mySwiper = null
    }
  },
}
</script>

<style scoped></style>
