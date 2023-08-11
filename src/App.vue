<template>
  <v-app>
    <Navbar />
    <div class="view">
      <router-view >
      </router-view>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';


export default {
  components: { Navbar, Footer, },
  data() {
    return {

    };
  },

};
</script>
<style lang="scss" >
.view{
  padding-top: 150px;
}
</style>