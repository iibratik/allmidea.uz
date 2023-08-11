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
    const savedLoaderStatus = localStorage.getItem('loaderStatus');

    if (savedLoaderStatus === 'false') {
      this.loaderStatus = false;
    }

    setTimeout(() => {
      this.loaderStatus = false;

      // Сохраняем состояние в Local Storage
      localStorage.setItem('loaderStatus', 'false');
    }, 5000);
  },
};
</script>
