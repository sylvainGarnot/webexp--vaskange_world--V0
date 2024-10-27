<template>
  <div>
    <v-slider v-if="isMusicPlaying" class="settings-music-volume" :modelValue="musicVolume * 100" color="white"
      @update:modelValue="(value) => setMusicVolume(value / 100)" thumb-label></v-slider>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMusicStore } from "@/stores/music";

const musicStore = useMusicStore();

const { musicVolume, isMusicPlaying } = storeToRefs(musicStore);
const { setMusicVolume } = musicStore;

</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.settings-music-volume {
  border-radius: $radiusValue;
  padding: 1.2vh 1.2vh;
  background-color: $colorBlackLightMax;

  width: 5.8vh*2.5;
  height: 5.8vh;
  max-width: 65px*2.5;
  max-height: 65px;

  margin: 0;
}
</style>