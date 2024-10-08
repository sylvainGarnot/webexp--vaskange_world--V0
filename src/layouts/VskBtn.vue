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
  width: 5.8vh;
  height: 5.8vh;
  max-width: 65px;
  max-height: 65px;

  background-color: rgba(29, 27, 25, 0.8);
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