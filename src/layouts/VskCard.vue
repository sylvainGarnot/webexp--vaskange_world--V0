<template>
  <div>
    <v-dialog class="vsk-card-v-dialog" :modelValue="isActive"
      @update:modelValue="$event => $emit('update:isActive', $event)">
      <template v-slot:default>

        <v-card class="vsk-card-v-card">
          <div class="vsk-card-content">


            <!-- TITRE -->
            <v-row no-gutters class="vsk-card-title mt-12">
              <v-col cols="12">
                <h3>{{ title }}</h3>
              </v-col>
            </v-row>


            <!-- FILTRES -->
            <VskSwitchGroup v-if="isFiltering" class="v-row v-row--no-gutters mt-6 mb-3 px-8" :fields="sortTypes"
              @select="changeSwitchValue" />


            <!-- CONTENT -->
            <v-row no-gutters class="vsk-card-locations px-3 pb-3">
              <slot name="content"></slot>
            </v-row>
          </div>
          <v-icon class="vsk-card-close" icon="$close" @click="$emit('update:isActive', false)"></v-icon>
        </v-card>

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
  isFiltering: Boolean,
})

const sortTypes = ref([
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
  for (let index = 0; index < sortTypes.value.length; index++) {
    if (sortTypes.value[index].label === value) {
      sortTypes.value[index].selected = true
      emit('change-switch-value', sortTypes.value[index].label)
    } else {
      sortTypes.value[index].selected = false
    }
  }
}
</script>

<style lang="scss" scoped>
.vsk-card-v-dialog {
  width: 100%;
  max-width: 540px;

  .vsk-card-v-card {
    border-radius: 0.8vh;
    background-color: rgba(29, 27, 25, 0.8);

    position: absolute;
    top: -50vh + 15vh;

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

    .vsk-card-content {
      margin: 1vh;
      border-radius: 0.8vh;
      border: solid 1px grey;
      background-color: rgba(29, 27, 25, 0.8);

      .vsk-card-title {
        text-align: center;
        color: white;
        font-size: 3.2vh;
      }

      .vsk-card-locations {
        overflow-y: scroll;
        max-height: 45vh;
        border-top: solid 1px grey;

        div {
          width: 100%;
        }
      }
    }
  }
}

.list-animation-move,
.list-animation-enter-active,
.list-animation-leave-active {
  transition: all 0.5s ease;
}
</style>
