<template>
  <div>
    <VskMenuBtn image="joystick" :disable="items_acquired!.length === 0"
      @click="items_acquired!.length > 0 ? isActive = !isActive : ''" />


    <VskCard v-model:isActive="isActive" hasList>
      <template v-slot:content>
        <VskThumbnailCardGroup title="Objets Trouvés" :elements="items_acquiredSorted"
          :elements-max-length="items.length" @change-switch-value="(value: string) => { sortType = value as string }">
        </VskThumbnailCardGroup>
      </template>
    </VskCard>


  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia'
import VskMenuBtn from '@/layouts/VskMenuBtn.vue'

import VskCard from '@/layouts/VskCard.vue'
import VskThumbnailCardGroup from '@/layouts/VskThumbnailCardGroup.vue'


import { useItemStore } from "@/stores/item"
import type { itemAcquiredInterface } from '@/stores/item/interface';

const itemStore = useItemStore()
const { items_acquired, items } = storeToRefs(itemStore)

const isActive = ref(false);
const sortType = ref('défaut');

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


const items_acquiredSorted = computed(() => {
  const result = []
  for (const element of items_acquired.value as itemAcquiredInterface[]) {
    result.push({
      ...element,
      title: element.name,
    })
  }
  if (sortType.value === 'défaut') {
    return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)))
  }
  else if (sortType.value === 'alpha') {
    return result.sort((a, b) => (a.name < b.name ? -1 : 1))
  }
  else if (sortType.value === 'date') {
    return result.sort((a, b) => (a.acquired_date < b.acquired_date ? -1 : 1))
  }
})

</script>

<style lang="scss" scoped></style>
