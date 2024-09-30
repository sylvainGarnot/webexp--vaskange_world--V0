import { defineStore } from "pinia";
import { readonly } from 'vue';

import { currentDialog, isDialogActive } from './getter';

export const useDialogStore = defineStore("Dialog", () => {

  return {
    currentDialog: readonly(currentDialog),
    isDialogActive: readonly(isDialogActive),
  }
});
