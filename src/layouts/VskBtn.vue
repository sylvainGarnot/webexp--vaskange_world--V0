<template>
  <div>
    <button class="btn-menu" :style="`width: ${width}px; height: ${width}px;`">
      <img class="icon" :src="`src/assets/icones/${image}.png`" />
    </button>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  width: Number,
})
</script>

<style lang="scss" scoped>
.btn-menu {
  background-color: #00000075;
  border-radius: 8px;
  padding: 3px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>