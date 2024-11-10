<template>
  <div>
    <VskBtn image="map" @click="open()" :active="isActive" :badge="newElement" />

    <VskCardTabs v-model:isActive="isActive" hasList :tabs="tabs">
      <template v-slot:lieux>
        <VskThumbnailSimpleGroup title="Lieux" :elements="locations_foundSorted" :elements-max-length="locations.length"
          @change-switch-value="(value: string) => { sortTypeLocation = value as string }"
          @router-push="isActive = false">
        </VskThumbnailSimpleGroup>
      </template>
      <template v-slot:secrets>
        <VskThumbnailSimpleGroup title="Secrets" :elements="characters_hidden_foundSorted"
          :elements-max-length="characters.length"
          @change-switch-value="(value: string) => { sortTypeCharacter = value as string }"
          @router-push="isActive = false">
        </VskThumbnailSimpleGroup>
      </template>
    </VskCardTabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { storeToRefs } from 'pinia'

import VskBtn from '@/layouts/VskBtn.vue'
import VskCardTabs from '@/layouts/VskCardTabs.vue'
import VskThumbnailSimpleGroup from '@/layouts/VskThumbnailSimpleGroup.vue'
import type { VskThumbnailSimpleInterface } from '@/layouts/VskThumbnailSimpleInterface';

import { useLocationStore } from "@/stores/location"
import type { locationFoundInterface } from '@/stores/location/interface';

import { useCharacterStore } from "@/stores/character"
import type { characterFoundInterface } from '@/stores/character/interface';

const locationStore = useLocationStore()
const { locations_found, locations } = storeToRefs(locationStore)

const characterStore = useCharacterStore()
const { characters_hidden_found, characters } = storeToRefs(characterStore)

const isActive = ref(false);
const sortTypeLocation = ref('date_asc');
const sortTypeCharacter = ref('date_asc');

let newElement = ref(0);

const tabs = [
  {
    label: 'lieux',
    value: 'lieux',
  },
  {
    label: 'secrets',
    value: 'secrets',
  }
]

watch(locations_found.value, () => {
  newElement.value = newElement.value + 1
}, { deep: false })
watch(characters_hidden_found.value, () => {
  newElement.value = newElement.value + 1
}, { deep: false })

const locations_foundSorted = computed(() => {
  const result = [] as VskThumbnailSimpleInterface[]
  for (const element of locations_found.value as locationFoundInterface[]) {
    result.push({
      id: element.id,
      title: element.label,
      description: element?.itemsToAcquired.length > 0 ? `objets trouvés ${element?.itemsAcquired.length} / ${element?.itemsToAcquired.length}` : '',
      link: element.name,
      image_url: element.image_url,
      date: element.found_date
    })
  }
  // if (sortTypeLocation.value === 'défaut') {
  //   return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)));
  // }
  // else if (sortTypeLocation.value === 'alpha') {
  //   return result.sort((a, b) => (a.title < b.title ? -1 : 1));
  // }
  // else if (sortTypeLocation.value === 'date') {
  //   return result.sort((a, b) => (a.date < b.date ? -1 : 1));
  // }
  if (sortTypeLocation.value === 'date_asc') {
    return result.sort((a, b) => (a.date < b.date ? -1 : 1))
  }
  else if (sortTypeLocation.value === 'date_desc') {
    return result.sort((a, b) => (a.date < b.date ? 1 : -1))
  }
  return result
})

const characters_hidden_foundSorted = computed(() => {
  const result = [] as VskThumbnailSimpleInterface[]
  for (const element of characters_hidden_found.value as characterFoundInterface[]) {
    result.push({
      id: element.id,
      title: element.label,
      description: element?.itemToAcquired ? `objet donné ${element?.itemAcquired ? '1' : '0'} / 1` : '',
      link: element.name,
      image_url: element.image_url,
      date: element.found_date
    })
  }
  // if (sortTypeCharacter.value === 'défaut') {
  //   return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)));
  // }
  // else if (sortTypeCharacter.value === 'alpha') {
  //   return result.sort((a, b) => (a.title < b.title ? -1 : 1));
  // }
  // else if (sortTypeCharacter.value === 'date') {
  //   return result.sort((a, b) => (a.date < b.date ? -1 : 1));
  // }
  if (sortTypeCharacter.value === 'date_asc') {
    return result.sort((a, b) => (a.date < b.date ? -1 : 1));
  }
  else if (sortTypeCharacter.value === 'date_desc') {
    return result.sort((a, b) => (a.date > b.date ? -1 : 1));
  }
})

function open() {
  isActive.value = !isActive.value
  newElement.value = 0
}
</script>

<style lang="scss" scoped></style>
