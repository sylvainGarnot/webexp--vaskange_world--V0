<template>
  <div>
    <div v-if="isActive" class="vsk-bookmark-toast-container" @click="handleCallDialog()"
      :style="`top: ${currentCharacter.callBubble?.top}px; left: ${currentCharacter.callBubble?.left}px; width: ${currentCharacter.callBubble?.width}px; height: ${currentCharacter.callBubble?.height}px;`">
      <div class="vsk-bookmark-toast-arrow-container"
        :style="`width: ${(currentCharacter.callBubble?.width * 0.2 + 6) * 2}px; height: ${currentCharacter.callBubble?.width * 0.4 + 6}px;`">
        <div class="vsk-bookmark-toast-arrow-border"
          :style="`border-left: ${currentCharacter.callBubble?.width * 0.2 + 6}px solid transparent; border-right: ${currentCharacter.callBubble?.width * 0.2 + 6}px solid transparent; border-top: ${currentCharacter.callBubble?.width * 0.4 + 6}px solid black;`">
        </div>
        <div class="vsk-bookmark-toast-arrow"
          :style="`border-left: ${currentCharacter.callBubble?.width * 0.2}px solid transparent; border-right: ${currentCharacter.callBubble?.width * 0.2}px solid transparent; border-top: ${currentCharacter.callBubble?.width * 0.4}px solid white;`">
        </div>
      </div>
      <div class="vsk-bookmark-toast-content">
        <p
          :style="`line-height: ${currentCharacter.callBubble?.height}px; font-size: ${currentCharacter.callBubble?.height * 0.3}px; padding-right: ${currentCharacter.callBubble?.height * 0.1}px;`">
          Hey
          <span :style="`margin-left: ${currentCharacter.callBubble?.height * 0.1}px;`">
            !!</span>
        </p>
      </div>
    </div>

    <TransitionGroup name="fade-top" tag="div">
      <WebExperienceCharacterDialog v-if="!isActive" />
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia'

import WebExperienceCharacterDialog from "@/components/WebExperienceCharacterDialog.vue";

import { useCharacterStore } from "@/stores/character";
import { useDialogStore } from "@/stores/dialog";

const characterStore = useCharacterStore();
const { currentCharacter } = storeToRefs(characterStore);

const dialogStore = useDialogStore();
const { currentDialog, isDialogActive } = storeToRefs(dialogStore);

const isActive = ref(true);

function handleCallDialog() {
  isActive.value = false;
}

</script>

<style lang="scss" scoped>
.vsk-bookmark-toast-container,
.vsk-bookmark-toast-arrow-container,
.vsk-bookmark-toast-arrow-border,
.vsk-bookmark-toast-arrow,
.vsk-bookmark-toast-content {
  position: absolute;
  cursor: pointer;
}

.vsk-bookmark-toast-container {
  border: solid 3px black;
  border-radius: 100%;

  .vsk-bookmark-toast-arrow-container {
    right: -15%;
    top: 65%;
    transform: rotate(-40deg);

    .vsk-bookmark-toast-arrow {
      top: 3px;
      left: 6px;
    }
  }

  .vsk-bookmark-toast-content {
    background-color: white;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    text-align: center;

    .v-btn {
      top: -10%;
      width: 35%;
      height: 20%;
    }

    span {
      position: absolute;
      animation: bounce 2s ease infinite;
    }
  }
}
</style>
