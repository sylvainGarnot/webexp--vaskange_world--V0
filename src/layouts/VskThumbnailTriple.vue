<template>
  <div class="vsk-thumbnail mt-3">
    <img :src="imageUrl" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  imageUrl: String,
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.vsk-thumbnail,
.vsk-thumbnail img,
.vsk-thumbnail .vsk-thumbnail-background {
  border-radius: $radiusValue;
}

.vsk-thumbnail {
  width: 100%;
  height: 12vh;
  position: relative;

  span.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: $colorWhite;
    font-size: 2.8vh;
    font-weight: 700;
    text-shadow: $shadow;
    white-space: nowrap;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px solid $colorGold;
  }

  .vsk-thumbnail-background {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: background-color 250ms ease-in;

    &:hover {
      background-color: $colorWhiteLightMax;
    }
  }
}
</style>
