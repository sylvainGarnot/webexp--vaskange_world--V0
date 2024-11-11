<template>
  <div>
    <VskBtn image="/icon/inventaire.png" :disable="items_acquired!.length === 0" @click="open()" :active="isActive"
      :badge="newElement" />


    <VskCard v-model:isActive="isActive" @close="onClose()" hasList>
      <template v-slot:content>
        <VskThumbnailTripleGroup thumbnail-card title="Objets Trouvés" :elements="itemsSortedByDate"
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
  {
    name: 'date_asc',
    label: 'Premier',
    selected: true,
  },
  {
    name: 'date_desc',
    label: 'Dernier',
    selected: false,
  },
] as VskSwitchInterface[]);

const switchValueNameSelected = ref('date_asc' as string)


watch(items_acquired.value, () => {
  newElement.value = newElement.value + 1
}, { deep: false })

watch(switchValues.value, () => {
  for (let index = 0; index < switchValues.value.length; index++) {
    if (switchValues.value[index].selected) {
      switchValueNameSelected.value = switchValues.value[index].name as string
    }
  }
}, { deep: true })


const itemsSorted = computed(() => {
  const tripleItems = [] as VskThumbnailTripleInterface[]

  for (let i = 0; i < locations_found.value.length; i++) {
    const location = locations_found.value[i]

    if (location.itemsToAcquired.length > 0) {

      const newTripleItem = {
        id: location.id,
        background_url: location.image_url,
        images_url: [],
        date: location.found_date,
      } as VskThumbnailTripleInterface

      for (let index = 0; index < location.itemsToAcquired.length; index++) {
        if (!location.itemsAcquired.includes(location.itemsToAcquired[index])) {
          newTripleItem.background_url = location.image_url_unfound
        }
      }

      for (let j = 0; j < location.itemsToAcquired.length; j++) {
        const itemId = location.itemsToAcquired[j]
        if (location.itemsAcquired.includes(itemId)) {
          const itemAcquired = items_acquired.value.find(i => i.id === itemId)
          newTripleItem.images_url.push(itemAcquired?.image_url as string)
        } else {
          const itemToAcquired = items.value.find(i => i.id === itemId)
          newTripleItem.images_url.push(itemToAcquired?.image_url_unfound as string)
        }
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
  if (switchValueNameSelected.value === 'date_asc') {
    return result.sort((a, b) => (a.date < b.date ? -1 : 1))
  }
  else if (switchValueNameSelected.value === 'date_desc') {
    return result.sort((a, b) => (a.date < b.date ? 1 : -1))
  }
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
