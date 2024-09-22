import { defineStore } from "pinia";
import { readonly } from 'vue';


import { answers } from './state';
import { dialog_answers } from './getter';

export const useAnswerStore = defineStore("Answer", () => {

  return {
    answers: readonly(answers),

    dialog_answers: readonly(dialog_answers),
  }
});
