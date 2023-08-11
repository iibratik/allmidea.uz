<template>
  <ImageList :images="images"/>
</template>

<script>
import ImageList from '@/components/ImageList.vue'

export default {
  components: {
    ImageList,
  },
  data() {
    return {
      images: ['tables/4-1.png','tables/4-2.png', 'tables/4-3.png', 'tables/4-4.png'],
    }
  },
}
</script>
