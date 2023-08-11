<template>
  <swiper
    :slides-per-view="slidesPerView"
    :space-between="15"
    :navigation="true"
    :loop="true"
    :autoplay="{ delay: 4000, pauseOnMouseEnter: true }"
    :modules="modules"
    class="gallery-slider"
  >
    <swiper-slide class="slide-card" v-for="image in images" :key="image">
      <img
        class="slider-img"
        :class="imageClass"
        :src="require(`@/assets/images/${path}/${image}.${format}`)"
        alt="slider-img"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, } from 'swiper/vue'
import { Autoplay, Navigation} from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay,], // Не забудьте добавить модуль Navigation здесь
    }
  },
  props:{
    images:{
      typeof: Array,
      require: true
    },
    format:{
      typeof: String,
    },
    path:{
      typeof: String,
    },
    slidesPerView:{
      typeof: Number,
      required: true,
    },
    imageClass:{
      type: String,
    }
  },
}
</script>

