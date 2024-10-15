<template>
  <div>
    <v-dialog class="vsk-card-v-dialog" :modelValue="isActive"
      @update:modelValue="$event => $emit('update:isActive', $event)" :class="hasList ? 'mode-list' : ''">
      <template v-slot:default>

        <v-card class="vsk-card-v-card" :class="hasList ? 'mode-list' : ''">
          <div class="vsk-card-content" :class="hasList ? 'mode-list' : ''">

            <!-- CONTENT-MODE -->
            <v-row v-if="!title" no-gutters class="my-12">
              <slot name="content"></slot>
            </v-row>

            <!-- LIST-MODE : TITRE -->
            <v-row v-else no-gutters class="vsk-card-title mt-12">
              <v-col cols="12">
                <h3>{{ title }}</h3>
              </v-col>
            </v-row>

            <!-- LIST-MODE : FILTRES -->
            <VskSwitchGroup v-if="hasSwitch" class="v-row v-row--no-gutters mt-6 mb-3 px-8" :fields="switchValues"
              @select="changeSwitchValue" />

            <!-- LIST-MODE : LIST -->
            <v-row v-if="hasList" no-gutters class="vsk-card-list px-3 pb-3">
              <slot name="list"></slot>
            </v-row>
          </div>

          <v-icon class="vsk-card-close" icon="$close" @click="$emit('update:isActive', false)"></v-icon>
        </v-card>

        <v-icon v-if="hasCloseFooter" class="vsk-card-close-footer" icon="$vuetify"
          @click="$emit('update:isActive', false)"></v-icon>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import VskSwitchGroup from '@/layouts/VskSwitchGroup.vue'
const emit = defineEmits(['change-switch-value', 'update:isActive'])

const props = defineProps({
  isActive: Boolean,
  title: String,
  hasSwitch: Boolean,
  hasList: Boolean,
  hasCloseFooter: Boolean,
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

<style lang="scss" scoped>
.vsk-card-v-dialog {
  width: 100%;
  max-width: 780px;

  &.mode-list {
    max-width: 540px;
  }

  .vsk-card-v-card {
    border-radius: 0.8vh;
    background-color: rgba(29, 27, 25, 0.8);

    overflow: visible;

    &.mode-list {
      overflow: hidden;
      position: absolute;
      top: -50vh + 15vh;
    }

    .vsk-card-content {
      padding: 0 1vh;

      &.mode-list {
        padding: 0;
      }

      margin: 1vh;
      border-radius: 0.8vh;
      border: solid 1px grey;
      background-color: rgba(29, 27, 25, 0.8);

      .vsk-card-title {
        text-align: center;
        color: white;
        font-size: 3.2vh;
      }

      .vsk-card-list {
        overflow-y: scroll;
        max-height: 45vh;
        border-top: solid 1px grey;

        div {
          width: 100%;
        }
      }
    }

    .vsk-card-close {
      position: absolute;
      right: 1.35vh;
      top: 1.35vh;
      cursor: pointer;

      color: white;
      font-size: 4.2vh;
      border-radius: 0.8vh;
      transition: background-color 250ms ease-in;

      &:hover {
        background-color: grey;
      }
    }
  }

  .vsk-card-close-footer {
    position: absolute;
    left: 50%;
    bottom: -1.8vh;
    cursor: pointer;
    animation: bounce 2s ease infinite;

    color: white;
    font-size: 5.8vh;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    border-radius: 0.8vh;
    transition: background-color 250ms ease-in;

    &:hover {
      background-color: grey;
    }
  }
}
</style>
