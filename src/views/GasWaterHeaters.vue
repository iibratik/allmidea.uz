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
      images: [
        'tables/5-1.png',
        'tables/5-2.png',
      ],
    }
  },
}
</script>
