import { defineStore } from "pinia";
import { readonly } from 'vue';


import { answers } from './state';
import { getDialogAnswers } from './action';

export const useAnswerStore = defineStore("Answer", () => {

  return {
    answers: readonly(answers),

    getDialogAnswers,
  }
});
