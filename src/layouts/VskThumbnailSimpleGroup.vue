<template>
  <div class="vsk-thumbnail-group">

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
        <VskThumbnailSimple v-for="element in elements" :key="`card-${element.id}`" class="transition-group-element"
          :title="element.title" :imageUrl="`${element.image_url}`" :link="element.link"
          :description="element.description" @router-push="$emit('router-push')" />
      </TransitionGroup>
      <VskThumbnailSimple v-if="elements && elements!.length < elementsMaxLength" title="À découvrir..."
        :imageUrl="`/images/location/secret_place.PNG`" :key="elementsMaxLength" />
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { PropType } from 'vue'

import VskSwitchGroup from '@/layouts/VskSwitchGroup.vue'
import VskThumbnailSimple from '@/layouts/VskThumbnailSimple.vue'
import type { VskThumbnailSimpleInterface } from './VskThumbnailSimpleInterface';

const emit = defineEmits(['change-switch-value', 'router-push'])

const props = defineProps({
  title: String,
  elements: Array as PropType<VskThumbnailSimpleInterface[]>,
  elementsMaxLength: { type: Number, default: 0 },
})

const switchValues = ref([
  // {
  //   label: 'défaut',
  //   selected: true,
  // },
  // {
  //   label: 'alpha',
  //   selected: false,
  // },
  // {
  //   label: 'date',
  //   selected: false,
  // },
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
]);

function changeSwitchValue(input: string) {
  for (let index = 0; index < switchValues.value.length; index++) {
    if (switchValues.value[index].name === input) {
      switchValues.value[index].selected = true
      emit('change-switch-value', input)
    } else {
      switchValues.value[index].selected = false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_global_variable.scss';

.vsk-thumbnail-group-title {
  color: $colorWhite;
  font-size: 3.2vh;
  padding: 0 $radiusValue*2;
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
