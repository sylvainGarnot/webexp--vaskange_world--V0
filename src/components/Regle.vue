<template>
  <div>
    <VskBtn image="/icon/freebet_icon.png" @click="isActive = !isActive" :active="isActive" />

    <VskCardCarousel v-model:isActive="isActive" :carousel-items="carouselItems" nextItemBtnLabel="conseil suivant">
      <template v-for="carouselItem in carouselItems" :key="carouselItem.name" v-slot:[carouselItem.name]>

        <div class="vsk-regle--container px-5">

          <!-- ILLUSTRATION -->
          <v-row no-gutters class="vsk-regle--illustration">
            <div class="vsk-regle--illustration-container" v-if="carouselItem.image_url">
              <img loading="lazy" :src="carouselItem.image_url"
                :class="carouselItem.image_horizontal ? 'horizontal' : ''" />
            </div>
            <div class="vsk-regle--illustration-container" v-else-if="carouselItem.video_url">
              <video :src="carouselItem.video_url" autoplay loop muted preload="none" playsinline />
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
    image_url: '/images/regle/JMDF.png',
    image_horizontal: true,
    title: 'Règles',
    description: 'Avant de commencer, tu dois certifier avoir plus de <i>18 ans</i> pour participer à l’expérience ✅<br><br>📎 Toutes les infos du jeu sont sur notre <a target="_blank" href="https://bit.ly/499OnyF">règlement</a>',
  },
  {
    name: '1',
    image_url: '/images/regle/freebet_dessin.png',
    title: 'Freebets',
    description: `🤑 Cette course cache énoooormément de <i>Freebets*</i>… Tu veux en gagner? <i>3 solutions</i> s’offrent à toi :
      <br>*<span>Crédits de jeu non retirables</span>`,
  },
  {
    name: '1a',
    image_url: '/images/regle/crampon.png',
    title: 'Lieux Secrets',
    description: `Trouve <i>tous</i> les items sportifs qui sont cachés le long du parcours. Il suffit de zoomer dessus pour les récupérer dans ton <i>inventaire</i> 🗺️ ! Quand tu auras tout collecté, tu seras téléporté dans un <i>lieu secret</i> où 600 joueurs remporteront des <i>Freebets*</i> <br>*<span>Crédits de jeu non retirables</span>`,
  },
  {
    name: '1b',
    image_url: '/images/regle/betclic_texte.png',
    title: 'Codes Cachés',
    description: `Trouve les <i>codes promos</i> écris dans les différentes scènes. Tu vois un élément écrit quelque part ? Entre-le dans l’espace « Code promo » de ton app’ Betclic pour tenter de remporter des <i>Freebets*</i> ! <br>*<span>Crédits de jeu non retirables</span>`,
  },
  {
    name: '1c',
    image_url: '/images/regle/!!.png',
    title: 'Jeux exclusifs',
    description: `Enfin, RDV sur les <i>réseaux sociaux</i> de Betclic toute la journée pour avoir des indices et jouer à des <i>jeux exclusifs</i> 🎁 <br>
      <a target="_blank" href="https://www.instagram.com/betclicfrance/ "><img src="logo/instagram.png"/></a>
      <a target="_blank" href="https://www.tiktok.com/@betclicfrance "><img src="logo/tiktok.png"/></a>
      <a target="_blank" href="https://x.com/Betclic"><img src="logo/x.png"/></a>`,
  },
  {
    name: '2',
    image_url: '/images/regle/abonnez_vous.png',
    title: 'Abonnes-toi !',
    description: `Avant de partir… Tu dois être abonné aux <i>réseaux sociaux</i> suivants de Betclic pour pouvoir remporter des <i>Freebets*</i> *<span>Crédits de jeu non retirables</span><br>
      <a target="_blank" href="https://www.instagram.com/betclicfrance/ "><img src="logo/instagram.png"/></a>
      <a target="_blank" href="https://www.tiktok.com/@betclicfrance "><img src="logo/tiktok.png"/></a>
      <a target="_blank" href="https://x.com/Betclic"><img src="logo/x.png"/></a>`,
  },
  {
    name: '3',
    video_url: '/images/guide/ZOOM_HAND.mp4',
    title: 'Bonne chance 💪',
    description: 'Tu as toutes les infos bg : tu peux désormais <i>zoomer</i> dans l’app’ Betclic du téléphone et débuter ta course.',
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

      video,
      img {
        padding: $radiusValue*2 0;
        width: auto;
        height: 100%;
        border: 0 solid;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &.horizontal {
          width: 100%;
          height: auto;
        }
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
      font-weight: 700;
    }

    i {
      color: $colorGold;
    }

    span {
      font-size: 1.4vh;
    }

    img {
      max-width: 75px;
      width: 6.5vh;
      margin: 20px 10px 0 10px;
    }
  }
}
</style>
