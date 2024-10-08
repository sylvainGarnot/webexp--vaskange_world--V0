<template>
  <div id="TheSettings">
    <v-row no-gutters class="pt-4">
      <v-col cols="3" class="pr-4">
        <SettingsSoundGlobal />
      </v-col>
      <v-col cols="3" class="pr-4">
        <SettingsFullScreen />
      </v-col>
      <v-col cols="3" class="pr-4">
        <Characters />
      </v-col>
      <v-col cols="3" class="pr-4">
        <Map />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import SettingsSoundGlobal from "@/components/SettingsSoundGlobal.vue";
import SettingsFullScreen from "@/components/SettingsFullScreen.vue";
import Map from "@/components/Map.vue";
import Characters from "@/components/Characters.vue";
</script>

<style lang="scss" scoped>
#TheSettings {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
