<template>
  <div class="vsk-dialog-response-container">
    <div class="vsk-dialog-response" v-for="answer in currentDialog_answers" @click="$emit(answer.type)">
      <div class="btn-click-animation">
        <p>{{ answer.speech_writen }}</p>
      </div>
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
@import '@/assets/styles/_global_variable.scss';

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
    background-color: $colorBlackLight;
    border-radius: $height;
    cursor: pointer;

    position: relative;
    overflow: hidden;

    &:hover {
      background-color: $colorGreyLight;
      box-shadow: $shadow;
    }

    p {
      text-align: center;
      color: $colorWhite;
      font-size: 3.2vh;
      line-height: $height;
    }

  }
}
</style>
