<template>
  <div>
    <VskMenuBtn image="map" @click="isActive = !isActive" />

    <VskCardTabs v-model:isActive="isActive" hasList :tabs="tabs">
      <template v-slot:lieux>
        <VskThumbnailGroup title="Lieux découverts" :elements="locations_foundSorted"
          :elements-max-length="locations.length"
          @change-switch-value="(value: string) => { sortTypeLocation = value as string }"
          @router-push="isActive = false">
        </VskThumbnailGroup>
      </template>
      <template v-slot:personnage>
        <VskThumbnailGroup title="Rencontres" :elements="characters_foundSorted"
          :elements-max-length="characters.length"
          @change-switch-value="(value: string) => { sortTypeCharacter = value as string }"
          @router-push="isActive = false">
        </VskThumbnailGroup>
      </template>
    </VskCardTabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia'

import VskMenuBtn from '@/layouts/VskMenuBtn.vue'
import VskCardTabs from '@/layouts/VskCardTabs.vue'
import VskThumbnailGroup from '@/layouts/VskThumbnailGroup.vue'

import { useLocationStore } from "@/stores/location"
import type { locationFoundInterface } from '@/stores/location/interface';

import { useCharacterStore } from "@/stores/character"
import type { characterFoundInterface } from '@/stores/character/interface';

const locationStore = useLocationStore()
const { locations_found, locations } = storeToRefs(locationStore)

const characterStore = useCharacterStore()
const { characters_found, characters } = storeToRefs(characterStore)

const isActive = ref(false);
const sortTypeLocation = ref('défaut');
const sortTypeCharacter = ref('défaut');

const tabs = [
  {
    label: 'lieux',
    value: 'lieux',
  },
  {
    label: 'personnage',
    value: 'personnage',
  }
]

const locations_foundSorted = computed(() => {
  const result = []
  for (const element of locations_found.value as locationFoundInterface[]) {
    result.push({
      ...element,
      title: element.name,
      description: element?.nbrItemsToAcquired > 0 ? `secrets trouvé ${element?.nbrItemsAcquired} / ${element?.nbrItemsToAcquired}` : '',
    })
  }
  if (sortTypeLocation.value === 'défaut') {
    return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)));
  }
  else if (sortTypeLocation.value === 'alpha') {
    return result.sort((a, b) => (a.name < b.name ? -1 : 1));
  }
  else if (sortTypeLocation.value === 'date') {
    return result.sort((a, b) => (a.found_date < b.found_date ? -1 : 1));
  }
})

const characters_foundSorted = computed(() => {
  const result = []
  for (const element of characters_found.value as characterFoundInterface[]) {
    result.push({
      ...element,
      title: element.name,
      description: element?.itemToAcquired ? `objet donné ${element?.itemAcquired ? '1' : '0'} / 1` : '',
    })
  }
  if (sortTypeCharacter.value === 'défaut') {
    return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)));
  }
  else if (sortTypeCharacter.value === 'alpha') {
    return result.sort((a, b) => (a.name < b.name ? -1 : 1));
  }
  else if (sortTypeCharacter.value === 'date') {
    return result.sort((a, b) => (a.found_date < b.found_date ? -1 : 1));
  }
})
</script>

<style lang="scss" scoped>
.vsk-map-v-tabs-menu {

  button,
  span {
    color: grey;
    font-family: 'Gill Sans';
    font-size: 1.5vh;
    font-weight: 500;

    &.v-tab--selected {
      color: white;
    }
  }
}

.vsk-map-v-dialog {
  width: 100%;
  max-width: 540px;

  .vsk-map-v-card {
    border-radius: 0.8vh;
    background-color: rgba(29, 27, 25, 0.8);

    position: absolute;
    top: -50vh+15vh;
    left: 18px;

    .vsk-map-close {
      position: absolute;
      right: 0.2vh;
      top: 0.2vh;
      cursor: pointer;

      color: white;
      font-size: 4.2vh;
      border-radius: 0.8vh;
      transition: background-color 250ms ease-in;

      &:hover {
        background-color: grey;
      }
    }

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
