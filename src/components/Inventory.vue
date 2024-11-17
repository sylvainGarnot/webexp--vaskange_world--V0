<template>
  <div>
    <VskBtn image="/icon/inventaire.png" :disable="items_acquired!.length === 0" @click="open()" :active="isActive"
      :badge="newElement" :badge-type="isAllItemsAcquired ? 'info' : 'error'" />


    <VskCard v-model:isActive="isActive" @close="onClose()" hasList>
      <template v-slot:content>
        <VskThumbnailTripleGroup thumbnail-card title="Objets Trouvés"
          :subtitle="`objets trouvés : ${items_acquired.length}/${items.length}`" :elements="itemsSortedByDate"
          v-model:switchValues="switchValues">
        </VskThumbnailTripleGroup>
      </template>
    </VskCard>

    <WebExperienceAlertAllItemAcquired v-model:isActive="webExperienceAlertAllItemAcquiredIsActive" />

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { storeToRefs } from 'pinia'

import VskBtn from '@/layouts/VskBtn.vue'
import WebExperienceAlertAllItemAcquired from "@/components/WebExperienceAlertAllItemAcquired.vue"

import VskCard from '@/layouts/VskCard.vue'
import VskThumbnailTripleGroup from '@/layouts/VskThumbnailTripleGroup.vue'
import type { VskThumbnailTripleInterface } from '@/layouts/VskThumbnailTripleInterface.ts'
import type { VskSwitchInterface } from '@/layouts/VskSwitchInterface';

import { useItemStore } from "@/stores/item"
import { useLocationStore } from "@/stores/location";

const itemStore = useItemStore()
const { items_acquired, items, isAllItemsAcquired } = storeToRefs(itemStore)

const locationStore = useLocationStore();
const { locations_found, isTheHiddenPlaceFound } = storeToRefs(locationStore);


// VARIABLES
const isActive = ref(false as boolean);
const webExperienceAlertAllItemAcquiredIsActive = ref(false)

let newElement = ref(0 as number);

const switchValues = ref([
  // {
  //   name: 'date_asc',
  //   label: 'premier trouvé',
  //   selected: true,
  // },
  // {
  //   name: 'date_desc',
  //   label: 'dernier trouvé',
  //   selected: false,
  // },
] as VskSwitchInterface[]);

// const switchValueNameSelected = ref('date_asc' as string)


watch(items_acquired.value, () => {
  newElement.value = newElement.value + 1
}, { deep: false })

// watch(switchValues.value, () => {
//   for (let index = 0; index < switchValues.value.length; index++) {
//     if (switchValues.value[index].selected) {
//       switchValueNameSelected.value = switchValues.value[index].name as string
//     }
//   }
// }, { deep: true })


const itemsSorted = computed(() => {
  const tripleItems = [] as VskThumbnailTripleInterface[]

  for (let i = 0; i < locations_found.value.length; i++) {
    const locationFound = locations_found.value[i]

    if (locationFound.itemsToAcquired.length > 0) {

      const newTripleItem = {
        id: locationFound.id,
        background_url: locationFound.image_url,
        images_url: [],
        date: locationFound.found_date,
        completed: false,
      } as VskThumbnailTripleInterface

      for (let index = 0; index < locationFound.itemsToAcquired.length; index++) {
        if (!locationFound.itemsAcquired.includes(locationFound.itemsToAcquired[index])) {
          newTripleItem.background_url = locationFound.image_url_unfound
        }
      }

      for (let j = 0; j < locationFound.itemsToAcquired.length; j++) {
        const itemId = locationFound.itemsToAcquired[j]

        if (locationFound.itemsAcquired.includes(itemId)) {
          const itemAcquired = items_acquired.value.find(i => i.id === itemId)
          newTripleItem.images_url.push(itemAcquired?.image_url as string)
        } else {
          const itemToAcquired = items.value.find(i => i.id === itemId)
          newTripleItem.images_url.push(itemToAcquired?.image_url_unfound as string)
        }
      }

      if (locationFound?.itemsToAcquired.length > 0 && locationFound?.itemsToAcquired.length === locationFound?.itemsAcquired.length) {
        newTripleItem.completed = true
      }

      tripleItems.push(newTripleItem as VskThumbnailTripleInterface)
    }
  }
  return tripleItems as VskThumbnailTripleInterface[]
})

const itemsSortedByDate = computed(() => {
  const result = Array.from(itemsSorted.value) as VskThumbnailTripleInterface[]

  // if (switchValueNameSelected.value === 'défaut') {
  //   return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)))
  // }
  // else if (switchValueNameSelected.value === 'alpha') {
  //   return result.sort((a, b) => (a.title < b.title ? -1 : 1))
  // }
  // if (switchValueNameSelected.value === 'date_asc') {
  //   return result.sort((a, b) => (a.date < b.date ? -1 : 1))
  // }
  // else if (switchValueNameSelected.value === 'date_desc') {
  //   return result.sort((a, b) => (a.date < b.date ? 1 : -1))
  // }
  return result
})



function onClose() {
  if (isAllItemsAcquired.value && !isTheHiddenPlaceFound.value) {
    webExperienceAlertAllItemAcquiredIsActive.value = true;
  }
}

function open() {
  if (items_acquired.value!.length > 0) {
    isActive.value = !isActive.value
    newElement.value = 0
  }
}

</script>

<style lang="scss" scoped></style>
