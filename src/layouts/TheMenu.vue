<template>
  <div id="TheMenu">
    <v-row no-gutters class="the-menu-container pb-4">
      <v-col cols="auto">
        <Regle />
      </v-col>
      <v-col cols="auto" class="pl-2 pl-md-5">
        <!-- <Map v-if="!isLoading" /> -->
        <Map />
      </v-col>
      <v-col cols="auto" class="pl-2 pl-md-5">
        <SettingsFullScreen />
      </v-col>
      <v-col cols="auto" class="the-menu-settings-music-toggle pl-2 pl-md-5">
        <SettingsMusicToggle />
      </v-col>
      <v-col cols="auto" class="the-menu-settings-music-volume pl-2 pl-md-5">
        <SettingsMusicVolume />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import SettingsMusicVolume from "@/components/SettingsMusicVolume.vue";
import SettingsMusicToggle from "@/components/SettingsMusicToggle.vue";
import SettingsFullScreen from "@/components/SettingsFullScreen.vue";
import Map from "@/components/Map.vue";
import Regle from "@/components/Regle.vue";

// Bizarrement, bug de la Map qui faisait freeze lors du chargement des cookies
// import { isLoading } from '@/stores/setting/state';


</script>

<style lang="scss" scoped>
#TheMenu {
  .the-menu-container {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    flex-wrap: nowrap !important;
  }

  .the-menu-settings-music-volume {
    display: none;
  }

  @media (min-width: 600px) {
    .the-menu-settings-music-volume {
      position: absolute;
      display: inline;
      right: 0;
      transform: translateX(100%);
      opacity: 0;
      transition: all 600ms ease;
    }

    .the-menu-settings-music-toggle:hover+.the-menu-settings-music-volume,
    .the-menu-settings-music-volume:hover {
      opacity: 1;
    }
  }
}
</style>
