<template>
  <div>
    <VskBtn :width=46 image="map" @click="menu = !menu" />

    <v-dialog v-model="menu" max-width="500">
      <v-card min-width="300">
        <v-row no-gutters>
          <v-col cols="12" class="mt-3" v-for="location in locations_found">
            <VskThumbnail :title="location.name" :location="location.name"
              :imageUrl="`src/assets/images/${location.image_url}.png`" @router-push="menu = false" />
          </v-col>
        </v-row>
      </v-card>
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
const { locations_found } = storeToRefs(locationStore)

const menu = ref(false);
</script>

<style lang="scss" scoped></style>
