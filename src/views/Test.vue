<template>
  <div class="number-animation">
    <div
      class="number"
      v-for="(digit, index) in numberArray"
      :key="index"
      :class="{ 'number--animated': index === currentIndex }"
    >
      {{ digit }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: ['97 159 9099', '95 050 9099','88 200 9099'], // Ваш номер телефона
      numberArray: [], // Массив для цифр
      currentIndex: 0, // Индекс текущей анимированной цифры
    }
  },
  mounted() {
    this.splitNumber()
    this.animateNumber()
  },
  methods: {
    splitNumber() {
      this.numberArray = this.number.replace(/\s/g, '').split('') // Разбиваем номер на отдельные цифры
    },
    animateNumber() {
      const animationDelay = 500 // Задержка между анимациями цифр в миллисекундах

      const animateNextDigit = () => {
        setTimeout(() => {
          this.currentIndex++
          if (this.currentIndex < this.numberArray.length) {
            animateNextDigit()
          }
        }, animationDelay)
      }

      animateNextDigit()
    },
  },
}
</script>

<style scoped>
.number-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 500px;
}

.number {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-in-out forwards;
  margin: 0 4px; /* Добавьте отступы между цифрами */
}

.number--animated {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
