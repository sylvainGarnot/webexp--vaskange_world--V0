<template>
  <div class="vsk-thumbnail-group">

    <!-- TITRE-->
    <v-row v-if="title" no-gutters class="vsk-thumbnail-group-title mt-12">
      <v-col cols="12" align="center">
        <h3>{{ title }}</h3>
      </v-col>
    </v-row>

    <!-- DESCRIPTION -->
    <v-row v-if="description" no-gutters class="vsk-thumbnail-group-description mt-3">
      <v-col cols="12" align="center">
        <p>{{ description }}</p>
      </v-col>
    </v-row>

    <!-- SUBTITLE -->
    <v-row v-if="subtitle" no-gutters class="vsk-thumbnail-group-subtitle mt-3">
      <v-col cols="12" align="center">
        <h3>{{ subtitle }}</h3>
      </v-col>
    </v-row>

    <!-- FILTRES -->
    <VskSwitchGroup v-if="switchValues && switchValues.length > 0" class="v-row v-row--no-gutters mt-6 px-8"
      :fields="switchValues" @update:fields="(value: string) => emit('switchValues:update', value as string)" />

    <!-- LIST SIMPLE -->
    <v-row no-gutters class="vsk-thumbnail-group-content px-3 pb-3 mt-3">
      <TransitionGroup name="vsk-thumbnail-group-content--animation" class="transition-group-element" tag="div">
        <VskThumbnailElement v-for="element in elements" :key="`card-${element.id}`" class="transition-group-element"
          :title="element.title" :background="`${element.background}`" :link="element.link"
          :description="element.description" @router-push="$emit('router-push')" :illustrations="element.illustrations"
          :completed="element.completed" />
      </TransitionGroup>
    </v-row>

    <!-- LIST CARD -->
    <!-- <v-row no-gutters class="vsk-thumbnail-group-content px-3 pb-3">
      <TransitionGroup name="vsk-thumbnail-group-content--animation" class="transition-group-element" tag="div">
        <VskThumbnailElementCard v-for="element in elements" :key="element.id" class="transition-group-element"
          :title="element.title" :description="element.description" :illustration="`${element.background}`" />
      </TransitionGroup>
    </v-row> -->
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

import VskSwitchGroup from '@/layouts/VskSwitchGroup.vue'
import type { VskSwitchElementInterface } from './VskSwitchElementInterface';

import VskThumbnailElement from '@/layouts/VskThumbnailElement.vue'
// import VskThumbnailElementCard from '@/layouts/VskThumbnailElementCard.vue'
import type { VskThumbnailElementInterface } from './VskThumbnailElementInterface';

const emit = defineEmits(['switchValues:update', 'router-push'])

const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  switchValues: Array as PropType<VskSwitchElementInterface[]>,
  elements: Array as PropType<VskThumbnailElementInterface[]>,
  elementsMaxLength: { type: Number, default: 0 },
})
</script>

<style lang="scss">
@import '@/assets/styles/_global_variable.scss';

.vsk-thumbnail-group-title {
  color: $colorWhite;
  font-size: 3.2vh;
  padding: 0 $radiusValue*2;
}

.vsk-thumbnail-group-description {
  padding: 0 $radiusValue*3;
  font-size: 1.6vh;
  color: $colorGrey;
}

.vsk-thumbnail-group-subtitle {
  padding: 0 $radiusValue*3;
  font-size: 1.5vh;
  color: $colorWhite;
}

.vsk-thumbnail-group-content {
  overflow-y: scroll;
  max-height: 45vh;
  border-top: solid 1px $colorGrey;

  div {
    width: 100%;
  }
}

.vsk-thumbnail-group-content--animation-move,
.vsk-thumbnail-group-content--animation-enter-active,
.vsk-thumbnail-group-content--animation-leave-active {
  transition: all 0.5s ease;
}
</style>
