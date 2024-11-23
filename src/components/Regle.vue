<template>
  <div>
    <VskBtn image="/icon/freebet.png" @click="isActive = !isActive" :active="isActive" style="padding: 12.5px" />

    <VskCardCarousel v-model:isActive="isActive" :carousel-items="carouselItems" nextItemBtnLabel="conseil suivant">
      <template v-for="carouselItem in carouselItems" :key="carouselItem.name" v-slot:[carouselItem.name]>
        <div class="vsk-regle--container px-5">
          <v-row no-gutters class="vsk-regle--illustration">
            <div class="vsk-regle--illustration-container">
              <img loading="lazy" src="/images/guide/guide-final.png" />
            </div>
          </v-row>
          <v-row no-gutters class="vsk-regle--title">
            <v-col cols="12" align="center">
              <h3>{{ carouselItem.title }}</h3>
            </v-col>
          </v-row>
          <v-row no-gutters class="mt-3 vsk-regle--description">
            <v-col cols="12" align="center" v-html="carouselItem.description">
            </v-col>
          </v-row>
        </div>
      </template>
    </VskCardCarousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import VskBtn from '@/layouts/VskBtn.vue'
import VskCardCarousel from '@/layouts/VskCardCarousel.vue'

const isActive = ref(false);

const carouselItems = [
  {
    name: '0',
    title: 'Règles',
    description: 'Avant de commencer, tu dois certifier avoir plus de 18 ans pour participer à l’expérience ✅<br><br>📎 Toutes les infos du jeu sont sur notre <a href="https://www.google.com">règlement</a>',
  },
  {
    name: '1',
    title: 'Règles',
    description: `🤑 Cette course cache énoooormément de Freebets*… Tu veux en gagner ? 3 solutions s’offrent à toi :`,
  },
  {
    name: '1a',
    title: '1.',
    description: `Trouve tous les items sportifs qui sont cachés le long du parcours. Il suffit de zoomer dessus pour les récupérer dans ton inventaire ! Quand tu auras tout collecté, tu seras téléporté dans un lieu secret qui te fera participer à un grand tirage au sort 🍀`,
  },
  {
    name: '1b',
    title: '2.',
    description: `Trouve les codes promos écris dans les différentes scènes. Tu vois un élément écrit quelque part ? Écris-le dans ton app’ Betclic, il renferme peut-être des Freebets 📲`,
  },
  {
    name: '1c',
    title: '3.',
    description: `Enfin, RDV sur les réseaux sociaux de Betclic toute la journée pour avoir des indices et jouer à des jeux exclusifs 🎁`,
  },
  {
    name: '2',
    title: 'Abonnes-toi !',
    description: `Avant de partir… Tu dois être abonné aux réseaux sociaux suivants de Betclic pour pouvoir remporter des Freebets* <br>
      <a target="_blank" href="https://www.instagram.com/betclicfrance/ "><img src="logo/instagram_logo.png"/></a>
      <a target="_blank" href="https://www.tiktok.com/@betclicfrance "><img src="logo/tiktok_logo.png"/></a>
      <a target="_blank" href="https://x.com/Betclic"><img src="logo/twitter_logo.png"/></a>`,
  },
  {
    name: '3',
    title: 'Bonne chance 💪',
    description: 'Tu as toutes les infos bg : tu peux désormais zoomer dans l’app’ Betclic du téléphone et débuter ta course.',
  },
]

</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.vsk-regle--container {
  position: relative;
  height: 100%;

  .vsk-regle--illustration {
    position: relative;
    height: 44%;

    .vsk-regle--illustration-container {
      height: 100%;

      img {
        padding: $radiusValue*2 0;
        width: auto;
        height: 100%;
        border: 0 solid;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .vsk-regle--title {
    color: $colorWhite;
    font-size: 3.2vh;
  }

  .vsk-regle--description {
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

.vsk-regle--container {
  .vsk-regle--description {
    a {
      color: $colorGrey !important;
    }

    img {
      max-width: 75px;
      width: 6.5vh;
      margin: 20px 10px 0 10px;
    }
  }
}
</style>
