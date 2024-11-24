import { defineStore } from "pinia";
import { readonly } from 'vue';

import { isDialogActive, isDialogMentionLegalActive, isDialogRegleRead } from './state';
import { currentDialog, isCallDialogActive } from './getter';
import { setIsDialogActive, setIsDialogMentionLegalActive, setIsDialogRegleRead } from './action';


export const useDialogStore = defineStore("Dialog", () => {

  return {
    isDialogActive: readonly(isDialogActive),
    isDialogMentionLegalActive: readonly(isDialogMentionLegalActive),
    isDialogRegleRead: readonly(isDialogRegleRead),

    currentDialog: readonly(currentDialog),
    isCallDialogActive: readonly(isCallDialogActive),

    setIsDialogActive,
    setIsDialogMentionLegalActive,
    setIsDialogRegleRead,
  }
});
