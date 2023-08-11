<template>
  <v-app-bar class="navbar-toolbar" color="primary" prominent>
    <img
    loading="lazy"
      class="midea-logo"
      src="@/assets/images/Nav/Midea_logo_blue.svg"
      alt="midea-logo"
    />
    <v-spacer v-if="isSpacer"></v-spacer>
    <img
      class="midea-slogan"
      src="@/assets/images/Nav/Midea_slogan_white.svg"
      alt="slogan"
      loading="lazy"
    />
    
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      isSpacer: window.innerWidth <= 992 ? false : true,
    }
  },
}
</script>
