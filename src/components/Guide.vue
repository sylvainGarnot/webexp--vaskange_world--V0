<template>
  <div>
    <!-- <VskBtn image="/icon/freebet.png" @click="isActive = !isActive" :active="isActive" style="padding: 12.5px" /> -->

    <VskCardCarousel v-model:isActive="isActive" :carousel-items="carouselItems" nextItemBtnLabel="conseil suivant"
      @close-first-time="playMusic">
      <template v-for="carouselItem in carouselItems" :key="carouselItem.name" v-slot:[carouselItem.name]>
        <v-row no-gutters class="guide-title mt-15">
          <v-col cols="12" align="center">
            <h3>{{ carouselItem.title }}</h3>
          </v-col>
        </v-row>
        <v-row no-gutters class="guide-content mt-9">
          <v-col v-if="carouselItem.image_url" cols="12" md="6" sm="12" align="center">
            <img loading="lazy" :src="carouselItem.image_url"
              :class="carouselItem.image_url ? 'png-transparent' : ''" />
          </v-col>
          <v-col v-else-if="carouselItem.video_url" cols="12" md="6" sm="12" align="center">
            <video :src="carouselItem.video_url" autoplay loop muted preload="none" />
            <!-- <v-progress-linear v-if=" carouselItem.progress" :buffer-value="progression"
              color="#9A843A"></v-progress-linear> -->
          </v-col>
          <v-col cols="12" :md="carouselItem.image_url ? '6' : '12'" sm="12" class="px-5"
            :class="carouselItem.image_url ? 'mt-3' : 'mt-16'" align="center">
            <p>{{ carouselItem.description }}</p>
          </v-col>
        </v-row>
      </template>
    </VskCardCarousel>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useMusicStore } from "@/stores/music";

import VskBtn from '@/layouts/VskBtn.vue'
import VskCardCarousel from '@/layouts/VskCardCarousel.vue'
import { locations_found } from '@/stores/location/state';

const isActive = ref(false);
// const progression = ref(0)

const musicStore = useMusicStore();
const { playMusic } = musicStore;

const carouselItems = [
  {
    name: 'lieu',
    title: 'Zoomer pour explorer',
    description: 'Explore et découvre de nouveaux lieux en zoomant 👌',
    image_url: '',
    video_url: '/images/guide/ZOOM_HAND.mp4',
  },
  {
    name: 'personnage',
    title: 'Trouve tout les objets cachés',
    description: 'Trouver les différents objets betclic cachés dans les scènes! Finissez la course et retrouvez TOUS les objets afin de découvrir une FIN SECRET!',
    image_url: '',
    video_url: '/images/guide/OBJETS.mp4',
  },
  {
    name: 'ihm',
    title: 'Revenir sur un lieu',
    description: 'Sur l’icône « Cartes » retrouve les lieux et objets déjà découverts. Vous pouvez également vous téléporter à travers les différentes scènes découvertes ! 🗺️',
    image_url: '',
    video_url: '/images/guide/MENU.mp4',
  },
]

// function recursive() {
//   progression.value = progression.value + 1
//   if (progression.value === 100) {
//     progression.value = 0
//   }
//   setTimeout(() => {
//     recursive()
//   }, 100);
// }

// onMounted(() => {
//   recursive()
// });


watch(locations_found.value, (value) => {
  if (value.length === 1) {
    isActive.value = true
  }
}, { deep: false })

</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.guide-title {
  color: $colorWhite;
  font-size: 3.2vh;
}

.guide-content {
  color: $colorWhite;
  font-size: 1.95vh;

  p {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  video,
  img {
    width: auto;
    height: 100%;
    max-height: 25vh;
    object-fit: cover;
    border: 2px solid $colorGold;
    border-radius: $radiusValue;

    &.png-transparent {
      border: 0;
    }
  }
}
</style>
