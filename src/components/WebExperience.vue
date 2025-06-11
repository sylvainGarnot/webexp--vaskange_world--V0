<template>
  <div class="container">

    <!-- vaskange world -->
    <div id="webxp" class="ep-webxp" data-webxp-author="webxp" data-webxp-id="j8vvd53"></div>

    <!-- BETCLIC -->
    <!-- <div id="webxp" class="ep-webxp" data-webxp-author="webxp" data-webxp-id="7weeyex"></div> -->
    <!-- <div id="webxp" class="ep-webxp" data-webxp-author="webxp" data-webxp-id="jgZZ1y7"></div> -->
    <!-- <div id="webxp" class="ep-webxp" data-webxp-author="webxp" data-webxp-id="xOJJZEj"></div> -->
    <!-- <div id="webxp" class="ep-webxp" data-webxp-author="webxp" data-webxp-id="3KQQ80j"></div> -->

    <!-- BETCLIC - SERVEUR ENDLESS -->
    <!-- <div id="webxp" class="ep-webxp" data-webxp-author="webxp" data-webxp-id="jgZZ1y7"
      data-webxp-show-travel-buttons="false" data-webxp-show-navbar="false" data-webxp-show-navinstructions="false">
    </div> -->

    <!-- BETCLIC - SERVEUR AMAZON -->
    <!-- <div class="ep-webxp" data-webxp-url="https://xp.endlesspaper.app/betclic/?id=3KQQ80j"
      data-webxp-show-travel-buttons="false" data-webxp-show-navbar="false" data-webxp-show-navinstructions="false">
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted  } from "vue";

import { useApi } from "./WebExperienceApi.js";
const { EndlessPaper } = useApi();

import { useBookmarkStore } from "@/stores/bookmark";
const bookmarkStore = useBookmarkStore();
const { updateBookmarkHasLocation, updateBookmarkHasCharacter } = bookmarkStore;

import { useLocationStore } from "@/stores/location";
const locationStore = useLocationStore();
// const { locations_found, locationsName, theHiddenPlace, locationEndName, isLocationEndReach } = storeToRefs(locationStore);
// const { setCurrentLocation, setDefaultLocationFound, onLocationEndReach } = locationStore;


// MOUNTED
onMounted(() => {
  EndlessPaper.onLoad(function () {
    // console.log("TEST - WebXP LOADED !"); // TEST


    // ENDLESSAPER PARAMS
    EndlessPaper.showNavBar(false);
    EndlessPaper.showTravelButtons(false);
    EndlessPaper.setLogoPosition("bottomleft")
    EndlessPaper.showNavInstructions(false)
    // EndlessPaper.setBookmarks(bookmarks)


    // BOOKMARK LOCATION
    EndlessPaper.onBookmarkNearby(
      // {
      //   name: null,
      //   visibleBookmarkRatio: '> 0.005',
      //   zoomFactor: '< 12',
      // },
      updateBookmarkHasLocation
    );


    // BOOKMARK COLLECTIBLE
    // EndlessPaper.onBookmarkNearby(
    //   {
    //     name: '',
    //     visibleBookmarkRatio: '>= 0.05',
    //     zoomFactor: '<= 25', // le max de détection semble être vers les 17.5
    //   },
    //   updateBookmarkHasCharacter
    // );

  });
});


// METHODS
function teleportTo(input: string) {
  if (true) {
  // IF is location bookmark
  // if input prefix === "l"

    // const locationFound = locations_found.value.find(l => l.name === input)
    // if (locationFound || input === theHiddenPlace.value.name) {
    if (true) {
    // IF location is already found 
      EndlessPaper.visitBookmark(input as string);
      // setCurrentLocation(locationFound as locationFoundInterface);
      // emptyCurrentCharacter();
    } else {
      // console.log('Location not found yet')
    }
  } else {
  // ELSE IF is collectible bookmark
  // if input prefix === "l"
    
    // const characterFound = characters_found.value.find(l => l.name === input) as characterFoundInterface;
    // if (characterFound) {
    if (true) {
    // IF collectible is already found 
      EndlessPaper.visitBookmark(input as string);

      // const characterFoundLocation = locations_found.value.find(l => l.id === characterFound.location) as locationFoundInterface;
      // if (characterFoundLocation) {
        // setCurrentLocation(characterFoundLocation as locationFoundInterface);
      // }
    } else {
      // console.log('Character not found yet')
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden !important;

  .ep-webxp {
    width: 100%;
    height: 100%;
    overflow: hidden !important;
  }
}
</style>
