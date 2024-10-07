<template>
  <div>
    <VskBtn image="map" @click="isActive = !isActive" />

    <v-dialog class="vsk-map-v-dialog" v-model="isActive">
      <template v-slot:default>
        <v-card class="vsk-map-v-card">
          <div class="vsk-map-content">
            <v-row no-gutters class="vsk-map-title mt-8 mb-8">
              <v-col cols="12">
                <h3>Lieux découverts</h3>
              </v-col>
            </v-row>
            <v-row no-gutters class="vsk-map-locations pb-2 px-2">
              <v-col cols="12" class="mt-2" v-for="locationFound in locations_found">
                <VskThumbnail :title="locationFound.name" :location="locationFound.name"
                  :imageUrl="`src/assets/images/${locationFound.image_url}.png`" @router-push="isActive = false" />
              </v-col>
              <v-col cols="12" class="mt-2" v-if="locations_found.length < locations.length">
                <VskThumbnail title="À découvrir..." :imageUrl="`src/assets/images/secret_place.png`" />
              </v-col>
            </v-row>
          </div>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import VskThumbnail from '@/layouts/VskThumbnail.vue'
import VskBtn from '@/layouts/VskBtn.vue'

import { useLocationStore } from "@/stores/location"

const locationStore = useLocationStore()
const { locations_found, locations } = storeToRefs(locationStore)

const isActive = ref(false);
</script>

<style lang="scss" scoped>
.vsk-map-v-dialog {
  width: 100%;
  max-width: 540px;

  .vsk-map-v-card {
    border-radius: 0.8vh;
    background-color: rgba(29, 27, 25, 0.8);

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
      }
    }
  }
}
</style>
