import { defineStore } from "pinia";
import { readonly } from 'vue';

import { toasts } from './state';
import { addToast } from './action';

export const useToastStore = defineStore("toast", () => {

  return {
    toasts: readonly(toasts),

    addToast,
  }
});
