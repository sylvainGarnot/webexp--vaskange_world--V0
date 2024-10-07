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
            <VskSwitchGroup class="v-row v-row--no-gutters mt-3 mb-3 px-8" :fields="sortTypes"
              @select="changeSwitchValue" />

            <!-- CONTENT -->
            <v-row no-gutters class="vsk-map-locations pb-2 px-2">
              <v-col cols="12" class="mt-2" v-for="locationFound in locations_foundSorted">
                <VskThumbnail :title="locationFound.name" :location="locationFound.name"
                  :imageUrl="`src/assets/images/${locationFound.image_url}.png`" @router-push="isActive = false" />
              </v-col>
              <v-col cols="12" class="mt-2" v-if="locations_found.length < locations.length">
                <VskThumbnail title="À découvrir..." :imageUrl="`src/assets/images/secret_place.png`" />
              </v-col>
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
import type { locationFoundInterface } from '@/stores/location/interface';

const locationStore = useLocationStore()
const { locations_found, locations } = storeToRefs(locationStore)

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
  const result = [...locations_found.value] as locationFoundInterface[];
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
      }
    }
  }
}
</style>
