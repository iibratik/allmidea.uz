<template>
  <div>
    <v-container>
      <v-row class="justify-center">
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
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    const sliderimagesCount = []
    for (let i = 1; i <= 14; i++) {
      sliderimagesCount.push(`8-${i < 10 ? '0' : ''}${i}`)
    }
    return {
      sliderPath: 'cards',
      sliderFormat: 'png',
      sliderimagesCount,
      slidesPerView: window.innerWidth <= 960 ? 1 : 4,
    }
  },
}
</script>

<style lang="scss" scoped></style>
