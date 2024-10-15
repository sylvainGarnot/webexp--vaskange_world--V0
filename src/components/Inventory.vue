<template>
  <div>
    <VskMenuBtn image="joystick" :disable="items_acquired!.length === 0"
      @click="items_acquired!.length > 0 ? isActive = !isActive : ''" />

    <VskCard title="Objets Trouvés" v-model:isActive="isActive" hasList>
      <template v-slot:content>
        <VskThumbnailGroup card :elements="items_acquiredSorted" :elements-max-length="items.length"
          @change-switch-value="(value) => sortType = value">
        </VskThumbnailGroup>
      </template>
    </VskCard>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia'
import VskMenuBtn from '@/layouts/VskMenuBtn.vue'

import VskCard from '@/layouts/VskCard.vue'
import VskThumbnailGroup from '@/layouts/VskThumbnailGroup.vue'


import { useItemStore } from "@/stores/item"
import type { itemAcquiredInterface } from '@/stores/item/interface';

const itemStore = useItemStore()
const { items_acquired, items } = storeToRefs(itemStore)

const isActive = ref(false);
const sortType = ref('défaut');


const items_acquiredSorted = computed(() => {
  const result = [...items_acquired.value] as itemAcquiredInterface[];
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
