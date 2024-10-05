import { defineStore } from "pinia";
import { readonly } from 'vue';

import { isDialogActive } from './state';
import { currentDialog, isCallDialogActive } from './getter';
import { setIsDialogActive } from './action';


export const useDialogStore = defineStore("Dialog", () => {

  return {
    isDialogActive: readonly(isDialogActive),

    currentDialog: readonly(currentDialog),
    isCallDialogActive: readonly(isCallDialogActive),

    setIsDialogActive
  }
});
