<template>
  <div>
    <VskBtn image="map" @click="isActive = !isActive" />

    <v-dialog class="vsk-map-v-dialog" v-model="isActive">
      <template v-slot:default>
        <v-card class="vsk-map-v-card">
          <div class="vsk-map-content">

            <!-- TITRE -->
            <v-row no-gutters class="vsk-map-title mt-8">
              <v-col cols="12">
                <h3>Lieux découverts</h3>
              </v-col>
            </v-row>

            <!-- FILTRES -->
            <VskSwitchGroup class="v-row v-row--no-gutters mt-5 mb-3 px-8" :fields="sortTypes"
              @select="changeSwitchValue" />

            <!-- CONTENT -->
            <v-row no-gutters class="vsk-map-locations px-3 pb-3">
              <TransitionGroup name="list-animation" tag="div">
                <VskThumbnail v-for="locationFound in locations_foundSorted" :key="locationFound.id"
                  :title="locationFound.name" :link="locationFound.name"
                  :subtitle="locationFound?.nbrItemsToAcquired > 0 ? `secrets trouvé ${locationFound?.nbrItemsAcquired} / ${locationFound?.nbrItemsToAcquired}` : ''"
                  :imageUrl="`src/assets/images/${locationFound.image_url}.png`" @router-push="isActive = false" />
                <VskThumbnail v-if="locationsFoundProgression.length < locations.length" title="À découvrir..."
                  :imageUrl="`src/assets/images/secret_place.png`" />
              </TransitionGroup>
            </v-row>
          </div>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia'
import VskThumbnail from '@/layouts/VskThumbnail.vue'
import VskBtn from '@/layouts/VskBtn.vue'
import VskSwitchGroup from '@/layouts/VskSwitchGroup.vue'

import { useLocationStore } from "@/stores/location"
import type { locationFoundProgressionInterface } from '@/stores/location/interface';

const locationStore = useLocationStore()
const { locationsFoundProgression, locations } = storeToRefs(locationStore)

const isActive = ref(false);

const sortTypes = ref([
  {
    label: 'défaut',
    selected: true,
  },
  {
    label: 'alpha',
    selected: false,
  },
  {
    label: 'date',
    selected: false,
  },
]);


function changeSwitchValue(value: string) {
  for (const sortType of sortTypes.value) {
    if (sortType.label === value) {
      sortType.selected = true
    } else {
      sortType.selected = false
    }
  }
}

const sortType = computed(() => {
  for (const sortType of sortTypes.value) {
    if (sortType.selected) {
      return sortType.label
    }
  }
})

const locations_foundSorted = computed(() => {
  const result = [...locationsFoundProgression.value] as locationFoundProgressionInterface[];
  if (sortType.value === 'défaut') {
    return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)));
  }
  else if (sortType.value === 'alpha') {
    return result.sort((a, b) => (a.name < b.name ? -1 : 1));
  }
  else if (sortType.value === 'date') {
    return result.sort((a, b) => (a.found_date < b.found_date ? -1 : 1));
  }
})


</script>

<style lang="scss" scoped>
.vsk-map-v-dialog {
  width: 100%;
  max-width: 540px;

  .vsk-map-v-card {
    border-radius: 0.8vh;
    background-color: rgba(29, 27, 25, 0.8);

    .vsk-map-content {
      margin: 1vh;
      border-radius: 0.8vh;
      border: solid 1px grey;
      background-color: rgba(29, 27, 25, 0.8);

      .vsk-map-title {
        text-align: center;
        color: white;
        font-size: 3.2vh;
      }

      .vsk-map-locations {
        overflow-y: scroll;
        max-height: 45vh;
        border-top: solid 1px grey;

        div {
          width: 100%;
        }
      }
    }
  }
}

.list-animation-move,
.list-animation-enter-active,
.list-animation-leave-active {
  transition: all 0.5s ease;
}
</style>
