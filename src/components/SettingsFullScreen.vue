<template>
  <div>
    <VskBtn :width=46 :image="isFullscreen ? 'compress' : 'expand'" @click="setIsFullscreen(!isFullscreen)" />
  </div>
</template>

<script setup lang="ts">
import VskBtn from "@/layouts/VskBtn.vue";
import { useSettingStore } from "@/stores/setting";
import { storeToRefs } from 'pinia'

const settingStore = useSettingStore();

const { isFullscreen } = storeToRefs(settingStore)
const { setIsFullscreen } = settingStore;

</script>

<style lang="scss" scoped></style>