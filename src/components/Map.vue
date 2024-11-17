<template>
  <div>
    <VskBtn image="/icon/map.png" @click="open()" :active="isActive" :badge="newElement" />

    <VskCardTabs v-model:isActive="isActive" hasList :tabs="tabs">
      <template v-slot:lieux>
        <VskThumbnailSimpleGroup title="Carte des lieux" :elements="locationsSorted"
          :elements-max-length="locations.length" v-model:switchValues="switchValues" @router-push="isActive = false">
        </VskThumbnailSimpleGroup>
      </template>
      <template v-slot:secrets>
        <VskThumbnailSimpleGroup title="Lieux secrets" :elements="characters_hidden_sorted"
          :elements-max-length="characters_hidden.length" v-model:switchValues="switchValues"
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
import type { VskSwitchInterface } from '@/layouts/VskSwitchInterface';

import { useLocationStore } from "@/stores/location"
import type { locationInterface, locationFoundInterface } from '@/stores/location/interface';

import { useCharacterStore } from "@/stores/character"
import type { characterFoundInterface, characterInterface } from '@/stores/character/interface';

const locationStore = useLocationStore()
const { locations_found, locations } = storeToRefs(locationStore)

const characterStore = useCharacterStore()
const { characters_hidden, characters_hidden_found } = storeToRefs(characterStore)


// VARIABLES
const isActive = ref(false as boolean);

let newElement = ref(0 as number);

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

const switchValues = ref([
  // {
  //   name: 'date_asc',
  //   label: 'premier découvert',
  //   selected: true,
  // },
  // {
  //   name: 'date_desc',
  //   label: 'dernier découvert',
  //   selected: false,
  // },
] as VskSwitchInterface[]);

// const switchValueNameSelected = ref('date_asc' as string)


// WATCH
watch(locations_found.value, () => {
  newElement.value = newElement.value + 1
}, { deep: false })

watch(characters_hidden_found.value, () => {
  newElement.value = newElement.value + 1
}, { deep: false })

// watch(switchValues.value, () => {
//   for (let index = 0; index < switchValues.value.length; index++) {
//     if (switchValues.value[index].selected) {
//       switchValueNameSelected.value = switchValues.value[index].name as string
//     }
//   }
// }, { deep: true })


// COMPUTED
const locationsSorted = computed(() => {
  const result = [] as VskThumbnailSimpleInterface[]

  for (const location of locations.value as locationInterface[]) {
    const locationFound = locations_found.value.find(l => l.id === location.id) as locationFoundInterface
    if (locationFound as locationFoundInterface) {
      result.push({
        id: locationFound.id,
        title: locationFound.label,
        description: locationFound?.itemsToAcquired.length > 0 ? `objets trouvés ${locationFound?.itemsAcquired.length} / ${locationFound?.itemsToAcquired.length}` : '',
        link: locationFound.name,
        image_url: locationFound.image_url,
        date: locationFound.found_date
      } as VskThumbnailSimpleInterface)
    } else {
      result.push({
        id: location.id,
        title: 'À découvrir...',
        description: '',
        link: '',
        image_url: location.image_url_unfound,
        date: new Date()
      } as VskThumbnailSimpleInterface)
    }
  }
  // if (switchValueNameSelected.value === 'défaut') {
  //   return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)));
  // }
  // else if (switchValueNameSelected.value === 'alpha') {
  //   return result.sort((a, b) => (a.title < b.title ? -1 : 1));
  // }
  // if (switchValueNameSelected.value === 'date_asc') {
  //   return result.sort((a, b) => (a.date < b.date ? -1 : 1))
  // }
  // else if (switchValueNameSelected.value === 'date_desc') {
  //   return result.sort((a, b) => (a.date < b.date ? 1 : -1))
  // }
  return result
})

const characters_hidden_sorted = computed(() => {
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

  for (const characterHidden of characters_hidden.value as characterInterface[]) {
    const characterHiddenFound = characters_hidden_found.value.find(c => c.id === characterHidden.id) as characterFoundInterface
    if (characterHiddenFound as characterFoundInterface) {
      result.push({
        id: characterHiddenFound.id,
        title: characterHiddenFound.label,
        description: characterHiddenFound?.itemToAcquired ? `objet donné ${characterHiddenFound?.itemAcquired ? '1' : '0'} / 1` : '',
        link: characterHiddenFound.name,
        image_url: characterHiddenFound.image_url,
        date: characterHiddenFound.found_date
      } as VskThumbnailSimpleInterface)
    } else {
      result.push({
        id: characterHidden.id,
        title: 'À découvrir...',
        description: '',
        link: '',
        image_url: characterHidden.image_url_unfound,
        date: new Date()
      } as VskThumbnailSimpleInterface)
    }
  }

  // if (switchValueNameSelected.value === 'défaut') {
  //   return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)));
  // }
  // else if (switchValueNameSelected.value === 'alpha') {
  //   return result.sort((a, b) => (a.title < b.title ? -1 : 1));
  // }
  // if (switchValueNameSelected.value === 'date_asc') {
  //   return result.sort((a, b) => (a.date < b.date ? -1 : 1));
  // }
  // else if (switchValueNameSelected.value === 'date_desc') {
  //   return result.sort((a, b) => (a.date < b.date ? 1 : -1));
  // }
  return result
})


// FUNCTIONS
function open() {
  isActive.value = !isActive.value
  newElement.value = 0
}
</script>

<style lang="scss" scoped></style>
