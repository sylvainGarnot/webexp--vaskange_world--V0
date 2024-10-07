<template>
  <div>
    <button class="btn-menu">
      <img class="icon" :src="`src/assets/icones/${image}.png`" />
    </button>
  </div>
</template>

<script setup>
defineProps({
  image: String,
})
</script>

<style lang="scss" scoped>
.btn-menu {
  background-color: #00000075;
  width: 5.8vh;
  height: 5.8vh;
  border-radius: 0.8vh;
  padding: 0.4vh;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>