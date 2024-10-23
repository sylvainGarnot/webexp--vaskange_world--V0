<template>
  <div>
    <button class="vsk-btn" :class="disable ? 'disable' : 'active'">
      <div v-if="disable" class="vsk-btn-disable-background"></div>
      <img class="icon" :src="`/icones/${image}.png`" />
    </button>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  disable: Boolean,
})
</script>

<style lang="scss" scoped>
.vsk-btn {
  width: 5.8vh;
  height: 5.8vh;
  max-width: 65px;
  max-height: 65px;

  border-radius: 0.8vh;
  padding: 0.4vh;
  background-color: rgba(29, 27, 25, 0.8);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.active {
    cursor: pointer;
    transition: background-color 250ms ease-in;

    &:hover {
      background-color: rgba(255, 255, 255, 0.72);
    }
  }

  position: relative;

  &.disable {
    cursor: not-allowed;
    background-color: transparent;

    .vsk-btn-disable-background {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 0.8vh;
      background-color: rgba(255, 255, 255, 0.454);
    }
  }
}
</style>