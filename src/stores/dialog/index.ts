import { defineStore } from "pinia";
import { readonly } from 'vue';

import { isDialogActive, isDialogMentionLegalActive } from './state';
import { currentDialog, isCallDialogActive } from './getter';
import { setIsDialogActive, setIsDialogMentionLegalActive } from './action';


export const useDialogStore = defineStore("Dialog", () => {

  return {
    isDialogActive: readonly(isDialogActive),
    isDialogMentionLegalActive: readonly(isDialogMentionLegalActive),

    currentDialog: readonly(currentDialog),
    isCallDialogActive: readonly(isCallDialogActive),

    setIsDialogActive,
    setIsDialogMentionLegalActive
  }
});
