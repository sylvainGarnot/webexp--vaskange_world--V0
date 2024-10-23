<template>
  <div>
    <VskBtn :image="isFullscreen ? 'compress' : 'expand'" @click="toggleFullscreen()" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import VskBtn from "@/layouts/VskBtn.vue";
import { useSettingStore } from "@/stores/setting";
import { storeToRefs } from 'pinia'

const settingStore = useSettingStore();

const { isFullscreen } = storeToRefs(settingStore)
const { setIsFullscreen, toggleFullscreen } = settingStore;

onMounted(() => {
  window.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    }
  });
});

</script>

<style lang="scss" scoped></style>