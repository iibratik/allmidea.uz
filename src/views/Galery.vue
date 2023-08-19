<template>
  <div class="gallery-page">
    <div>
      <v-container>
        <v-card-title class="section-title gallery-title"
          >ПРАЙС ЛИСТ</v-card-title
        >
        <v-row v-if="windowsWidth >= 992" class="justify-center">
          <v-col
            v-for="item in priceimagesCount"
            :key="item"
            class="d-flex align-center price-card"
            :cols="pricePerView"
          >
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
        </v-row>
        <PriceList v-else />
      </v-container>
    </div>
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
import VueMeta from 'vue-meta'
import ImageSlider from '@/components/ImageSlider.vue'
import PriceList from '@/components/PriceList.vue'

export default {
  metaInfo: {
    // Определите свойства мета-тегов здесь
    title: 'Галерея',
    meta: [
      {
        name: 'description',
        content:
          'Флагманская продукция от Midea - водограневатели и газовые котлы.',
      },
      // Другие мета-теги
    ],
  },
  components: { ImageSlider, PriceList },

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
      pricePerView: window.innerWidth <= 960 ? 10 : 2,
      loaderStatus: true,
      sliderPath: 'gallery',
      sliderFormat: 'webp',
      imgCols: window.innerWidth <= 960 ? 8 : 4,
      txtCols: window.innerWidth <= 960 ? 8 : 6,
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
