<template>
  <v-footer class="d-flex bg-primary flex-column justify-space-between footer" height="120px"  >
    <v-card-title class="section-title">НАШИ НОМЕРА</v-card-title>
    <div class="footer-mobiles">
    <div class="wrapper">
      <a href="tel:+998971599099" class="title">+998 97 159 90 99</a>
    </div>
    <div class="wrapper">
      <a href="tel:+998950509099 " class="title">+998 95 050 9099 </a>
    </div>
    <div class="wrapper">
      <a href="tel:+998882009099" class="title">+998 88 200 9099</a>
    </div>
    </div>
    <div class="px-4 py-2 footer-date text-center w-100">
      {{ new Date().getFullYear() }} — <strong>allmidea.uz</strong>
    </div>
  </v-footer>
</template>
<script>
export default {
  data: () => ({}),
}
</script>
