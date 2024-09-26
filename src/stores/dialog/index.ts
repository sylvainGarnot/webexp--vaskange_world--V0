import { defineStore } from "pinia";
import { readonly } from 'vue';

import { dialogs } from './state';
import { currentDialog, isDialogActive } from './getter';

export const useDialogStore = defineStore("Dialog", () => {

  return {
    dialogs: readonly(dialogs),

    currentDialog: readonly(currentDialog),
    isDialogActive: readonly(isDialogActive),
  }
});
