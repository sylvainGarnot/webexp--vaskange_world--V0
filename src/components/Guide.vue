<template>
  <div>
    <VskBtn image="home-kawai" @click="isActive = !isActive" :active="isActive" />

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
            <img :src="carouselItem.image_url" />
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
import { ref } from 'vue';
import { useMusicStore } from "@/stores/music";

import VskBtn from '@/layouts/VskBtn.vue'
import VskCardCarousel from '@/layouts/VskCardCarousel.vue'

const isActive = ref(true);

const musicStore = useMusicStore();
const { playMusic } = musicStore;

const carouselItems = [
  {
    name: 'guide',
    title: 'Guide',
    description: 'Bienvenue dans Vaskange World, suivez ces quelques conseils avant de commencer',
  },
  {
    name: 'lieu',
    title: 'Lieux',
    description: 'Explorez et découvrez de nouveaux lieux en zoomant.',
    image_url: '/images/guide/guide-lieu.gif',
  },
  {
    name: 'personnage',
    title: 'Personnages',
    description: 'Parlez à des personnages, certain vous donne des indices, d’autre ont des récompenses.',
    image_url: '/images/guide/guide-lieu.gif',
  },
  {
    name: 'ihm',
    title: 'Menu',
    description: 'Retrouvez les lieux et personnages que vous avez rencontré.',
    image_url: '/images/guide/guide-lieu.gif',
  },
  {
    name: 'secret',
    title: 'Secret',
    description: 'Trouvez tout les objets pour gagner une surprise.',
    image_url: '/images/guide/guide-lieu.gif',
  }
]
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.guide-title {
  color: white;
  font-size: 3.2vh;
}

.guide-content {
  color: white;
  font-size: 2.4vh;

  p {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 25vh;
    object-fit: cover;
    border: 2px solid #9A843A;
    border-radius: $radiusValue;
  }
}
</style>
