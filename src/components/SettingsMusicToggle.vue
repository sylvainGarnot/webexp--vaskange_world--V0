<template>
  <div>
    <VskBtn :image="image" @click="toggleMusic()" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia'
import { useMusicStore } from "@/stores/music";
import VskBtn from "@/layouts/VskBtn.vue";

const musicStore = useMusicStore();

const { isMusicPlaying, volumeMusic } = storeToRefs(musicStore);
const { toggleMusic } = musicStore;

const image = computed(() => {
  let result = '/icon/music' as string
  if (isMusicPlaying.value) {
    volumeMusic.value === 0 ? result += '_mute' : ''
  } else {
    result += '_pause'
  }
  return result + '.png' as string
})

</script>

<style lang="scss" scoped></style>