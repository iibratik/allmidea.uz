<template>
  <swiper
    :slides-per-view="sliderPerView"
    :space-between="15"
    :navigation="true"
    :modules="modules"
  >
    <swiper-slide class="slide-card" v-for="image in images" :key="image">
      <img
        class="slider-img"
        :src="require(`@/assets/images/gallery/${image}.jpg`)"
        alt=""
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
export default {
  props:{
    sliderPerView:{
      type: Number,
    },
    format:{
      type: String,
    },
    images:{
      typeof: Array,
      require: true
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation], // Не забудьте добавить модуль Navigation здесь
    }
  },
}
</script>

<style lang="scss" scoped></style>
