<template>
  <div>
    <VskBtn image="map" @click="isActive = !isActive" :active="isActive" />

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

import VskBtn from '@/layouts/VskBtn.vue'
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
      title: element.message,
      description: element?.nbrItemsToAcquired > 0 ? `secrets trouvé ${element?.nbrItemsAcquired} / ${element?.nbrItemsToAcquired}` : '',
      link: element.name
    })
  }
  if (sortTypeLocation.value === 'défaut') {
    return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)));
  }
  else if (sortTypeLocation.value === 'alpha') {
    return result.sort((a, b) => (a.message < b.message ? -1 : 1));
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
      link: element.name
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

<style lang="scss" scoped></style>
