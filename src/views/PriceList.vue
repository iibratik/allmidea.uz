<template>
  <div>
    <v-container>
      <v-card-title class="section-title price-mobile gallery-title"
        >ПРАЙС ЛИСТ</v-card-title
      >
      <v-row v-if="windowsWidth >= 992" class="justify-center">
        <v-col
          v-for="item in sliderimagesCount"
          :key="item"
          class="d-flex align-center price-card"
          cols="2"
        >
          <v-img
            :src="
              require(`@/assets/images/${sliderPath}/${item}.${sliderFormat}`)
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
      <PriceList  v-else />
    </v-container>
  </div>
</template>

<script>
import PriceList from '@/components/PriceList.vue'
export default {
  components: { PriceList },
  data() {
    const sliderimagesCount = []
    for (let i = 1; i <= 14; i++) {
      sliderimagesCount.push(`8-${i}`)
    }
    return {
      sliderPath: 'cards',
      sliderFormat: 'png',
      windowsWidth: window.innerWidth,
      sliderimagesCount,
      slidesPerView: window.innerWidth <= 960 ? 1 : 4,
    }
  },
}
</script>

<style lang="scss" scoped></style>
