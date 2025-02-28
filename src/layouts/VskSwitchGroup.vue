<template>
  <div>
    <v-col v-for="field in fields" :key="field.label" :cols="12 / fields!.length" align="center">
      <VskSwitch :label="field.label" :name="field.name" :selected="field.selected" @select="handleSelect" />
    </v-col>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import VskSwitch from '@/layouts/VskSwitchElement.vue'
import type { VskSwitchInterface } from './VskSwitchInterface';

const emit = defineEmits(['update:fields'])

const props = defineProps({
  fields: Array as PropType<VskSwitchInterface[]>,
})

function handleSelect(input: string) {
  const newFields = Array.from(props.fields as VskSwitchInterface[])
  for (let index = 0; index < newFields.length; index++) {
    if (newFields[index].name === input) {
      newFields[index].selected = true
    } else {
      newFields[index].selected = false
    }
  }
  emit('update:fields', input)
}
</script>

<style lang="scss" scoped></style>
