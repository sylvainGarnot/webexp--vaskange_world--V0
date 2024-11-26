<template>
  <div class="vsk-btn--container">
    <button class="vsk-btn" :class="classes" :style="style" @click="playSound('son_bouton_ihm')">
      <div v-if="disable" class="vsk-btn--disable-background"></div>
      <img loading="lazy" class="icon" :src="image" />
    </button>
    <v-badge v-if="badge" class="vsk-btn--badge" :color="badgeType" :content="badge" inline></v-badge>
    <v-icon v-if="badgeStar" class="vsk-btn--badge-star" size="large">mdi-star</v-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { playSound } from '@/stores/music/action';

const props = defineProps({
  image: String,
  disable: Boolean,
  active: Boolean,
  badge: Number,
  badgeType: {
    type: String,
    default: 'error',
  },
  badgeStar: Boolean,
  style: String,
})

const classes = computed(() => {
  return `${props.disable ? 'disable' : 'btn-click-animation'}` + `${props.active ? ' active' : ''}`
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.vsk-btn--container {
  position: relative;
  max-width: 65px;
  max-height: 65px;

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

      .vsk-btn--disable-background {
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

  .vsk-btn--badge {
    position: absolute;
    right: -20%;
    top: -20%;
    transition: background-color 250ms ease-in;
  }

  .vsk-btn--badge-star {
    position: absolute;
    color: $colorGoldDark;
    top: -$radiusValue*1.6;
    left: -$radiusValue*1.1;
  }
}
</style>

<style>
.v-badge__badge {
  width: 25px !important;
  height: 25px;
  border-radius: 50%;
  animation: bounceVpx 1.5s ease infinite;
}
</style>