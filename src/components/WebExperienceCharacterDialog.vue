<template>
  <TransitionGroup name="vsk-dialog" tag="div" class="vsk-dialog-container">
    <div v-if="dialog && isDialogActive" class="vsk-dialog-npc">
      <span class="vsk-dialog-npc-author">Astro</span>
      <p class="vsk-dialog-npc-dialog">
        {{ dialog.speech_written[dialogStepNumber] }}
      </p>
      <v-icon v-if="dialogStepNumber + 1 < dialog.speech_written.length" class="vsk-dialog-npc-next-icon"
        icon="$vuetify" @click="dialogStepNumber++"></v-icon>
    </div>

    <!-- <div v-if="isActive && responses && responses.length > 0 && stepNumber + 1 >= dialogs.length"
      class="vsk-dialog-response-container">
      <div class="vsk-dialog-response" v-for="(response, index) in responses" @click="handleReponse(index)">
        <p>{{ response }}</p>
      </div>
    </div> -->
  </TransitionGroup>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useDialogStore } from "@/stores/dialog";

const dialogStore = useDialogStore();
const { dialog, isDialogActive } = storeToRefs(dialogStore);

let dialogStepNumber = 0 as number;

// import { useEffectStore } from "@/stores/effect";
// const { playEffect } = useEffectStore();

</script>

<style lang="scss" scoped>
.vsk-dialog-container {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 40px 15%;

  .vsk-dialog-npc {
    position: relative;
    left: 0;
    bottom: 0;
    background-color: rgba(29, 27, 25, 0.9);
    color: white;
    border-radius: 180px;
    width: 100%;
    height: 180px;

    .vsk-dialog-npc-author {
      position: absolute;
      left: 20%;
      top: 0;
      transform: translate(-50%, -50%);
      font-size: 34px;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    }

    .vsk-dialog-npc-dialog {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 34px;

      // TEXT ANIMATION
      // animation: animated-text 800ms steps(29, end) 100ms 1 normal both,
      //   animated-cursor 600ms steps(29, end) infinite;

      // border-right: solid 3px rgba(0, 255, 0, .75);
      // white-space: nowrap;
      // overflow: hidden;
      // margin: 0 auto;

      // border: solid 1px red;
      // width: 1000px;
    }

    .vsk-dialog-npc-next-icon {
      position: absolute;
      left: 50%;
      bottom: -15px;
      font-size: 40px;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
      cursor: pointer;
      animation: bounce2 2s ease infinite;
    }
  }

  .vsk-dialog-response-container {
    position: absolute;
    bottom: 100%;
    right: 5%;

    .vsk-dialog-response {
      margin-top: 12px;
      background-color: rgba(29, 27, 25, 0.9);
      border-radius: 65px;
      width: 520px;
      height: 65px;
      cursor: pointer;

      &:hover {
        background-color: rgba(70, 68, 66, 0.9);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
      }

      p {
        text-align: center;
        line-height: 65px;
        font-size: 34px;
        color: white;
      }

    }
  }
}

.vsk-dialog-move,
.vsk-dialog-enter-active,
.vsk-dialog-leave-active {
  transition: all 0.5s ease;
}

.vsk-dialog-enter-from,
.vsk-dialog-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

@keyframes bounce2 {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  40% {
    transform: translateX(-50%) translateY(-20px);
  }

  60% {
    transform: translateX(-50%) translateY(-10px);
  }
}

/* text animation */
// @keyframes animated-text {
//   from {
//     width: 0;
//   }

//   to {
//     width: 472px;
//   }
// }

/* cursor animations */
// @keyframes animated-cursor {
//   from {
//     border-right-color: rgba(0, 255, 0, .75);
//   }

//   to {
//     border-right-color: transparent;
//   }
// }</style>
