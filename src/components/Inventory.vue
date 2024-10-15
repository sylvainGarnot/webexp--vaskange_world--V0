<template>
  <div>
    <VskMenuBtn image="joystick" :disable="items_acquired!.length === 0"
      @click="items_acquired!.length > 0 ? isActive = !isActive : ''" />

    <VskCard title="Objets Trouvés" v-model:isActive="isActive" hasSwitch hasList
      @change-switch-value="(value) => sortType = value">

      <template v-slot:list>
        <TransitionGroup name="vsk-inventory-list-animation" class="transition-group-element" tag="div">
          <VskThumbnailCard v-for="itemAcquired in items_acquiredSorted" :key="itemAcquired.id"
            class="transition-group-element" :title="itemAcquired.name" :description="itemAcquired.description"
            :imageUrl="`${itemAcquired.image_url}`" @router-push="isActive = false" />
          <VskThumbnail v-if="items_acquired.length < items.length" title="À découvrir..."
            class="transition-group-element" :imageUrl="`/images/location/secret_place.PNG`"
            :key="items_acquired.length" />
        </TransitionGroup>
      </template>
    </VskCard>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia'
import VskThumbnail from '@/layouts/VskThumbnail.vue'
import VskThumbnailCard from '@/layouts/VskThumbnailCard.vue'
import VskMenuBtn from '@/layouts/VskMenuBtn.vue'

import VskCard from '@/layouts/VskCard.vue'


import { useItemStore } from "@/stores/item"
import type { itemAcquiredInterface } from '@/stores/item/interface';

const itemStore = useItemStore()
const { items_acquired, items } = storeToRefs(itemStore)

const isActive = ref(false);
const sortType = ref('défaut');


const items_acquiredSorted = computed(() => {
  const result = [...items_acquired.value] as itemAcquiredInterface[];
  if (sortType.value === 'défaut') {
    return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)));
  }
  else if (sortType.value === 'alpha') {
    return result.sort((a, b) => (a.name < b.name ? -1 : 1));
  }
  else if (sortType.value === 'date') {
    return result.sort((a, b) => (a.acquired_date < b.acquired_date ? -1 : 1));
  }
})

</script>

<style lang="scss" scoped>
.vsk-inventory-list-animation-move,
.vsk-inventory-list-animation-enter-active,
.vsk-inventory-list-animation-leave-active {
  transition: all 0.5s ease;
}
</style>
