<template>
  <v-footer class="d-flex bg-primary flex-column justify-end footer" height="300px"  >
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
