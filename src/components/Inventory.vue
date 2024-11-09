<template>
  <div>
    <VskBtn image="joystick" :disable="items_acquired!.length === 0" @click="open()" :active="isActive"
      :badge="newElement" />


    <VskCard v-model:isActive="isActive" @close="onClose()" hasList>
      <template v-slot:content>
        <VskThumbnailCardGroup thumbnail-card title="Objets Trouvés" :elements="items_acquiredSorted"
          :elements-max-length="items.length" @change-switch-value="(value: string) => { sortType = value as string }">
        </VskThumbnailCardGroup>
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
import VskThumbnailCardGroup from '@/layouts/VskThumbnailCardGroup.vue'
import type { VskThumbnailCardElementInterface } from '@/layouts/VskThumbnailCardInterface';


import { useItemStore } from "@/stores/item"
import { useLocationStore } from "@/stores/location";
import type { itemAcquiredInterface } from '@/stores/item/interface';

const itemStore = useItemStore()
const { items_acquired, items, isAllItemsAcquired } = storeToRefs(itemStore)

const locationStore = useLocationStore();
const { isTheHiddenPlaceFound } = storeToRefs(locationStore);

const isActive = ref(false);
const sortType = ref('défaut');
const webExperienceAlertAllItemAcquiredIsActive = ref(false)

let newElement = ref(0);

const tabs = [
  {
    label: 'label 1',
    value: 'value-1',
  },
  {
    label: 'label 2',
    value: 'value-2',
  }
]


watch(items_acquired.value, () => {
  newElement.value = newElement.value + 1
}, { deep: false })

const items_acquiredSorted = computed(() => {
  const result = [] as VskThumbnailCardElementInterface[]
  for (const element of items_acquired.value as itemAcquiredInterface[]) {
    result.push({
      id: element.id,
      title: element.name,
      description: element.description,
      image_url: element.image_url,
      date: element.acquired_date,
    })
  }
  if (sortType.value === 'défaut') {
    return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)))
  }
  else if (sortType.value === 'alpha') {
    return result.sort((a, b) => (a.title < b.title ? -1 : 1))
  }
  else if (sortType.value === 'date') {
    return result.sort((a, b) => (a.date < b.date ? -1 : 1))
  }
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
