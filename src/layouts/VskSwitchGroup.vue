<template>
  <div>
    <v-col v-for="field in fields" :key="field.label" :cols="12 / fields!.length">
      <VskSwitch :label="field.label" :selected="field.selected"
        @select="(value: string) => $emit('select', value as string)" />
    </v-col>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import VskSwitch from '@/layouts/VskSwitch.vue'

const props = defineProps({
  fields: Array as PropType<fieldInterface[]>,
})

interface fieldInterface {
  label: string,
  selected: boolean,
}
</script>

<style lang="scss" scoped>
.v-col {
  text-align: center;
}
</style>
