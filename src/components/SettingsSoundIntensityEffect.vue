<template>
  <div>
    <v-slider :modelValue="effectVolume * 100" @update:modelValue="(value) => setEffectVolume(value / 100)"
      :prepend-icon="effectVolume === 0 ? 'mdi-volume-off' : 'mdi-volume-high'" thumb-label></v-slider>
  </div>
</template>

<script setup lang="ts">
import { useEffectStore } from "@/stores/effect";
import { storeToRefs } from 'pinia'

const settingStore = useEffectStore();

const { effectVolume } = storeToRefs(settingStore)
const { setEffectVolume } = settingStore;

</script>

<style lang="scss" scoped></style>