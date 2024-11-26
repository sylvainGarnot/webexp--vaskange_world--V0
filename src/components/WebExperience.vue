<template>
  <div class="container">

    <!-- SERVEUR ENDLESS -->
    <!-- <div id="webxp" class="ep-webxp" data-webxp-author="webxp" data-webxp-id="3KQQ80j"
      data-webxp-show-travel-buttons="false" data-webxp-show-navbar="false" data-webxp-show-navinstructions="false">
    </div> -->

    <!-- SERVEUR AMAZON -->
    <div class="ep-webxp" data-webxp-url="https://xp.endlesspaper.app/betclic/?id=3KQQ80j"
      data-webxp-show-travel-buttons="false" data-webxp-show-navbar="false" data-webxp-show-navinstructions="false">
    </div>

    <WebExperienceCharacterCall v-if="currentDialog && isCallDialogActive && !isDialogActive" />
    <WebExperienceAlertLocationEndReach v-if="isLocationEndReach" />

    <TransitionGroup name="fade-top" tag="div">
      <WebExperienceCharacterDialog v-if="isDialogActive && currentDialog?.type.includes('default')"
        :type="currentDialog?.type" :is-large="currentDialog?.isLarge" />
    </TransitionGroup>

    <TransitionGroup name="fade-top" tag="div">
      <WebExperienceCharacterDialogGift v-if="isDialogActive && currentDialog?.type === 'gift'" />
    </TransitionGroup>

    <Transition>
      <WebExperienceCharacterDialogSecretEnd v-if="isDialogActive && currentDialog?.type === 'secret-end'" />
    </Transition>

    <TransitionGroup>
      <WebExperienceLoadUserData v-model:isActive="isLoadUserDataDialogActive" key="0" />
    </TransitionGroup>

  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import { useRoute } from 'vue-router';

import WebExperienceCharacterCall from "@/components/WebExperienceCharacterCall.vue";
import WebExperienceCharacterDialog from "@/components/WebExperienceCharacterDialog.vue";
import WebExperienceCharacterDialogGift from "@/components/WebExperienceCharacterDialogGift.vue";
import WebExperienceAlertLocationEndReach from "@/components/WebExperienceAlertLocationEndReach.vue";
import WebExperienceCharacterDialogSecretEnd from "@/components/WebExperienceCharacterDialogSecretEnd.vue";
import WebExperienceLoadUserData from "@/components/WebExperienceLoadUserData.vue";

import { useApi } from "./WebExperienceApi.js";
import { shapes } from "../assets/constants/shapes";

import { storeToRefs } from 'pinia';
import { useBookmarkStore } from "@/stores/bookmark";
import { useLocationStore } from "@/stores/location";
import { useCharacterStore } from "@/stores/character";
import { useDialogStore } from "@/stores/dialog";
import { useSettingStore } from "@/stores/setting";

import type { locationFoundInterface, locationInterface } from "@/stores/location/interface.js";
import type { characterFoundInterface } from "@/stores/character/interface.js";
import { apiPostAvancementUser } from "@/api/post";


const route = useRoute();
const { EndlessPaper } = useApi();

const bookmarkStore = useBookmarkStore();
const { updateBookmarkHasLocation, updateBookmarkHasCharacter } = bookmarkStore;

const locationStore = useLocationStore();
const { locations_found, locationsName, theHiddenPlace, locationEndName, isLocationEndReach } = storeToRefs(locationStore);
const { setCurrentLocation, setDefaultLocationFound, onLocationEndReach } = locationStore;

const characterStore = useCharacterStore();
const { characters_found, charactersName } = storeToRefs(characterStore);
const { emptyCurrentCharacter } = characterStore;

const dialogStore = useDialogStore();
const { currentDialog, isDialogActive, isCallDialogActive } = storeToRefs(dialogStore);
const { setIsDialogActive } = dialogStore;

const settingStore = useSettingStore();
const { cookies, isCookiesEnough } = storeToRefs(settingStore)
const { getBrowserCookies } = settingStore;

const isLoadUserDataDialogActive = ref(false);


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
    // console.log("TEST - WebXP LOADED !"); // TEST

    EndlessPaper.showNavBar(false);
    EndlessPaper.showTravelButtons(false);
    EndlessPaper.setLogoPosition("bottomleft")
    EndlessPaper.showNavInstructions(false)

    // BOOKMARK LOCATION
    EndlessPaper.onBookmarkNearby(
      {
        name: locationsName.value,
        visibleBookmarkRatio: '> 0.005',
        zoomFactor: '< 12',
      },
      updateBookmarkHasLocation
    );

    // BOOKMARK CHARACTER
    EndlessPaper.onBookmarkNearby(
      {
        name: charactersName.value,
        visibleBookmarkRatio: '>= 0.05',
        zoomFactor: '<= 25', // le max de détection semble être vers les 17.5
      },
      updateBookmarkHasCharacter
    );

    // BOOKMARK END LOCATION
    EndlessPaper.onBookmarkNearby(
      {
        name: [locationEndName.value],
        zoomFactor: '>= 25',
      },
      onLocationEndReach
    );


    EndlessPaper.addShapeEventListener("click", handleShapeClick);
    EndlessPaper.addShapeEventListener("touchend", handleShapeClick);
    EndlessPaper.setShapes(shapes);

    // disable BUGGY
    // getBrowserCookies()
    // if (cookies.value && cookies.value.length > 0 && isCookiesEnough.value
    // ) {
    //   isLoadUserDataDialogActive.value = true
    // } else {
    setDefaultLocationFound();
    apiPostAvancementUser('visite')
    // }


    setTimeout(() => {
      if (route?.query?.location && route?.query?.force) {
        EndlessPaper.visitBookmark(route?.query?.location as string);
      } else if (route?.query?.location) {
        teleportTo(route?.query?.location as string);
      }
    }, 250);
  });
});


// METHODS
function teleportTo(input: string) {
  if (locationsName.value.includes(input)) {
    const locationFound = locations_found.value.find(l => l.name === input)
    if (locationFound || input === theHiddenPlace.value.name) {
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
  setIsDialogActive(true);
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
