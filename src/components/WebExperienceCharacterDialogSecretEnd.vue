<template>
  <div>
    <VskCard v-model:isActive="isActive" has-close-footer>
      <template v-slot:content>
        <div class="vsk-character-dialog-secret-end px-6">

          <!-- ITEMS RÉCUPÉRÉS && FORMULAIRE ENVOYÉ -->
          <v-row v-if="isSecretEndSended && isAllItemsAcquired" no-gutters
            class="vsk-character-dialog-secret-end--description">
            <v-col cols="12" align="center" class="mt-5">
              <h3>📅 Tirage au sort vendredi 29 novembre 2024 à midi</h3>
            </v-col>
            <v-col cols="12" align="center" class="mt-5">
              <p> Annonce des gagnants sur X (<a target="_blank" href="https://x.com/Betclic">https://x.com/Betclic</a>)
                et Instagram
                (<a target="_blank"
                  href="https://www.instagram.com/betclicfrance/">https://www.instagram.com/betclicfrance/</a>). Tous
                les
                gagnants seront crédités le vendredi 29 novembre 2024 !</p>
            </v-col>
            <v-col cols="12" align="center" class="mt-5">
              <p>📎 Règlement disponible <a target="_blank" href="https://bit.ly/499OnyF">ici</a></p>
            </v-col>
            <v-col cols="12" align="center" class="mt-5">
              <p>🔄 Tu peux refaire la Course aux Freebets si tu le
                souhaites : il reste peut-être des codes promos que tu n’as pas encore trouvé ! RDV dans ton
                inventaire
                pour retourner dans la scène de ton choix
              </p>
            </v-col>
          </v-row>

          <!-- ITEMS NON RÉCUPÉRÉS -->
          <v-row v-else-if="!isAllItemsAcquired" no-gutters class="vsk-character-dialog-secret-end--description">
            <v-col cols="12" align="center">
              <p>Vous n'avez pas encore trouvé tout les objets</p>
            </v-col>
            <v-col cols="12" align="center" class="mt-2">
              <p>cherchez mieux !</p>
            </v-col>
          </v-row>

          <!-- FORMULAIRE NON ENVOYÉ -->
          <v-row v-else-if="!isSecretEndSended" no-gutters class="vsk-character-dialog-secret-end--description">
            <v-col cols="12" align="center">
              <p>🔥 Félicitations, tu as trouvé tous les items de
                La Course aux
                Freebets ! Rentre ton pseudo Betclic
                pour participer au grand tirage au sort :</p>
            </v-col>
            <v-col cols="12" class="mt-5 px-12" align="center">
              <v-form @submit.prevent="apiPostSecretEnd(identifiantBetclic)">
                <v-text-field label="Identifiant Betclic" :loading="loading" required clearable
                  append-inner-icon="mdi-send" v-model="identifiantBetclic" :rules="rules"
                  @click:append-inner="tryValidate = true">
                </v-text-field>
                <Transition>
                  <div v-if="tryValidate" class="vsk-character-dialog-secret-end--attention">
                    <p>Vérifiez bien votre identifiant, vous devrez entièrement recommencer l'expérience si vous vous
                      êtes
                      trompé !</p>
                    <v-btn class="mt-2" block type="submit">VALIDER</v-btn>
                  </div>
                </Transition>
              </v-form>
            </v-col>
            <v-col cols="12" align="center" class="mt-5">
              <p>🎁 À gagner :</p>
            </v-col>
            <v-col cols=" 12" align="center" class="mt-5">
              <p>100x50€ de Freebets</p>
              <p>200x30€ de Freebets</p>
              <p>300x20€ de Freebets</p>
            </v-col>
          </v-row>
        </div>
      </template>
    </VskCard>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, onBeforeUnmount, ref } from "vue";
import VskCard from '@/layouts/VskCard.vue'
import { playSound } from "@/stores/music/action";
import { isAllItemsAcquired } from "@/stores/item/getter"; // ATTENTION
import axios from 'axios';
import { postBrowserCookie, setIsSecretEndSended } from "@/stores/setting/action";
import { isSecretEndSended } from "@/stores/setting/state";
import { setIsDialogMentionLegalActive } from "@/stores/dialog/action";

const isActive = ref(true);
const loading = ref(false);
const tryValidate = ref(false);
const identifiantBetclic = ref('')


const rules = ref([
  (value: string) => {
    if (value && value.length < 3) return 'Vous devez entrer au moins 3 caractères'
    else return true
  },
])

onMounted(() => {
  playSound('son_bouton_ihm')
})

function apiPostSecretEnd(input: string) {
  loading.value = true
  axios
    .post('https://joyful-bee-2518d744f7.strapiapp.com/api/secret-ends', {
      "data": {
        identifiant: input
      }
    }).then(response => {
      setIsSecretEndSended(true)

      console.log(response); // TEST
    }).catch(error => {
      console.log(error); // TEST
    }).finally(() => {
      loading.value = false
    });
}


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

.vsk-character-dialog-secret-end {

  .vsk-character-dialog-secret-end--description {
    color: $colorWhite;
    font-size: 2.3vh;

    .vsk-character-dialog-secret-end--attention {
      color: $colorGrey;
      font-size: 1.6vh;
    }

    a {
      color: $colorGrey;
    }
  }
}
</style>
