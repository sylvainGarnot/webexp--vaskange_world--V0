<template>
  <div class="container">
    <div id="webxp" class="ep-webxp" data-webxp-author="webxp" data-webxp-id="j8vvd53"></div>
    test gfsd gfdsg
    <!-- <WebExperienceCharacterCall v-for="bookmarkToast in bookmarkToasts" :height="bookmarkToast.height"
      :width="bookmarkToast.width" :top="bookmarkToast.top" :left="bookmarkToast.left" /> -->

    <!-- <WebExperienceCharacterDialog /> -->

  </div>
</template>

<script setup>
import { onMounted, onUpdated } from "vue";
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'

// import WebExperienceCharacterCall from "@/components/WebExperienceCharacterCall.vue";
// import WebExperienceCharacterDialog from "@/components/WebExperienceCharacterDialog.vue";

import { useApi } from "./WebExperienceApi.js";

// import { useToastStore } from "@/stores/toast/index.ts";
// import { useBookmarkToastStore } from "@/stores/character/index.js";
// import { useLocationStore } from "@/stores/location";
// import type { locationsGlossaryInterface } from '@/stores/location/interface';


const route = useRoute();

const { EndlessPaper } = useApi();

// const toastStore = useToastStore();
// const { addToast } = toastStore;

// const bookmarkToastStore = useBookmarkToastStore();
// const { bookmarkToasts } = storeToRefs(bookmarkToastStore);

// const locationStore = useLocationStore();
// const { locationsGlossary } = locationStore;
// const { updateNearbyLocations } = locationStore;



// UPDATED
onUpdated(() => {
  if (route?.query?.location) {
    // teleportTo(route?.query?.location);
  }
});

// MOUNTED
onMounted(() => {
  EndlessPaper.onLoad(function (iframe) {
    console.log("WebXP at " + iframe.src + " has been loaded !"); // TEST

    EndlessPaper.showNavBar(false);
    EndlessPaper.showTravelButtons(false);
    EndlessPaper.onBookmarkNearby(test);

    setTimeout(() => {
      // const locationGlossary = locationsGlossary[0] as locationsGlossaryInterface;
      // const tostMessage = locationGlossary.placeToText.en ? locationGlossary.placeToText.en : locationGlossary.name as string;
      // addToast(tostMessage, "success", 2000);

      if (route?.query?.location) {
        //   teleportTo(route?.query?.location);
      }
    }, 900);
  });
});


// METHODS
function teleportTo(location) {
  //   if (locationsGlossary.find(l => l.name === location) as locationsGlossaryInterface) {
  //     EndlessPaper.visitBookmark(location as string);
  //   } else {
  //     // addToast('Localisation introuvable', "error", 2000);
  //   }
}
function test() {
  console.log('TEST HEY');
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
