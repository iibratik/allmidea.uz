<template>
  <div class="loader">
    <div class="spinner" :style="{ borderColor: color }">
      <div class="inner-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#4CAF50'
    }
  }
};
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.spinner {
  border: 15px solid rgba(0, 0, 0, 0.1);
  border-left-color: transparent;
  border-radius: 45%;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
  position: relative; /* Добавим позиционирование для вложенного круга */
}

.inner-circle {
  width: 60px;
  height: 60px;
  background-color: #0590D7;
  border-radius: 45%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
