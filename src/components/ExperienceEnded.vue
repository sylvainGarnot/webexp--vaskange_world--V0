<template>
  <div>
    <MentionLegal />

    <VskCard :isActive="true" :hasCloseBtn="false">
      <template v-slot:content>

        <v-row no-gutters class="message">
          <v-col cols="12" align="center" class="logo">
            <img src="/logo/betclic.jpg" />
          </v-col>
          <v-col cols="12" align="center" class="mt-5">
            <h3>Merci d'avoir participé à La Course aux Freebets*</h3>
          </v-col>
          <v-col cols="12" align="center" class="mt-6">
            <p>🔥 Si tu as terminé l'expérience, tu participes au tirage au sort qui aura lieu Vendredi 29 novembre à
              midi.</p>
            <br>
            <p>RDV sur <a target="_blank" href="https://x.com/Betclic">X</a> et
              <a target="_blank" href="https://www.instagram.com/betclicfrance/">Instagram</a>. pour découvrir les
              résultats 🍀
            </p>
            <p>*<span>Crédits de jeu non retirables</span></p>
          </v-col>
          <v-col cols="12" align="center" class="social mt-2">
            <p>
              <a target="_blank" href="https://www.instagram.com/betclicfrance/ "><img src="/logo/instagram.png" /></a>
              <a target="_blank" href="https://x.com/Betclic"><img src="/logo/x.png" /></a>
            </p>
          </v-col>
        </v-row>

      </template>
    </VskCard>

  </div>
</template>

<script lang="ts" setup>
import MentionLegal from "@/components/MentionLegal.vue"
import VskCard from '@/layouts/VskCard.vue'
import { onMounted } from "vue";
import { apiPostAvancementUser } from "@/api/post";


onMounted(() => {
  apiPostAvancementUser('visite')
})


</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.message {
  color: $colorWhite;

  h3 {
    font-size: 4.6vh;
  }

  a {
    color: $colorGrey;
  }

  p {
    font-size: 2.1vh;
  }

  span {
    font-size: 1.4vh;
  }

  .logo img {
    max-width: 240px;
    width: 60%;
    margin: 0px 10px;
  }

  .social img {
    max-width: 100px;
    width: 7.5vh;
    margin: 0px 10px;
  }
}
</style>