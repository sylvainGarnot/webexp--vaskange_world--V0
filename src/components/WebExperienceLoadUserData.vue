<template>
  <div>

    <div v-if="loading" class="vsk-load-user-data--progression-overlay">
      <div class="vsk-load-user-data--progression-container">
        <v-row no-gutters class="vsk-load-user-data--progression">
          <v-col cols="12" align="center">
            <p>Récupération de vos données</p>
          </v-col>
          <v-col cols="12" class="mt-3">
            <v-progress-linear height="16" indeterminate rounded></v-progress-linear>
          </v-col>
        </v-row>
      </div>
    </div>


    <VskCard :isActive="isActive" @update:is-active="$event => $emit('update:isActive', $event)"
      @close="handleReprendre()">
      <template v-slot:content>

        <v-row no-gutters class="vsk-load-user-data--message mt-4">
          <v-col cols="12" align="center">
            <h3>Bon retour !</h3>
          </v-col>
          <v-col cols="12" align="center">
            <p>Vous pouvez reprendre là où vous en étiez</p>
            <p>Ou recommencer votre expérience de zéro</p>
          </v-col>
          <v-col cols="12" align="center" class="mt-6">
            <v-btn @click="handleReprendre()">Reprendre votre sauvegarde</v-btn>
          </v-col>
          <v-col cols="12" align="center" class="mt-6">
            <v-btn @click="handleRecommencer()">Recommencer</v-btn>
          </v-col>
        </v-row>
      </template>
    </VskCard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import VskCard from '@/layouts/VskCard.vue'
import { setLocationFoundFromCookies, setDefaultLocationFound } from '@/stores/location/action';
import { setCharacterFoundFromCookies } from '@/stores/character/action';
import { setItemAcquiredFromCookies } from '@/stores/item/action';
import { deleteBrowserCookies } from '@/stores/setting/action';
import { playMusic } from '@/stores/music/action';

const emit = defineEmits(['update:isActive'])

const props = defineProps({
  isActive: Boolean,
})

const loading = ref(false);


function handleReprendre() {
  loading.value = true

  setLocationFoundFromCookies()

  setTimeout(() => {
    setCharacterFoundFromCookies()

    setTimeout(() => {
      setItemAcquiredFromCookies()
      loading.value = false
    }, 2250);

  }, 2250);
  playMusic()
  emit('update:isActive', false)
}

function handleRecommencer() {
  deleteBrowserCookies()
  setDefaultLocationFound()
  emit('update:isActive', false)
}

</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.vsk-load-user-data--message {
  color: $colorWhite;

  h3 {
    font-size: 4.6vh;
  }

  p {
    font-size: 2.1vh;
  }
}

.vsk-load-user-data--progression-overlay {
  position: fixed;
  overflow-y: scroll;
  inset: 0;
  background-color: $colorBlackLightUltra;

  .vsk-load-user-data--progression-container {
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .vsk-load-user-data--progression {
      color: $colorWhite;
      font-size: 2.2vh;
      font-weight: 700;
      text-shadow: $shadow;
    }
  }

}
</style>

<style lang="scss">
@import '@/assets/styles/_global_variable.scss';

.v-progress-linear__background {
  opacity: 0.35;
  background-color: $colorBlack;
}

.v-progress-linear__indeterminate {
  background-color: $colorGold;
}
</style>