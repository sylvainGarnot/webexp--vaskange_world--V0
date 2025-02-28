<template>
  <div>
    <!-- TEST BOOKMARK -->
    <!-- <div class="webexp-character-bookmark-test"
      :style="`top: ${currentCharacter.bookmark?.top}px; left: ${currentCharacter.bookmark?.left}px; width: ${currentCharacter.bookmark?.width}px; height: ${currentCharacter.bookmark?.height}px;`">
    </div> -->

    <!-- CHARACTER CALL -->
    <div class="webexp-character-call-container" id="webexp-character-call-container" @click="handleClick"
      :style="`top: ${characterCallTop}px; left: ${characterCallLeft}px; width: ${characterCallWidth}px; height: ${characterCallHeight}px; border-width: ${characterCallWidth * 0.02}px`">

      <div class="webexp-character-call webexp-character-call-arrow-container"
        :style="`width: ${(characterCallWidth * 0.2 + 6) * 2}px; height: ${characterCallWidth * 0.4 + 6}px;`">
        <div class="webexp-character-call webexp-character-call-arrow-border"
          :style="`border-left: ${characterCallWidth * 0.2 + 6}px solid transparent; border-right: ${characterCallWidth * 0.2 + 6}px solid transparent; border-top: ${characterCallWidth * 0.4 + 6}px solid black;`">
        </div>
        <div class="webexp-character-call webexp-character-call-arrow"
          :style="`border-left: ${characterCallWidth * 0.2}px solid transparent; border-right: ${characterCallWidth * 0.2}px solid transparent; border-top: ${characterCallWidth * 0.4}px solid white; top: -${characterCallWidth * 0.008}px`">
        </div>
      </div>

      <div class="webexp-character-call webexp-character-call-content" v-if="hasCurrentCharacterItemToGive">
        <p :style="`line-height: ${characterCallHeight}px; font-size: ${characterCallHeight * 0.45}px;`">
          !!!</p>
      </div>
      <div class="webexp-character-call webexp-character-call-content" v-else>
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
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia'

import { useCharacterStore } from "@/stores/character";
import { useDialogStore } from "@/stores/dialog";
import { playSound } from '@/stores/music/action';

const characterStore = useCharacterStore();
const { currentCharacter, hasCurrentCharacterItemToGive } = storeToRefs(characterStore);

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


// BUG SCROLL UNFOUND
// onMounted(() => {
//   document.querySelector('webexp-character-call')?.addEventListener("scroll", function (event) {
//     event.preventDefault()
//   });
// })

function handleClick() {
  setIsDialogActive(true)
  if (!hasCurrentCharacterItemToGive.value) {
    playSound('son_bouton_click')
  }
}


</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

// TEST
.webexp-character-bookmark-test {
  position: absolute;
  border: solid 4px cyan;
  // display: none; // TEST
}


// BUG SCROLL UNFOUND
// .webexp-character-call {
//   overflow: 'hidden';
//   height: '100%';
// }

.webexp-character-call-container,
.webexp-character-call-arrow-container,
.webexp-character-call-arrow-border,
.webexp-character-call-arrow,
.webexp-character-call-content {
  position: absolute;
  cursor: pointer;
}

.webexp-character-call-container {
  border-style: solid;
  border-color: $colorBlack;
  border-radius: 100%;

  .webexp-character-call-arrow-container {
    right: -10%;
    top: 40%;
    transform: rotate(-40deg);

    .webexp-character-call-arrow {
      left: 6px;
    }
  }

  .webexp-character-call-content {
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
