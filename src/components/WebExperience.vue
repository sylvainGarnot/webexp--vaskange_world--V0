<template>
  <div :class="route.name === 'home' ? 'container' : ''">
    <div id="webxp" class="ep-webxp" data-webxp-author="webxp" data-webxp-id="j8vvd53"
      :class="route.name === 'home' ? 'active' : ''"></div>

    <VskBookmarkToast v-for="bookmarkToast in bookmarkToasts" :height="bookmarkToast.height"
      :width="bookmarkToast.width" :top="bookmarkToast.top" :left="bookmarkToast.left" />

    <VskDialog />

  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated } from "vue";
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'

import VskBookmarkToast from "@/layouts/VskBookmarkToast.vue";
import VskDialog from "@/layouts/VskDialog.vue";

import { useApi } from "./WebExperienceApi.js";

import { useToastStore } from "@/stores/toast/index.ts";
import { useBookmarkToastStore } from "@/stores/character/index.js";
import { useLocationStore } from "@/stores/location";
import type { locationsGlossaryInterface } from '@/stores/location/interface';


const route = useRoute();

const { EndlessPaper } = useApi();

const toastStore = useToastStore();
const { addToast } = toastStore;

const bookmarkToastStore = useBookmarkToastStore();
const { bookmarkToasts } = storeToRefs(bookmarkToastStore);

const locationStore = useLocationStore();
const { locationsGlossary } = locationStore;
const { updateNearbyLocations } = locationStore;



// UPDATED
onUpdated(() => {
  if (route?.query?.location) {
    teleportTo(route?.query?.location);
  }
});

// MOUNTED
onMounted(() => {
  EndlessPaper.onLoad(function (iframe) {
    console.log("WebXP at " + iframe.src + " has been loaded !"); // TEST

    EndlessPaper.showNavBar(false);
    EndlessPaper.showTravelButtons(false);
    EndlessPaper.onBookmarkNearby(updateNearbyLocations);

    setTimeout(() => {
      const locationGlossary = locationsGlossary[0] as locationsGlossaryInterface;
      const tostMessage = locationGlossary.placeToText.en ? locationGlossary.placeToText.en : locationGlossary.name as string;
      addToast(tostMessage, "success", 2000);

      if (route?.query?.location) {
        teleportTo(route?.query?.location);
      }
    }, 900);
  });
});


// METHODS
function teleportTo(location: string) {
  if (locationsGlossary.find(l => l.name === location) as locationsGlossaryInterface) {
    EndlessPaper.visitBookmark(location as string);
  } else {
    addToast('Localisation introuvable', "error", 2000);
  }

}
</script>

<style lang="scss" scoped>
.ep-webxp {
  // border: solid yellow 2px;
  width: 100%;
  overflow: hidden;

  height: 0;
  opacity: 0;
  transition: opacity 2s ease-in;

  &.active {
    height: 100%;
    opacity: 1;
  }
}
</style>
