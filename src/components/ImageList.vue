<template>
  <div
    v-for="image in images"
    :key="image"
    class="image"
    @click="openImageModal(image)"
  >
    <img class="table-img" :src="require(`@/assets/images/${image}`)" alt="" />
  </div>
  <ImageModal :imageUrl="selectedImageUrl" ref="imageModal" />
</template>

<script>
import ImageModal from '@/components/ImageModal.vue'

export default {
  components: {
    ImageModal,
  },
  data() {
    return {
      selectedImageUrl: '', // Добавьте выбранное изображение
    }
  },
  props:{
    images:{
        type: Array,
        required: true
    }
  },
  methods: {
    openImageModal(image) {
      this.selectedImageUrl = image
      this.$refs.imageModal.dialog = true
    },
  },
}
</script>
