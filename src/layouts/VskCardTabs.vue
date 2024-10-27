<template>
  <div>
    <v-dialog class="vsk-card-v-dialog" :modelValue="isActive"
      @update:modelValue="$event => $emit('update:isActive', $event)" :class="hasList ? 'mode-list' : ''">
      <template v-slot:default>

        <v-card class="vsk-card-v-card" :class="hasList ? 'mode-list' : ''">

          <v-tabs v-model="currentTab" align-tabs="center" class="vsk-card-v-tabs-menu">
            <v-tab v-for="tab in tabs" :value="tab.value" :key="tab.value">{{ tab.label }}</v-tab>
          </v-tabs>

          <v-tabs-window v-model="currentTab">
            <v-tabs-window-item v-for="tab in tabs" :value="tab.value" :key="tab.value">
              <div class="vsk-card-content" :class="hasList ? 'mode-list' : ''">
                <slot :name="`${tab.value}`"></slot>
              </div>
            </v-tabs-window-item>
          </v-tabs-window>

          <v-icon class="vsk-card-close btn-click-animation" icon="$close"
            @click="$emit('update:isActive', false)"></v-icon>
        </v-card>

        <v-icon v-if="hasCloseFooter" class="vsk-card-close-footer btn-click-animation" icon="$vuetify"
          @click="$emit('update:isActive', false)"></v-icon>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { PropType } from 'vue';

const emit = defineEmits(['update:isActive'])

const props = defineProps({
  isActive: Boolean,
  hasList: Boolean,
  hasCloseFooter: Boolean,
  tabs: Array as PropType<tabInterface[]>,
})

const currentTab = ref('tabs-option-1');

interface tabInterface {
  label: string,
  value: string,
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.vsk-card-v-tabs-menu {

  button,
  span {
    color: $colorGrey;
    font-size: 1.5vh;
    font-weight: 500;

    &.v-tab--selected {
      color: $colorWhite;
    }
  }
}

.vsk-card-close {
  right: 0.2vh !important;
  top: 0.2vh !important;
}
</style>
