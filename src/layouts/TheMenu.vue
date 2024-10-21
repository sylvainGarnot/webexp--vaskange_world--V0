<template>
  <div id="TheMenu">
    <v-row no-gutters class="the-menu-container pt-4">
      <v-col cols="auto" class="the-menu-settings-music-volume pr-4">
        <SettingsMusicVolume />
      </v-col>
      <v-col cols="auto" class="pr-4">
        <SettingsMusicToggle />
      </v-col>
      <v-col cols="auto" class="pr-4">
        <SettingsFullScreen />
      </v-col>
      <v-col cols="auto" class="pr-4">
        <Guide />
      </v-col>
      <v-col cols="auto" class="pr-4">
        <Inventory />
      </v-col>
      <v-col cols="auto" class="pr-4">
        <Map />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import SettingsMusicVolume from "@/components/SettingsMusicVolume.vue";
import SettingsMusicToggle from "@/components/SettingsMusicToggle.vue";
import SettingsFullScreen from "@/components/SettingsFullScreen.vue";
import Map from "@/components/Map.vue";
import Guide from "@/components/Guide.vue";
import Inventory from "@/components/Inventory.vue";
</script>

<style lang="scss" scoped>
#TheMenu {
  position: absolute;
  top: 0;
  right: 0;
}

.the-menu-settings-music-volume {
  display: none;
}

@media (min-width: 600px) {
  .the-menu-settings-music-volume {
    opacity: 0;
    display: inline;
    transition: opacity 500ms ease;
  }

  .the-menu-container:hover {
    .the-menu-settings-music-volume {
      opacity: 1;
    }
  }
}
</style>
