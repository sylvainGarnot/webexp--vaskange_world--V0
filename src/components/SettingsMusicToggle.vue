<template>
  <div>
    <VskBtn :image="isMusicPlaying ? 'musical-note' : 'mute'" @click="toggleMusic()" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMusicStore } from "@/stores/music";
import VskBtn from "@/layouts/VskBtn.vue";

const musicStore = useMusicStore();

const { isMusicPlaying } = storeToRefs(musicStore);
const { toggleMusic } = musicStore;

</script>

<style lang="scss" scoped></style>