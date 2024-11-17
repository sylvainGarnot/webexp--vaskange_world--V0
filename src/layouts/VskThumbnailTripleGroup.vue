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
      @update:fields="(value: string) => emit('switchValues:update', value as string)" />

    <!-- LIST -->
    <v-row no-gutters class="vsk-thumbnail-group-content px-3 pb-3">
      <TransitionGroup name="vsk-thumbnail-group-content--animation" class="transition-group-element" tag="div">
        <VskThumbnailTriple v-for="element in elements" :key="`${element.id}`" class="transition-group-element"
          :backgroundUrl="element.background_url" :imagesUrl="element.images_url" :completed="element.completed" />
      </TransitionGroup>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

import VskSwitchGroup from '@/layouts/VskSwitchGroup.vue'
import VskThumbnailTriple from '@/layouts/VskThumbnailTriple.vue'
import type { VskThumbnailTripleInterface } from './VskThumbnailTripleInterface';
import type { VskSwitchInterface } from './VskSwitchInterface';

const emit = defineEmits(['switchValues:update', 'router-push'])

const props = defineProps({
  title: String,
  elements: Array as PropType<VskThumbnailTripleInterface[]>,
  switchValues: Array as PropType<VskSwitchInterface[]>,
})
</script>

<style lang="scss" scoped></style>
