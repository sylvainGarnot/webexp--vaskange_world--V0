<template>
  <div class="container">
    <div id="webxp" class="ep-webxp" data-webxp-author="optitest" data-webxp-id="j8vvd53"></div>

    <!-- <WebExperienceCharacterCall v-for="bookmarkToast in bookmarkToasts" :height="bookmarkToast.height"
      :width="bookmarkToast.width" :top="bookmarkToast.top" :left="bookmarkToast.left" /> -->

    <TransitionGroup name="fade-top" tag="div">
      <WebExperienceCharacterDialog v-if="currentDialog && isDialogActive" />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, watch } from "vue";
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

// import WebExperienceCharacterCall from "@/components/WebExperienceCharacterCall.vue";
import WebExperienceCharacterDialog from "@/components/WebExperienceCharacterDialog.vue";

import { useApi } from "./WebExperienceApi.js";
import { useBookmarkStore } from "@/stores/bookmark";
import { useLocationStore } from "@/stores/location";
import { useDialogStore } from "@/stores/dialog";

import { locations_found } from "@/stores/location/state.js";
import { characters_found } from "@/stores/character/state.js";
import { setCurrentLocation, onLocationFound } from "@/stores/location/action.js";
import type { characterFoundInterface } from "@/stores/character/interface.js";
import type { locationFoundInterface, locationInterface } from "@/stores/location/interface.js";
import { locationsName } from "@/stores/location/getter.js";
import { charactersName } from "@/stores/character/getter.js";

const route = useRoute();
const { EndlessPaper } = useApi();

const bookmarkStore = useBookmarkStore();
const { updateBookmark } = bookmarkStore;

const locationStore = useLocationStore();
const { locations } = storeToRefs(locationStore);;

const dialogStore = useDialogStore();
const { currentDialog, isDialogActive } = storeToRefs(dialogStore);

// WATCHER
watch(
  () => route.query.location,
  async location => {
    teleportTo(location as string);
  }
)

// MOUNTED
onMounted(() => {
  EndlessPaper.onLoad(function () {
    console.log("TEST - WebXP has been loaded !"); // TEST

    EndlessPaper.showNavBar(false);
    EndlessPaper.showTravelButtons(false);
    EndlessPaper.onBookmarkNearby(updateBookmark);

    setTimeout(() => {
      if (route?.query?.location) {
        teleportTo(route?.query?.location as string);
      } else {
        onLocationFound(locations?.value[0] as locationInterface);
      }
    }, 250);
  });
});


// METHODS
function teleportTo(input: string) {
  if (locationsName.value.includes(input)) {
    const locationFound = locations_found.value.find(l => l.name === input)
    if (locationFound) {
      EndlessPaper.visitBookmark(input as string);
      setCurrentLocation(locationFound as locationFoundInterface);
    } else {
      console.log('Location not found yet')
    }
  } else if (charactersName.value.includes(input)) {
    const characterFound = characters_found.value.find(l => l.name === input) as characterFoundInterface;
    if (characterFound) {
      EndlessPaper.visitBookmark(input as string);
      const characterFoundLocation = locations_found.value.find(l => l.id === characterFound.location) as locationFoundInterface;
      if (characterFoundLocation) {
        setCurrentLocation(characterFoundLocation as locationFoundInterface);
      }
    } else {
      console.log('Character not found yet')
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  background-color: #666666;
  position: relative;
  width: 100%;
  height: 100vh;

  .ep-webxp {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
