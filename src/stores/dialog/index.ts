import { defineStore } from "pinia";
import { readonly } from 'vue';

import { isDialogActive, isDialogRegleRead } from './state';
import { currentDialog, isCallDialogActive } from './getter';
import { setIsDialogActive, setIsDialogRegleRead } from './action';


export const useDialogStore = defineStore("Dialog", () => {

  return {
    isDialogActive: readonly(isDialogActive),
    isDialogRegleRead: readonly(isDialogRegleRead),

    currentDialog: readonly(currentDialog),
    isCallDialogActive: readonly(isCallDialogActive),

    setIsDialogActive,
    setIsDialogRegleRead,
  }
});
