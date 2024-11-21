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

    <!-- LIST -->
    <v-row no-gutters class="vsk-thumbnail-group-content px-3 pb-3 mt-3">
      <TransitionGroup name="vsk-thumbnail-group-content--animation" class="transition-group-element" tag="div">
        <VskThumbnailSimple v-for="element in elements" :key="`card-${element.id}`" class="transition-group-element"
          :title="element.title" :backgroundUrl="`${element.background_url}`" :link="element.link"
          :description="element.description" @router-push="$emit('router-push')" :imagesUrl="element.images_url"
          :completed="element.completed" />
      </TransitionGroup>
      <!-- <VskThumbnailSimple v-if="elements && elements.length < elementsMaxLength" title="À découvrir..."
        :backgroundUrl="`/images/location/secret_place.png`" :key="elementsMaxLength" /> -->
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

import VskSwitchGroup from '@/layouts/VskSwitchGroup.vue'
import type { VskSwitchInterface } from './VskSwitchInterface';

import VskThumbnailSimple from '@/layouts/VskThumbnailSimple.vue'
import type { VskThumbnailSimpleInterface } from './VskThumbnailSimpleInterface';

const emit = defineEmits(['switchValues:update', 'router-push'])

const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  elements: Array as PropType<VskThumbnailSimpleInterface[]>,
  elementsMaxLength: { type: Number, default: 0 },
  switchValues: Array as PropType<VskSwitchInterface[]>,
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
