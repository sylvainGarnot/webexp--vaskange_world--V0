<template>
  <div>
    <VskCard :isActive="isLocationEndReach"
      @update:is-active="($event: boolean) => setIsLocationEndReach($event as boolean)">
      <template v-slot:content>

        <v-row no-gutters class="message mt-4">
          <v-col cols="12" align="center">
            <h3>Attention !</h3>
          </v-col>
          <v-col cols="12" align="center">
            <p>Tu vas où ? Reste-làààà</p>
            <br>
            <p>Il n'y à rien à chercher ici... tu peux zoomer pour aller chercher les items et les codes cachés !</p>
          </v-col>
        </v-row>

        <v-row no-gutters class="links mt-12 mx-12">
          <VskThumbnailElementSimple :title="locationHome?.label" :background-url="`${locationHome?.image_url}`"
            :link="locationHome?.name"
            :description="locationHome?.itemsToAcquired.length > 0 ? `objets trouvés ${locationHome?.itemsAcquired.length} / ${locationHome?.itemsToAcquired.length}` : ''"
            @router-push="setIsLocationEndReach(false)" />
        </v-row>
      </template>
    </VskCard>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useLocationStore } from "@/stores/location"
import type { locationFoundInterface } from '@/stores/location/interface';

import VskCard from '@/layouts/VskCard.vue'
import VskThumbnailElementSimple from '@/layouts/VskThumbnailElementSimple.vue'


const locationStore = useLocationStore()
const { isLocationEndReach, locations_found } = storeToRefs(locationStore)
const { setIsLocationEndReach } = locationStore
const router = useRouter()

const locationHome = computed(() => {
  return locations_found.value.find(l => l.name === 'EP_WebXP_Start') as locationFoundInterface
})
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
