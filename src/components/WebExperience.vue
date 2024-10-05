<template>
  <div class="container">
    <div id="webxp" class="ep-webxp" data-webxp-author="optitest" data-webxp-id="j8vvd53"></div>

    <WebExperienceCharacterCall v-if="currentDialog && isCallDialogActive && !isDialogActive" />

    <TransitionGroup name="fade-top" tag="div">
      <WebExperienceCharacterDialog v-if="isDialogActive" />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from 'vue-router';

import WebExperienceCharacterCall from "@/components/WebExperienceCharacterCall.vue";
import WebExperienceCharacterDialog from "@/components/WebExperienceCharacterDialog.vue";

import { useApi } from "./WebExperienceApi.js";
import { shapes } from "../assets/constants/shapes";

import { storeToRefs } from 'pinia';
import { useBookmarkStore } from "@/stores/bookmark";
import { useLocationStore } from "@/stores/location";
import { useCharacterStore } from "@/stores/character";
import { useDialogStore } from "@/stores/dialog";

import type { locationFoundInterface, locationInterface } from "@/stores/location/interface.js";
import type { characterFoundInterface } from "@/stores/character/interface.js";


const route = useRoute();
const { EndlessPaper } = useApi();

const bookmarkStore = useBookmarkStore();
const { updateBookmarkHasLocation, updateBookmarkHasCharacter } = bookmarkStore;

const locationStore = useLocationStore();
const { locations, locations_found, locationsName } = storeToRefs(locationStore);
const { setCurrentLocation, onLocationFound } = locationStore;

const characterStore = useCharacterStore();
const { characters_found, charactersName } = storeToRefs(characterStore);
const { emptyCurrentCharacter } = characterStore;

const dialogStore = useDialogStore();
const { currentDialog, isDialogActive, isCallDialogActive } = storeToRefs(dialogStore);



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
    console.log("TEST - WebXP LOADED !"); // TEST

    EndlessPaper.showNavBar(false);
    EndlessPaper.showTravelButtons(false);

    EndlessPaper.onBookmarkNearby(
      {
        name: locationsName.value,
        visibleBookmarkRatio: '> 0.01',
        zoomFactor: '< 3.5',
      },
      updateBookmarkHasLocation
    );

    EndlessPaper.onBookmarkNearby(
      {
        name: charactersName.value,
        visibleBookmarkRatio: '>= 0.25',
        zoomFactor: '<= 6',
      },
      updateBookmarkHasCharacter
    );


    EndlessPaper.addShapeEventListener("click", handleShapeClick);
    EndlessPaper.addShapeEventListener("touchend", handleShapeClick);
    EndlessPaper.setShapes(shapes);

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
      emptyCurrentCharacter();
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

function handleShapeClick(shape: any) {
  console.log('TEST shape', shape);
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
