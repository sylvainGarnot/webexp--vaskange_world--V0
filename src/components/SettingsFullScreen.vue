<template>
  <div>
    <VskBtn :image="`/icon/fullscreen_${isFullscreen ? 'compress' : 'expand'}.png`" @click="toggleFullscreen()" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

import VskBtn from "@/layouts/VskBtn.vue";
import { useSettingStore } from "@/stores/setting";
import { storeToRefs } from 'pinia'

const settingStore = useSettingStore();

const { isFullscreen } = storeToRefs(settingStore)
const { setIsFullscreen, toggleFullscreen } = settingStore;

onMounted(() => {
  window.addEventListener("fullscreenchange", handleFullscreenChange);
});

onBeforeUnmount(() => {
  window.removeEventListener("fullscreenchange", handleFullscreenChange)
})

function handleFullscreenChange() {
  if (document.fullscreenElement) {
    setIsFullscreen(true);
  } else {
    setIsFullscreen(false);
  }
}

</script>

<style lang="scss" scoped></style>