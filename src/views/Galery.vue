<template>
  <div class="gallery-page">
    <ImageSlider
      :images="SliderimagesCount"
      :path="SliderPath"
      :format="SliderFormat"
    />
    <section class="section gallery">
      <h2 class="section-title gallery-title">
        В КОНТАКТЕ С КОМФОРТОМ, БЕЗ ОГРАНИЧЕНИЙ
      </h2>
      <v-container>
        <v-row no-gutters>
          <v-col
            class="gallery-card"
            cols="4"
            v-for="col in colImages"
            :key="col"
          >
            <v-sheet class="pa-2 ma-2">
              <img :src="require(`@/assets/images/gallery/${col}`)" alt="" />
            </v-sheet>
          </v-col>
        </v-row>
        <v-row class="gallery-row">
          <v-col class="gallery-card" cols="4">
            <img src="@/assets/images/gallery/2-1.png" alt="" />
          </v-col>
          <v-col class="gallery-card card__text" cols="6">
            <h3 class="card-title">
              ДОЛГОВЕЧНЫЙ БАК С <br> ИННОВАЦИОННЫМ САПФИРО-<br>ЭМАЛИРОВАННЫМ ПОКРЫТИЕМ
              TI+
            </h3>
            <p class="card-sub-title">
              Инновационный слой Ti+ с сапфировым покрытием повышает
              долговечность водного резервуара, эффективно препятствуя коррозии
              и ржавчине и предотвращая образование накипи, обеспечивая
              превосходный пользовательский опыт.
            </p>
          </v-col>
        </v-row>
        <v-row class="gallery-row second">
          <v-col class="gallery-card" cols="4">
            <img src="@/assets/images/gallery/3-1.png" alt="" />
          </v-col>
          <v-col class="gallery-card  card__text" cols="6">
            <h3 class="card-title">
              НАГРЕВАТЕЛЬ С САПФИРО-<br>ЭМАЛИРОВАННЫМ ПОКРЫТИЕМ TI+
            </h3>
            <p class="card-sub-title">
              Водонагреватель оснащён нагревательным элементом, изготовленным из
              нержавеющей стали SUS316L с сапфиро-эмалированным покрытием TI+,
              которая обладает высокой устойчивостью к коррозии и образо-ванию
              накипи, обеспечивая наилучшие характеристики нагрева.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  components: { ImageSlider },

  data() {
    return {
      SliderPath: 'gallery',
      SliderFormat: 'webp',
      SliderimagesCount: [...Array(9).keys()].map((x) => x + 1),
      colImages: ['1-1.png', '1-2.png', '1-3.png'],
    }
  },
}
</script>
