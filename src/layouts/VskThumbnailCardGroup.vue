<template>
  <div>

    <!-- TITRE-->
    <v-row v-if="title" no-gutters class="vsk-thumbnail-group-title mt-12">
      <v-col cols="12">
        <h3>{{ title }}</h3>
      </v-col>
    </v-row>

    <!-- FILTRES -->
    <VskSwitchGroup class="v-row v-row--no-gutters mt-6 mb-3 px-8" :fields="switchValues"
      @select="(value: string) => changeSwitchValue(value as string)" />

    <!-- LIST -->
    <v-row no-gutters class="vsk-thumbnail-group-content px-3 pb-3">
      <TransitionGroup name="vsk-thumbnail-group-content--animation" class="transition-group-element" tag="div">
        <VskThumbnailCard v-for="element in elements" :key="element.id" class="transition-group-element"
          :title="element.title" :description="element.description" :imageUrl="`${element.image_url}`" />
        <VskThumbnail v-if="elements!.length < elementsMaxLength" title="À découvrir..."
          class="transition-group-element" :imageUrl="`/images/location/secret_place.PNG`" :key="elementsMaxLength" />
      </TransitionGroup>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { PropType } from 'vue'

import VskSwitchGroup from '@/layouts/VskSwitchGroup.vue'
import VskThumbnail from '@/layouts/VskThumbnail.vue'
import VskThumbnailCard from '@/layouts/VskThumbnailCard.vue'

const emit = defineEmits(['change-switch-value'])

export interface elementInterface {
  id: string,
  title: string,
  description: string,
  image_url: string,
}

const props = defineProps({
  title: String,
  elements: Array as PropType<elementInterface[]>,
  elementsMaxLength: { type: Number, default: 0 },
})

const switchValues = ref([
  {
    label: 'défaut',
    selected: true,
  },
  {
    label: 'alpha',
    selected: false,
  },
  {
    label: 'date',
    selected: false,
  },
]);

function changeSwitchValue(value: string) {
  for (let index = 0; index < switchValues.value.length; index++) {
    if (switchValues.value[index].label === value) {
      switchValues.value[index].selected = true
      emit('change-switch-value', switchValues.value[index].label)
    } else {
      switchValues.value[index].selected = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
