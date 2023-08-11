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
      images: ['tables/6-1.png', 'tables/6-2.png'],
    }
  },
}
</script>
