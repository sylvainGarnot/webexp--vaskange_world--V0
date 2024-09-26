import { defineStore } from "pinia";
import { readonly } from 'vue';


import { answers } from './state';
import { currentDialog_answers } from './getter';

export const useAnswerStore = defineStore("Answer", () => {

  return {
    answers: readonly(answers),

    currentDialog_answers: readonly(currentDialog_answers),
  }
});
