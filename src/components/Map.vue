<template>
  <div>
    <VskBtn image="map" @click="isActive = !isActive" />

    <v-dialog class="vsk-map-v-dialog" v-model="isActive">
      <template v-slot:default>

        <v-card class="vsk-map-v-card">

          <v-tabs v-model="tab" align-tabs="center" class="vsk-map-v-tabs-menu">
            <v-tab value="tabs-option-1">Lieux</v-tab>
            <v-tab value="tabs-option-2">Personnages</v-tab>
          </v-tabs>

          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="tabs-option-1">
              <div class="vsk-map-content">
                <!-- LIEUX - TITRE -->
                <v-row no-gutters class="vsk-map-title mt-12">
                  <v-col cols="12">
                    <h3>Lieux découverts</h3>
                  </v-col>
                </v-row>

                <!-- LIEUX - FILTRES -->
                <VskSwitchGroup class="v-row v-row--no-gutters mt-6 mb-3 px-8" :fields="sortTypes"
                  @select="changeSwitchValue" />

                <!-- LIEUX - CONTENT -->
                <v-row no-gutters class="vsk-map-locations px-3 pb-3">
                  <TransitionGroup name="list-animation" class="transition-group-element" tag="div">
                    <VskThumbnail v-for="locationFound in locations_foundSorted" :key="locationFound.id"
                      class="transition-group-element" :title="locationFound.name" :link="locationFound.name"
                      :subtitle="locationFound?.nbrItemsToAcquired > 0 ? `secrets trouvé ${locationFound?.nbrItemsAcquired} / ${locationFound?.nbrItemsToAcquired}` : ''"
                      :imageUrl="`${locationFound.image_url}`" @router-push="isActive = false" />
                    <VskThumbnail v-if="locationsFoundProgression.length < locations.length" title="À découvrir..."
                      class="transition-group-element" :imageUrl="`/images/location/secret_place.PNG`"
                      :key="locationsFoundProgression.length" />
                  </TransitionGroup>
                </v-row>
              </div>
            </v-tabs-window-item>

            <v-tabs-window-item value="tabs-option-2">
              <div class="vsk-map-content">
                <!-- CHARACTER - TITRE -->
                <v-row no-gutters class="vsk-map-title mt-12">
                  <v-col cols="12">
                    <h3>Rencontres</h3>
                  </v-col>
                </v-row>

                <!-- CHARACTER - FILTRES -->
                <VskSwitchGroup class="v-row v-row--no-gutters mt-6 mb-3 px-8" :fields="sortTypes"
                  @select="changeSwitchValue" />

                <!-- CHARACTER - CONTENT -->
                <v-row no-gutters class="vsk-map-locations px-3 pb-3">
                  <TransitionGroup name="list-animation" class="transition-group-element" tag="div">
                    <VskThumbnail v-for="characterFound in characters_foundSorted" :key="characterFound.id"
                      class="transition-group-element" :title="characterFound.name" :link="characterFound.name"
                      :imageUrl="`${characterFound.image_url}`" @router-push="isActive = false" />
                    <VskThumbnail v-if="characters_found.length < characters.length" title="..."
                      class="transition-group-element" :key="characters_found.length"
                      :imageUrl="`/images/location/secret_place.PNG`" />
                  </TransitionGroup>
                </v-row>
              </div>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card>

        <v-icon class="vsk-map-close" icon="$close" @click="isActive = false"></v-icon>

      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia'
import VskThumbnail from '@/layouts/VskThumbnail.vue'
import VskBtn from '@/layouts/VskBtn.vue'
import VskSwitchGroup from '@/layouts/VskSwitchGroup.vue'

import { useLocationStore } from "@/stores/location"
import type { locationFoundProgressionInterface } from '@/stores/location/interface';

import { useCharacterStore } from "@/stores/character"
import type { characterFoundInterface } from '@/stores/character/interface';

const locationStore = useLocationStore()
const { locationsFoundProgression, locations } = storeToRefs(locationStore)

const characterStore = useCharacterStore()
const { characters_found, characters } = storeToRefs(characterStore)

const isActive = ref(false);
const tab = ref('tabs-option-1');

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
  for (const sortType of sortTypes.value) {
    if (sortType.label === value) {
      sortType.selected = true
    } else {
      sortType.selected = false
    }
  }
}

const sortType = computed(() => {
  for (const sortType of sortTypes.value) {
    if (sortType.selected) {
      return sortType.label
    }
  }
})

const locations_foundSorted = computed(() => {
  const result = [...locationsFoundProgression.value] as locationFoundProgressionInterface[];
  if (sortType.value === 'défaut') {
    return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)));
  }
  else if (sortType.value === 'alpha') {
    return result.sort((a, b) => (a.name < b.name ? -1 : 1));
  }
  else if (sortType.value === 'date') {
    return result.sort((a, b) => (a.found_date < b.found_date ? -1 : 1));
  }
})

const characters_foundSorted = computed(() => {
  const result = [...characters_found.value] as characterFoundInterface[];
  if (sortType.value === 'défaut') {
    return result.sort((a, b) => (parseInt(a.id) - parseInt(b.id)));
  }
  else if (sortType.value === 'alpha') {
    return result.sort((a, b) => (a.name < b.name ? -1 : 1));
  }
  else if (sortType.value === 'date') {
    return result.sort((a, b) => (a.found_date < b.found_date ? -1 : 1));
  }
})


</script>

<style lang="scss" scoped>
.vsk-map-v-tabs-menu {

  button,
  span {
    color: grey;
    font-family: 'Gill Sans';
    font-size: 1.5vh;
    font-weight: 500;

    &.v-tab--selected {
      color: white;
    }
  }
}

.vsk-map-close {
  position: absolute;
  right: 0.4vh;
  top: -50vh + 15vh;
  cursor: pointer;

  color: white;
  font-size: 4.2vh;
  border-radius: 0.8vh;
  transition: background-color 250ms ease-in;

  &:hover {
    background-color: grey;
  }
}

.vsk-map-v-dialog {
  width: 100%;
  max-width: 540px;

  .vsk-map-v-card {
    border-radius: 0.8vh;
    background-color: rgba(29, 27, 25, 0.8);

    position: absolute;
    top: -50vh + 15vh;

    .vsk-map-content {
      margin: 1vh;
      border-radius: 0.8vh;
      border: solid 1px grey;
      background-color: rgba(29, 27, 25, 0.8);

      .vsk-map-title {
        text-align: center;
        color: white;
        font-size: 3.2vh;
      }

      .vsk-map-locations {
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
