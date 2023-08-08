<template>
  <div style="margin-top: 100px">
    <v-card-title class="gallery-title"
      >КАТАЛОГ ПРОДУКЦИИ {{ new Date().getFullYear() }}</v-card-title
    >
    <div class="gallery__sub-titles">
      <v-card-text
        v-for="subTitle in subTitles"
        :key="subTitle"
        class="gallery__sub-title"
        >{{ subTitle }}</v-card-text
      >
    </div>
    <v-row>
      <template v-for="(image) in imageLayout" :key="image">
        <v-col v-if="image.name" class="gallery-image" :cols="image.cols">
          <v-img
            :src="require(`@/assets/images/gallery/${image.name}`)"
            :cover="image.cover"
            :height="image.height ? image.height : '100%'"
          ></v-img>
        </v-col>
      </template>
    </v-row>
    <swiper
      :slides-per-view="2"
      :space-between="30"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide v-for="slide in imagesCount" :key="slide">
        <img
          class="slider-img"
          :src="require(`@/assets/images/gallery/${slide}.jpg`)"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      imageLayout: [
        { cols: 6, name: '1.jpg', cover: true },

        {
          cols: 6,
          name: '2.jpg',
          cover: false,
        },
        { cols: 4, name: '3.jpg' },
        { cols: 4, name: '5.jpg' },
        { cols: 4, name: '4.jpg', cover: false },
        { cols: 6, name: '6.jpg', cover: true },
        { cols: 6, name: '8.jpg', cover: false },
        { cols: 4, name: '7.jpg', cover: false },
        { cols: 4, name: '9.jpg', cover: false },
        { cols: 4, name: '2.jpg', cover: false },
      ],
      imagesCount: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      subTitles: [
        'ЭЛЕКТРИЧЕСКИЕ ВОДОНАГРЕВАТЕЛИ',
        'ГАЗОВЫЕ ВОДОНАГРЕВАТЕЛИ',
        'ГАЗОВЫЕ КОТЛЫ',
        'ЭЛЕКТРИЧЕСКИЕ КОТЛЫ',
      ],
    }
  },
  setup() {
    return {
      modules: [Navigation], // Не забудьте добавить модуль Navigation здесь
    }
  },
}
</script>
