<template>
  <div class="container">
    <div id="webxp" class="ep-webxp" data-webxp-author="optitest" data-webxp-id="j8vvd53"></div>

    <!-- <WebExperienceCharacterCall v-for="bookmarkToast in bookmarkToasts" :height="bookmarkToast.height"
      :width="bookmarkToast.width" :top="bookmarkToast.top" :left="bookmarkToast.left" /> -->

    <TransitionGroup name="fade-top" tag="div">
      <WebExperienceCharacterDialog v-if="dialog && isDialogActive" />
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

const route = useRoute();
const { EndlessPaper } = useApi();

const bookmarkStore = useBookmarkStore();
const { updateBookmark } = bookmarkStore;

const locationStore = useLocationStore();
const { locations } = storeToRefs(locationStore);;

const dialogStore = useDialogStore();
const { dialog, isDialogActive } = storeToRefs(dialogStore);

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
      }
    }, 900);
  });
});


// METHODS
function teleportTo(input: string) {
  if (locations.value.find(l => l.name === input)) {
    EndlessPaper.visitBookmark(input as string);
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
