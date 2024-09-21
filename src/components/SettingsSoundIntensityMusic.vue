<template>
  <div>
    <v-slider :modelValue="musicVolume" @update:modelValue="(value) => setMusicVolume(value)"
      :prepend-icon="musicVolume === 0 ? 'mdi-music-note-off' : 'mdi-music'" thumb-label></v-slider>
  </div>
</template>

<script setup lang="ts">
import { useMusicStore } from "@/stores/music";
import { storeToRefs } from 'pinia'

const musicStore = useMusicStore();

const { musicVolume } = storeToRefs(musicStore)
const { setMusicVolume } = musicStore;

</script>

<style lang="scss" scoped></style>