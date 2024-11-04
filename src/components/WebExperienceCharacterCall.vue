<template>
  <div>
    <!-- TEST BOOKMARK -->
    <div class="vsk-character-bookmark-test"
      :style="`top: ${currentCharacter.bookmark?.top}px; left: ${currentCharacter.bookmark?.left}px; width: ${currentCharacter.bookmark?.width}px; height: ${currentCharacter.bookmark?.height}px;`">
    </div>

    <!-- CHARACTER CALL -->
    <div class="vsk-character-call-container" @click="setIsDialogActive(true)"
      :style="`top: ${characterCallTop}px; left: ${characterCallLeft}px; width: ${characterCallWidth}px; height: ${characterCallHeight}px; border-width: ${characterCallWidth * 0.02}px`">

      <div class="vsk-character-call-arrow-container"
        :style="`width: ${(characterCallWidth * 0.2 + 6) * 2}px; height: ${characterCallWidth * 0.4 + 6}px;`">
        <div class="vsk-character-call-arrow-border"
          :style="`border-left: ${characterCallWidth * 0.2 + 6}px solid transparent; border-right: ${characterCallWidth * 0.2 + 6}px solid transparent; border-top: ${characterCallWidth * 0.4 + 6}px solid black;`">
        </div>
        <div class="vsk-character-call-arrow"
          :style="`border-left: ${characterCallWidth * 0.2}px solid transparent; border-right: ${characterCallWidth * 0.2}px solid transparent; border-top: ${characterCallWidth * 0.4}px solid white;`">
        </div>
      </div>

      <div class="vsk-character-call-content">
        <p
          :style="`line-height: ${characterCallHeight}px; font-size: ${characterCallHeight * 0.45}px; padding-right: ${characterCallHeight * 0.2}px;`">
          Hey
          <span :style="`right: ${characterCallHeight * 0.08}px;`">
            !!</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia'

import { useCharacterStore } from "@/stores/character";
import { useDialogStore } from "@/stores/dialog";

const characterStore = useCharacterStore();
const { currentCharacter } = storeToRefs(characterStore);

const dialogStore = useDialogStore();
const { setIsDialogActive } = dialogStore;

const characterCallTop = computed(() => {
  return currentCharacter.value.bookmark?.top - characterCallHeight.value * 0.25
})
const characterCallLeft = computed(() => {
  return currentCharacter.value.bookmark?.left + currentCharacter.value.bookmark?.width * 0.2
})
const characterCallWidth = computed(() => {
  return currentCharacter.value.bookmark?.width * 0.185
})
const characterCallHeight = computed(() => {
  return currentCharacter.value.bookmark?.width * 0.125
})


</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

// TEST
.vsk-character-bookmark-test {
  position: absolute;
  border: solid 4px cyan;
  display: none;
}

.vsk-character-call-container,
.vsk-character-call-arrow-container,
.vsk-character-call-arrow-border,
.vsk-character-call-arrow,
.vsk-character-call-content {
  position: absolute;
  cursor: pointer;
}

.vsk-character-call-container {
  border-style: solid;
  border-color: $colorBlack;
  border-radius: 100%;

  .vsk-character-call-arrow-container {
    right: -10%;
    top: 40%;
    transform: rotate(-40deg);

    .vsk-character-call-arrow {
      top: 4px;
      left: 6px;
    }
  }

  .vsk-character-call-content {
    background-color: $colorWhite;
    border-radius: 100%;
    width: 100%;
    height: 100%;

    text-align: center;

    p {
      position: relative;

      span {
        position: absolute;
        animation: bounceV 2s ease infinite;
      }
    }
  }
}
</style>
