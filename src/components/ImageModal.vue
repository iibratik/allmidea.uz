<template>
  <v-dialog @click="dialog = !dialog" class="image-contain" v-model="dialog" max-width="90%">
    <v-card>
      <v-sheet class="image-scroll-container" tile>
        <v-img
          :src="require(`@/assets/images/${imageUrl}`)"
          class="pa-4 modal-image"
        ></v-img>
      </v-sheet>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    imageUrl: String,
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style>
.modal-image {
  width: 100%; /* Увеличение в 3 раза */
  max-height: 120vh;
  transform: scale(1);
  margin-top: 480px;
}

.image-contain {
  max-width: 100%;
}

.image-scroll-container {
  overflow-x: hidden;
}
</style>
