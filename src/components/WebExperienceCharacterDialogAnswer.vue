<template>
  <div>
    <div class="vsk-dialog-response-container">
      <div class="vsk-dialog-response" v-for="answer in dialog_answers" @click="true">
        <p>{{ answer.speech_writen }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useAnswerStore } from "@/stores/answer";

const answerStore = useAnswerStore();
const { dialog_answers } = storeToRefs(answerStore);

</script>

<style lang="scss" scoped>
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
</style>
