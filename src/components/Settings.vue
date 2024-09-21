<template>
  <div>
    <VskBtn :width=46 image="home-kawai" @click="dialog = !dialog" />
    <v-dialog v-model="dialog" fullscreen>
      <v-card>

        <v-toolbar>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
        </v-toolbar>
        <v-card-text>

          <!-- FULLSCREEN -->
          <v-row no-gutters class="mt-3">
            <v-col cols="4">
              FullScreen
            </v-col>
            <v-col cols="8">
              <SettingsFullScreen />
            </v-col>
          </v-row>

          <!-- SON GLOBAL -->
          <v-row no-gutters class="mt-3">
            <v-col cols="4">
              Son
            </v-col>
            <v-col cols="8">
              <SettingsSoundGlobal />
            </v-col>
          </v-row>

          <!-- SON ÉFFETS -->
          <v-row no-gutters class="mt-3">
            <v-col cols="3">
              Éffets
            </v-col>
            <v-col cols="9">
              <SettingsSoundIntensityEffect />
            </v-col>
          </v-row>

          <!-- SON MUSIQUE -->
          <v-row no-gutters class="mt-3">
            <v-col cols="3">
              Musique
            </v-col>
            <v-col cols="9">
              <SettingsSoundIntensityMusic />
            </v-col>
          </v-row>

          <!-- DÉCONNEXION -->
          <v-row no-gutters class="mt-3">
            <v-col cols="4">
              Déconnexion
            </v-col>
            <v-col cols="8">
              <SettingsLogout />
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn variant="outlined" color="blue" @click="dialog = false">Annuler</v-btn>
          <v-btn variant="elevated" color="blue" @click="dialog = false">Sauvegarder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script setup lang="ts">
import SettingsSoundGlobal from "@/components/SettingsSoundGlobal.vue";
import SettingsSoundIntensityMusic from "@/components/SettingsSoundIntensityMusic.vue";
import SettingsSoundIntensityEffect from "./SettingsSoundIntensityEffect.vue";
import SettingsFullScreen from "@/components/SettingsFullScreen.vue";
import SettingsLogout from "@/components/SettingsLogout.vue";

import VskBtn from "@/layouts/VskBtn.vue";
import { ref } from 'vue';

const dialog = ref(false);

</script>

<style lang="scss" scoped></style>