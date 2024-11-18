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
            <p>Vous êtes arrivé à la fin de la gallerie</p>
            <p>Il n'y a rien plus loin...</p>
            <p>Ne vous perdez pas</p>
          </v-col>
        </v-row>

        <v-row no-gutters class="links mt-12 mx-12">
          <VskThumbnailSimple :title="locationHome?.label" :background-url="`${locationHome?.image_url}`"
            :link="locationHome?.name"
            :description="locationHome!.itemsToAcquired.length > 0 ? `objets trouvés ${locationHome?.itemsAcquired.length} / ${locationHome?.itemsToAcquired.length}` : ''"
            @router-push="setIsLocationEndReach(false)" />

          <!-- <VskThumbnailSimple :title="locationEnd?.name" :imageUrl="`${locationEnd?.image_url}`" :link="locationEnd?.name"
            :description="locationEnd!.itemsToAcquired.length > 0 ? `objets trouvés ${locationEnd?.itemsAcquired.length} / ${locationEnd?.itemsToAcquired.length}` : ''"
            @router-push="setIsLocationEndReach(false)" /> -->
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
import VskThumbnailSimple from '@/layouts/VskThumbnailSimple.vue'


const locationStore = useLocationStore()
const { isLocationEndReach, locations_found } = storeToRefs(locationStore)
const { setIsLocationEndReach } = locationStore
const router = useRouter()

const locationHome = computed(() => {
  return locations_found.value.find(l => l.id === '0') as locationFoundInterface
})

// const locationEnd = computed(() => {
//   return locations_found.value.find(l => l.id === '9999') as locationFoundInterface
// })
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
