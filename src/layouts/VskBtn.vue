<template>
  <div class="vsk-btn-container">
    <button class="vsk-btn" :class="classes">
      <div v-if="disable" class="vsk-btn-disable-background"></div>
      <img class="icon" :src="image" />
    </button>
    <v-badge v-if="badge" class="menu-element-badge" color="error" :content="badge" inline></v-badge>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  image: String,
  disable: Boolean,
  active: Boolean,
  badge: Number,
})

const classes = computed(() => {
  return `${props.disable ? 'disable' : 'btn-click-animation'}` + `${props.active ? ' active' : ''}`
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.vsk-btn-container {
  position: relative;

  .vsk-btn {
    width: 5.8vh;
    height: 5.8vh;
    max-width: 65px;
    max-height: 65px;

    border-radius: $radiusValue;
    padding: 0.4vh;

    cursor: pointer;
    transition: background-color 250ms ease-in;
    background-color: $colorBlackLightMax;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      background-color: $colorWhiteLightMax;
    }

    &.active {
      background-color: $colorGoldLight;
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
        border-radius: $radiusValue;
        background-color: $colorWhiteLightMax;
      }
    }
  }

  .menu-element-badge {
    position: absolute;
    right: -15%;
    top: -12%;
    transition: background-color 250ms ease-in;
  }
}
</style>