<template>
  <div>
    <VskMenuBtn :image="isMusicPlaying ? 'musical-note' : 'mute'" @click="toggleMusic()" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMusicStore } from "@/stores/music";
import VskMenuBtn from "@/layouts/VskMenuBtn.vue";

const musicStore = useMusicStore();

const { isMusicPlaying } = storeToRefs(musicStore);
const { toggleMusic } = musicStore;

</script>

<style lang="scss" scoped></style>