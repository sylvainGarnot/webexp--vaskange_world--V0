<template>
  <div>
    <VskBtn image="/icon/map.png" @click="open()" :active="isActive" :badge="newElement"
      :badge-star="isAllItemsAcquired && !isTheHiddenPlaceFound" />

    <VskCardTabs v-model:isActive="isActive" @close="onClose()" hasList :tabs="tabs">
      <template v-slot:lieux>
        <VskThumbnailGroup title="Lieux et Objets" description="Retrouve ici tous les lieux et les objets que tu as déjà trouvés. Si tu veux te téléporter dans une scène,
          tu as simplement à cliquer dessus !" :subtitle="`objets trouvés : ${items_acquired.length}/${items.length}`"
          :elements="locationsSorted" :elements-max-length="locations.length" v-model:switchValues="switchValues"
          @router-push="isActive = false">
        </VskThumbnailGroup>
      </template>
      <template v-slot:codes_promos>
        <VskThumbnailGroup title="Lieux secrets"
          description="Retrouve les codes promos cachés dans les différents univers sportifs !"
          :subtitle="`${characters_hidden_found.length}/${characters_hidden.length}`"
          :elements="characters_hidden_sorted" :elements-max-length="characters_hidden.length"
          v-model:switchValues="switchValues" @router-push="isActive = false">
        </VskThumbnailGroup>
      </template>
    </VskCardTabs>

    <WebExperienceAlertAllItemAcquired v-model:isActive="webExperienceAlertAllItemAcquiredIsActive" />

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { storeToRefs } from 'pinia'

import WebExperienceAlertAllItemAcquired from "@/components/WebExperienceAlertAllItemAcquired.vue"
import VskBtn from '@/layouts/VskBtn.vue'
import VskCardTabs from '@/layouts/VskCardTabs.vue'
import VskThumbnailGroup from '@/layouts/VskThumbnailGroup.vue'
import type { VskThumbnailElementInterface } from '@/layouts/VskThumbnailElementInterface';
import type { VskSwitchElementInterface } from '@/layouts/VskSwitchElementInterface';

import { useLocationStore } from "@/stores/location"
import type { locationInterface, locationFoundInterface } from '@/stores/location/interface';

import { useCharacterStore } from "@/stores/character"
import type { characterFoundInterface, characterInterface } from '@/stores/character/interface';

import { useItemStore } from "@/stores/item"
import type { itemAcquiredInterface, itemInterface } from '@/stores/item/interface';
import { isLoading } from '@/stores/setting/state';

const locationStore = useLocationStore()
const { locations_found, locations, isTheHiddenPlaceFound } = storeToRefs(locationStore)

const characterStore = useCharacterStore()
const { characters_hidden, characters_hidden_found, characters_found, characters_found_sorted_by_date } = storeToRefs(characterStore)

const itemStore = useItemStore()
const { items, items_acquired, isAllItemsAcquired } = storeToRefs(itemStore)


// VARIABLES
const isActive = ref(false as boolean);
const webExperienceAlertAllItemAcquiredIsActive = ref(false)

let newElement = ref(0 as number);

const tabs = [
  {
    label: 'lieux',
    value: 'lieux',
  },
  {
    label: 'codes promos',
    value: 'codes_promos',
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
] as VskSwitchElementInterface[]);

// const switchValueNameSelected = ref('date_asc' as string)


// WATCH
watch(locations_found.value, () => {
  if (!isLoading.value) newElement.value = newElement.value + 1
}, { deep: false })

watch(items_acquired.value, () => {
  if (!isLoading.value) newElement.value = newElement.value + 1
}, { deep: false })

watch(characters_found.value, () => {
  if (characters_found_sorted_by_date?.value[0]?.is_hidden) {
    if (!isLoading.value) newElement.value = newElement.value + 1
  }
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
  const result = [] as VskThumbnailElementInterface[]

  for (const location of locations.value as locationInterface[]) {
    const locationFound = locations_found.value.find(l => l.id === location.id) as locationFoundInterface
    if (locationFound as locationFoundInterface) {

      const illustrations = [] as string[]
      if (locationFound.itemsToAcquired.length > 0) {

        for (let j = 0; j < locationFound.itemsToAcquired.length; j++) {
          const itemId = locationFound.itemsToAcquired[j] as string

          if (locationFound.itemsAcquired.includes(itemId)) {
            const itemAcquired = items_acquired.value.find(i => i.id === itemId) as itemAcquiredInterface
            illustrations.push(itemAcquired?.image_url as string)
          } else {
            const itemToAcquired = items.value.find(i => i.id === itemId) as itemInterface
            illustrations.push(itemToAcquired?.image_url_unfound as string)
          }
        }
      }

      result.push({
        id: locationFound.id,
        title: locationFound.label,
        description: locationFound?.itemsToAcquired.length > 0 ? `objets trouvés ${locationFound?.itemsAcquired.length} / ${locationFound?.itemsToAcquired.length}` : '',
        link: locationFound.name,
        background: locationFound.image_url,
        illustrations,
        date: locationFound.found_date,
        completed: locationFound?.itemsToAcquired.length > 0 && locationFound?.itemsToAcquired.length === locationFound?.itemsAcquired.length ? true : false,
      } as VskThumbnailElementInterface)
    } else {
      result.push({
        id: location.id,
        title: 'À découvrir...',
        description: '',
        link: '',
        background: location.image_url_unfound,
        illustrations: [],
        date: new Date(),
        completed: false,
      } as VskThumbnailElementInterface)
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
  const result = [] as VskThumbnailElementInterface[]

  for (const characterHidden of characters_hidden.value as characterInterface[]) {
    const characterHiddenFound = characters_hidden_found.value.find(c => c.id === characterHidden.id) as characterFoundInterface
    if (characterHiddenFound as characterFoundInterface) {
      result.push({
        id: characterHiddenFound.id,
        title: characterHiddenFound.label,
        description: characterHiddenFound?.itemToAcquired ? `objet donné ${characterHiddenFound?.itemAcquired ? '1' : '0'} / 1` : '',
        link: characterHiddenFound.name,
        background: characterHiddenFound.image_url,
        illustrations: [],
        date: characterHiddenFound.found_date,
        completed: false,
      } as VskThumbnailElementInterface)
    } else {
      result.push({
        id: characterHidden.id,
        title: 'À découvrir...',
        description: '',
        link: '',
        background: characterHidden.image_url_unfound,
        illustrations: [],
        date: new Date(),
        completed: false,
      } as VskThumbnailElementInterface)
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

function onClose() {
  if (isAllItemsAcquired.value && !isTheHiddenPlaceFound.value) {
    webExperienceAlertAllItemAcquiredIsActive.value = true;
  }
}

</script>

<style lang="scss" scoped></style>
