<template>
  <div>
    <VskBtn image="/icon/freebet_icon.png" @click="isActive = !isActive" :active="isActive" />

    <VskCardCarousel v-model:isActive="isActive" :carousel-items="carouselItems" nextItemBtnLabel="conseil suivant">
      <template v-for="carouselItem in carouselItems" :key="carouselItem.name" v-slot:[carouselItem.name]>

        <div class="vsk-regle--container px-5">

          <!-- ILLUSTRATION -->
          <v-row no-gutters class="vsk-regle--illustration">
            <div class="vsk-regle--illustration-container">
              <img v-if="carouselItem.image_url" loading="lazy" :src="carouselItem.image_url" />
            </div>
          </v-row>

          <!-- TITLE -->
          <v-row no-gutters class="vsk-regle--title">
            <v-col cols="12" align="center">
              <h3>{{ carouselItem.title }}</h3>
            </v-col>
          </v-row>

          <!-- DESCRIPTION -->
          <v-row no-gutters class="vsk-regle--description mt-3">
            <v-col cols="12" align="center" v-html="carouselItem.description">
            </v-col>
          </v-row>
        </div>
      </template>
    </VskCardCarousel>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch, onUpdated } from 'vue';
import VskBtn from '@/layouts/VskBtn.vue'
import VskCardCarousel from '@/layouts/VskCardCarousel.vue'
import { setIsDialogMentionLegalActive } from '@/stores/dialog/action';

const isActive = ref(false);

const carouselItems = [
  {
    name: '0',
    image_url: '/icon/freebet_dessin.png',
    title: 'Règles',
    description: 'Avant de commencer, tu dois certifier avoir plus de <u>18 ans</u> pour participer à l’expérience ✅<br><br>📎 Toutes les infos du jeu sont sur notre <a target="_blank" href="https://www.google.com">règlement</a>',
  },
  {
    name: '1',
    image_url: '/icon/freebet_dessin.png',
    title: 'Freebets',
    description: `🤑 Cette course cache énoooormément de Freebets*… Tu veux en gagner? <u>3 solutions</u> s’offrent à toi :`,
  },
  {
    name: '1a',
    image_url: '/icon/football_ballon.png',
    title: 'Lieux Secrets',
    description: `Trouve <u>tous</u> les items sportifs qui sont cachés le long du parcours. Il suffit de zoomer dessus pour les récupérer dans ton inventaire ! Quand tu auras tout collecté, tu seras téléporté dans un <u>lieu secret</u> qui te fera participer à un grand <u>tirage au sort</u> 🍀`,
  },
  {
    name: '1b',
    image_url: '/icon/_.png',
    title: 'Codes Cachés',
    description: `Trouve les <u>codes promos</u> écris dans les différentes scènes. Tu vois un élément écrit quelque part ? Écris-le dans ton app’ Betclic, il renferme peut-être des Freebets 📲`,
  },
  {
    name: '1c',
    image_url: '/icon/!!.png',
    title: 'Jeux exclusifs',
    description: `Enfin, RDV sur les réseaux sociaux de Betclic toute la journée pour avoir des indices et jouer à des <u>jeux exclusifs</u> 🎁 <br>
      <a target="_blank" href="https://www.instagram.com/betclicfrance/ "><img src="logo/instagram.png"/></a>
      <a target="_blank" href="https://www.tiktok.com/@betclicfrance "><img src="logo/tiktok.png"/></a>
      <a target="_blank" href="https://x.com/Betclic"><img src="logo/x.png"/></a>`,
  },
  {
    name: '2',
    image_url: '/images/guide/guide-final.png',
    title: 'Abonnes-toi !',
    description: `Avant de partir… Tu dois être abonné aux réseaux sociaux suivants de Betclic pour pouvoir remporter des Freebets* <br>
      <a target="_blank" href="https://www.instagram.com/betclicfrance/ "><img src="logo/instagram.png"/></a>
      <a target="_blank" href="https://www.tiktok.com/@betclicfrance "><img src="logo/tiktok.png"/></a>
      <a target="_blank" href="https://x.com/Betclic"><img src="logo/x.png"/></a>`,
  },
  {
    name: '3',
    title: 'Bonne chance 💪',
    description: 'Tu as toutes les infos bg : tu peux désormais <u>zoomer</u> dans l’app’ Betclic du téléphone et débuter ta course.',
  },
]


// LIFE CYCLE
onMounted(() => {
  setIsDialogMentionLegalActive(isActive.value)
});
onUpdated(() => {
  setIsDialogMentionLegalActive(isActive.value)
});

onBeforeUnmount(() => {
  setIsDialogMentionLegalActive(false)
})


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

    u {
      color: $colorGold;
    }

    img {
      max-width: 75px;
      width: 6.5vh;
      margin: 20px 10px 0 10px;
    }
  }
}
</style>
