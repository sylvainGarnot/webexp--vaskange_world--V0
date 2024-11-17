<template>
  <div>
    <VskCard :isActive="isActive" @update:is-active="$event => $emit('update:isActive', $event)">
      <template v-slot:content>

        <v-row no-gutters class="message mt-4">
          <v-col cols="12" align="center">
            <h3>Bon retour !</h3>
          </v-col>
          <v-col cols="12" align="center">
            <p>Vous pouvez reprendre là où vous en étiez</p>
            <p>Ou recommencer votre expérience de zéro</p>
          </v-col>
          <v-col cols="12" align="center" class="mt-6">
            <v-btn @click="handleReprendre()">reprendre là où j'en étais</v-btn>
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
import VskCard from '@/layouts/VskCard.vue'
import { setLocationFromCookies } from '@/stores/location/action';
import { deleteBrowserCookies } from '@/stores/setting/action';

const emit = defineEmits(['update:isActive'])

const props = defineProps({
  isActive: Boolean,
})

function handleReprendre() {
  setLocationFromCookies()
  emit('update:isActive', false)
}

function handleRecommencer() {
  deleteBrowserCookies()
  emit('update:isActive', false)
}

</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.message {
  color: $colorWhite;

  h3 {
    font-size: 4.6vh;
  }

  p {
    font-size: 2.1vh;
  }
}
</style>
