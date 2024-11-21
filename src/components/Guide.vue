<template>
  <div>
    <VskBtn image="/icon/freebet.png" @click="isActive = !isActive" :active="isActive" style="padding: 12.5px" />

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
            <!-- <v-progress-linear v-if="carouselItem.progress" :buffer-value="progression"
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
    name: 'guide',
    title: 'Guide',
    description: '🤯 Prêt à vivre une expérience unique pour la Journée Mondiale du Freebet ? Suis nos conseils pour vivre la meilleure expérience et tenter de remporter des Freebets* 🤝  (Logo Freebets à gauche)',
    image_url: '/images/guide/guide-lieu.gif',
  },
  {
    name: 'lieu',
    title: 'Lieux',
    description: 'Explore et découvre de nouveaux lieux en zoomant (Vidéo d’une personne qui zoome manuellement) Si tu es sur téléphone, n’hésite pas à le tourner pour jouer à l’horizontal ! 👌',
    image_url: '/images/guide/guide-lieu.gif',
    // progress: true,
  },
  {
    name: 'personnage',
    title: 'Personnages',
    description: 'Rapproche-toi des personnages pour avoir de précieux indices, ils pourront te guider vers des Freebets (on voit le dialogue avec le personnage football) 💬',
    image_url: '/images/guide/guide-dialog.gif',
    // progress: true,
  },
  {
    name: 'ihm',
    title: 'Menu',
    description: 'Sur l’icône « Cartes » retrouve les lieux déjà découverts et ceux que tu dois encore trouver ! (On voit une personne cliquer sur l’icône carte et parcourir) 🗺️',
    image_url: '/images/guide/guide-ihm.gif',
    // progress: true,
  },
  {
    name: 'secret',
    title: 'Secret',
    description: 'Prêt à vivre une grande aventure ? Zoom vers la ligne de départ (photo avec le gars qui tient le tél) 🏁',
    image_url: '/images/guide/guide-final.png',
  }
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
  font-size: 1.85vh;

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
    border: 2px solid $colorGold;
    border-radius: $radiusValue;
  }
}
</style>
