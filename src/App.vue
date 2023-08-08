<template>
  <v-app>
    <Navbar />
    <Loader v-if="loaderStatus">
    <router-view>
    </router-view>
    </Loader>
    <router-view v-else>
    </router-view>

    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import Loader from './components/Loader.vue';

export default {
  components: { Navbar, Footer, Loader },
  data() {
    return {
      loaderStatus: true,
    };
  },
  created() {
    setTimeout(() => {
      this.loaderStatus = false; // Установите loaderStatus в false после 5 секунд
    }, 5000);
  },
};
</script>
