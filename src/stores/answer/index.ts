import { defineStore } from "pinia";
import { readonly } from 'vue';


import { answers } from './state';

export const useAnswerStore = defineStore("Answer", () => {

  return {
    answers: readonly(answers),
  }
});
