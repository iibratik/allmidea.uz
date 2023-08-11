<template>
  <div>
    <div >
      <div v-for="image in images" :key="image" class="image" @click="openImageModal(image)">
        <img class="table-img" :src="require(`@/assets/images/${image}`)" alt="">
      </div>
    </div>
    <ImageModal :imageUrl="selectedImageUrl" ref="imageModal" />
  </div>
</template>

<script>
import ImageModal from "@/components/ImageModal.vue"; // Правильный путь к компоненту

export default {
  components: {
    ImageModal,
  },
  data() {
    return {
      images: ['tables/4-1.png'], // Укажите свой путь к изображению
      selectedImageUrl: "",
    };
  },
  methods: {
    openImageModal(image) {
      this.selectedImageUrl = image;
      this.$refs.imageModal.dialog = true;
    },
  },
};
</script>
