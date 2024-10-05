<template>
  <div>
    <v-dialog class="vsk-gift-container" v-model="isActive">
      <template v-slot:default="{ isActive }">
        <v-card class="vsk-gift">
          <v-card-title class="vsk-gift-author">
            {{ currentCharacter?.name }}
          </v-card-title>
          <v-card-text>
            <p v-for="line in currentDialog?.speech_written">
              {{ line }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useDialogStore } from "@/stores/dialog";
import { useCharacterStore } from "@/stores/character";


const characterStore = useCharacterStore();
const { currentCharacter } = storeToRefs(characterStore);

const dialogStore = useDialogStore();
const { currentDialog } = storeToRefs(dialogStore);

const isActive = ref(true);

</script>

<style lang="scss" scoped>
.vsk-gift-container {
  width: 620px;
  font-size: 22px;

  .vsk-gift {
    padding: 20px;
    background-color: rgba(29, 27, 25, 0.9);
    border-radius: 50px;
    color: white;
    border: solid 1px grey;
  }

  .vsk-gift-author {
    font-size: 42px;
  }
}
</style>
