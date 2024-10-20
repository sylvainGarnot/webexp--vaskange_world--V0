<template>
  <div>
    <VskMenuBtn image="home-kawai" @click="isActive = !isActive" />

    <VskCardCarousel v-model:isActive="isActive" :carousel-items="carouselItems">
      <template v-slot:intro>
        intro
      </template>
      <template v-slot:zoom>
        zoom
      </template>
      <template v-slot:secret>
        secret
      </template>
    </VskCardCarousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import VskMenuBtn from '@/layouts/VskMenuBtn.vue'
import VskCardCarousel from '@/layouts/VskCardCarousel.vue'

const isActive = ref(false);

const carouselItems = [
  {
    name: 'intro',
  },
  {
    name: 'zoom',
  },
  {
    name: 'secret',
  }
]
</script>

<style lang="scss" scoped></style>
