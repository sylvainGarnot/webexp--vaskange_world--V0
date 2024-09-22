import { defineStore } from "pinia";
import { readonly } from 'vue';

import { dialogs } from './state';
import { dialog, isDialogActive } from './getter';

export const useDialogStore = defineStore("Dialog", () => {

  return {
    dialogs: readonly(dialogs),

    dialog: readonly(dialog),
    isDialogActive: readonly(isDialogActive),
  }
});
