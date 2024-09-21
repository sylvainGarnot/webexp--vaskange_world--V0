import { defineStore } from "pinia";
import { readonly } from 'vue';

import { isActive, dialogs, responses, author, stepNumber, image } from './state';
import { setIsActive, setDialogs, setAuthor, setStepNumber, setImage } from './action';

export const useDialogStore = defineStore("dialog", () => {

  return {
    isActive: readonly(isActive),
    dialogs: readonly(dialogs),
    responses: readonly(responses),
    author: readonly(author),
    stepNumber: readonly(stepNumber),
    image: readonly(image),

    setIsActive,
    setDialogs,
    setAuthor,
    setStepNumber,
    setImage,
  }
});
