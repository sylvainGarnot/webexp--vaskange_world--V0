<template>
  <div>
    <VskBtn class="mt-4 ml-4" image="/icon/guide.png" @click="isActive = !isActive" :active="isActive" />

    <VskCardCarousel v-model:isActive="isActive" :carousel-items="carouselItems" nextItemBtnLabel="conseil suivant"
      @close-first-time="playMusic">
      <template v-for="carouselItem in carouselItems" :key="carouselItem.name" v-slot:[carouselItem.name]>

        <div class="vsk-guide--container px-5">

          <!-- ILLUSTRATION -->
          <v-row no-gutters class="vsk-guide--illustration">
            <div class="vsk-guide--illustration-container" v-if="carouselItem.video_url">
              <video :src="carouselItem.video_url" autoplay loop muted preload="none" playsinline />
            </div>
          </v-row>

          <!-- TITLE -->
          <v-row no-gutters class="vsk-guide--title">
            <v-col cols="12" align="center">
              <h3>{{ carouselItem.title }}</h3>
            </v-col>
          </v-row>

          <!-- DESCRIPTION -->
          <v-row no-gutters class="vsk-guide--description mt-3">
            <v-col cols="12" align="center" v-html="carouselItem.description">
            </v-col>
          </v-row>
        </div>

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
    description: 'Explore en <u>zoomant</u> 👌 et découvre de nouveaux <u>lieux</u> !',
    video_url: '/images/guide/ZOOM_HAND.mp4',
  },
  {
    name: 'personnage',
    title: 'Récolte les objets cachés',
    description: 'Réunis <u>tout</u> les objets cachés afin de découvrir une <u>fin secrete</u> !',
    video_url: '/images/guide/OBJETS.mp4',
  },
  {
    name: 'ihm',
    title: 'Déplace toi grâce à la carte',
    description: 'La <u>carte</u> te permet de te <u>téléporter</u> sur les lieux déjà découverts ! 🗺️',
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

.vsk-guide--container {
  position: relative;
  height: 100%;

  .vsk-guide--illustration {
    position: relative;
    height: 50%;

    .vsk-guide--illustration-container {
      height: 100%;

      video {
        padding: $radiusValue*2 0;
        width: auto;
        height: 100%;
        border: 0 solid;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .vsk-guide--title {
    color: $colorWhite;
    font-size: 3.2vh;
  }

  .vsk-guide--description {
    color: $colorWhite;
    font-size: 1.95vh;

    p {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
<style lang="scss">
@import '@/assets/styles/_global_variable.scss';

.vsk-guide--container {
  .vsk-guide--description {
    u {
      color: $colorGold;
    }
  }
}
</style>