<template>
  <v-app>
    <v-container>
      <Navbar />
      <router-view></router-view>
    </v-container>
    <Footer />
  </v-app>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  components: { Navbar, Footer },
}
</script>
