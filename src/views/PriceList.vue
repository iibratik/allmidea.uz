<template>
  <div>
    <v-container>
      <ImageSlider
        :images="sliderimagesCount"
        :path="sliderPath"
        :format="sliderFormat"
        :slidesPerView="slidesPerView"
        imageClass="price-card__img"
      />
    </v-container>
  </div>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  components: {
    ImageSlider,
  },
  data() {
    const sliderimagesCount = []
    for (let i = 1; i <= 14; i++) {
      sliderimagesCount.push(`8-${i < 10 ? '0' : ''}${i}`)
    }
    return {
      sliderPath: 'cards',
      sliderFormat: 'png',
      sliderimagesCount,
      slidesPerView: window.innerWidth <= 960? 1: 4,
    }
  },
}
</script>

<style lang="scss" scoped></style>
