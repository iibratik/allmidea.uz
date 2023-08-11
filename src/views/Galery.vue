<template>
  <Loader v-if="loaderStatus"> </Loader>
  <div v-else class="gallery-page">
    <ImageSlider
      :images="sliderimagesCount"
      :path="sliderPath"
      :format="sliderFormat"
      :slidesPerView="1"
      imageClass=""
    />
    <section class="section gallery">
      <h2 class="section-title gallery-title">
        В КОНТАКТЕ С КОМФОРТОМ, БЕЗ ОГРАНИЧЕНИЙ
      </h2>
      <v-container>
        <v-row>
          <v-col
            class="gallery-card"
            :cols="imgCols"
            v-for="col in colImages"
            :key="col"
          >
            <img
              loading="lazy"
              :src="require(`@/assets/images/gallery/${col}`)"
              alt=""
            />
          </v-col>
        </v-row>
        <v-row class="gallery-row">
          <v-col class="gallery-card" :cols="imgCols">
            <img loading="lazy" src="@/assets/images/gallery/2-1.webp" alt="" />
          </v-col>
          <v-col class="gallery-card card__text" :cols="txtCols">
            <h3 class="card-title">
              ДОЛГОВЕЧНЫЙ БАК С <br />
              ИННОВАЦИОННЫМ САПФИРО-<br />ЭМАЛИРОВАННЫМ ПОКРЫТИЕМ TI+
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
          <v-col class="gallery-card" :cols="imgCols">
            <img loading="lazy" src="@/assets/images/gallery/3-1.webp" alt="" />
          </v-col>
          <v-col class="gallery-card card__text" :cols="txtCols">
            <h3 class="card-title">
              НАГРЕВАТЕЛЬ С САПФИРО-<br />ЭМАЛИРОВАННЫМ ПОКРЫТИЕМ TI+
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
import Loader from '@/components/Loader.vue'

export default {
  components: { ImageSlider, Loader },

  data() {
    return {
      loaderStatus: true,
      sliderPath: 'gallery',
      sliderFormat: 'webp',
      imgCols: window.innerWidth <= 960 ? 12 : 4,
      txtCols: window.innerWidth <= 960 ? 12 : 6,
      sliderimagesCount: [...Array(9).keys()].map((x) => x + 1),
      colImages: ['1-1.webp', '1-2.webp', '1-3.webp'],
    }
  },
  created() {
    const savedLoaderStatus = localStorage.getItem('loaderStatus')

    if (savedLoaderStatus === 'false') {
      this.loaderStatus = false
    }
    setTimeout(() => {
      this.loaderStatus = false

      // Сохраняем состояние в Local Storage
      localStorage.setItem('loaderStatus', 'false')
    }, 5000)
  },
}
</script>
