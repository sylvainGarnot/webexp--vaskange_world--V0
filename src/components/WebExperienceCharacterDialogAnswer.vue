<template>
  <div class="vsk-dialog-response-container">
    <div class="vsk-dialog-response" v-for="answer in currentDialog_answers" @click="$emit(answer.type)">
      <p>{{ answer.speech_writen }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useAnswerStore } from "@/stores/answer";

const answerStore = useAnswerStore();
const { currentDialog_answers } = storeToRefs(answerStore);

</script>

<style lang="scss" scoped>
$height: 5.2vh;
$marge: 0.8vh;

.vsk-dialog-response-container {
  position: absolute;
  bottom: calc(100% + $marge);
  right: 0;

  .vsk-dialog-response {
    margin-top: $marge;
    width: 27vh;
    height: $height;
    background-color: rgba(29, 27, 25, 0.9);
    border-radius: $height;
    cursor: pointer;

    &:hover {
      background-color: rgba(70, 68, 66, 0.9);
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    }

    p {
      text-align: center;
      color: white;
      font-size: 3.2vh;
      line-height: $height;
    }

  }
}
</style>
