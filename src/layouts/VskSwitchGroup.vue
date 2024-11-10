<template>
  <div>
    <v-col v-for="field in fields" :key="field.label" :cols="12 / fields!.length" align="center">
      <VskSwitch :label="field.label" :name="field.name" :selected="field.selected"
        @select="(value: string) => $emit('select', value as string)" />
    </v-col>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import VskSwitch from '@/layouts/VskSwitch.vue'
import type { VskSwitchInterface } from './VskSwitchInterface';

const props = defineProps({
  fields: Array as PropType<VskSwitchInterface[]>,
})
</script>

<style lang="scss" scoped></style>
