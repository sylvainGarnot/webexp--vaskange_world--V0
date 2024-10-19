<template>
  <div>
    <VskCard :isActive="isLocationEndReach"
      @update:is-active="($event: boolean) => setIsLocationEndReach($event as boolean)">
      <template v-slot:content>

        <v-row no-gutters class="message mt-4">
          <v-col cols="12">
            <h3>Attention !</h3>
          </v-col>
          <v-col cols="12">
            <p>Vous êtes arrivé à la fin de la gallerie</p>
            <p>Il n'y a rien plus loin...</p>
            <p>Ne vous perdez pas</p>
          </v-col>
        </v-row>

        <v-row no-gutters class="links mt-12 mx-12">
          <VskThumbnail :title="locationEnd?.name" :imageUrl="`${locationEnd?.image_url}`" :link="locationEnd?.name"
            :description="locationEnd!.nbrItemsToAcquired > 0 ? `secrets trouvé ${locationEnd?.nbrItemsAcquired} / ${locationEnd?.nbrItemsToAcquired}` : ''"
            @router-push="setIsLocationEndReach(false)" />

          <VskThumbnail :title="locationHome?.name" :imageUrl="`${locationHome?.image_url}`" :link="locationHome?.name"
            :description="locationHome!.nbrItemsToAcquired > 0 ? `secrets trouvé ${locationHome?.nbrItemsAcquired} / ${locationHome?.nbrItemsToAcquired}` : ''"
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
import VskThumbnail from '@/layouts/VskThumbnail.vue'


const locationStore = useLocationStore()
const { isLocationEndReach, locations_found } = storeToRefs(locationStore)
const { setIsLocationEndReach } = locationStore
const router = useRouter()

const locationEnd = computed(() => {
  return locations_found.value.find(l => l.name === 'bureau 🏠') as locationFoundInterface
})

const locationHome = computed(() => {
  return locations_found.value.find(l => l.name === 'big bang 🪐') as locationFoundInterface
})

// function updateIsActiveCard(event: boolean) {
//   if (!event) {
//     console.log('TETETETE')
//     router.push({ name: 'home' })
//     setIsLocationEndReach(false)
//   }
// }
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  color: white;

  h3 {
    font-size: 4.6vh;
  }

  p {
    font-size: 2.1vh;
  }
}

.content {
  overflow-y: scroll;
  max-height: 45vh;
  border-top: solid 1px grey;

  div {
    width: 100%;
  }
}
</style>
