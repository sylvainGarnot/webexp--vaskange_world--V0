<template>
  <div class="vsk-gift-container" v-if="isActive">
    <span class="vsk-gift-author">{{ currentCharacter!.name }}</span>
    <div class="vsk-gift-content">
      <p v-for="line in currentDialog?.speech_written">
        {{ line }}
      </p>
    </div>
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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 620px;
  height: auto;
  padding: 140px 140px;
  background-color: rgba(29, 27, 25, 0.9);
  border-radius: 50px;
  color: white;


  .vsk-gift-author {
    position: absolute;
    left: 20%;
    top: 0;
    transform: translate(-50%, -50%);
    font-size: 34px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  }

  .vsk-gift-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 22px;
    text-align: center;
  }
}
</style>
