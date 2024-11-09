<template>
  <div>

    <!-- TITRE-->
    <v-row v-if="title" no-gutters class="vsk-thumbnail-group-title mt-12">
      <v-col cols="12" align="center">
        <h3>{{ title }}</h3>
      </v-col>
    </v-row>

    <!-- FILTRES -->
    <VskSwitchGroup class="v-row v-row--no-gutters mt-6 mb-3 px-8" :fields="switchValues"
      @select="(value: string) => changeSwitchValue(value as string)" />

    <!-- LIST -->
    <v-row no-gutters class="vsk-thumbnail-group-content px-3 pb-3">
      <TransitionGroup name="vsk-thumbnail-group-content--animation" class="transition-group-element" tag="div">
        <VskThumbnailTriple v-for="element in elements" :key="`${element.id}`" class="transition-group-element"
          :backgroundUrl="element.background_url" :imagesUrl="element.images_url" />
      </TransitionGroup>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { PropType } from 'vue'

import VskSwitchGroup from '@/layouts/VskSwitchGroup.vue'
import VskThumbnailTriple from '@/layouts/VskThumbnailTriple.vue'
import type { VskThumbnailTripleInterface } from './VskThumbnailTripleInterface';

const emit = defineEmits(['change-switch-value', 'router-push'])

const props = defineProps({
  title: String,
  elements: Array as PropType<VskThumbnailTripleInterface[]>,
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
