<template>
  <ImageList :images="images" />
</template>

<script>
import ImageList from '@/components/ImageList.vue'

export default {
  components: {
    ImageList,
  },
  data() {
    return {
      images: ['tables/7-1.png'],
    }
  },
}
</script>
