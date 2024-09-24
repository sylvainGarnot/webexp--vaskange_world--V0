import { defineStore } from "pinia";
import { readonly } from 'vue';

import { items_acquired, items } from './state';
import { onItemProvided } from './action';

export const useItemStore = defineStore("Item", () => {

  return {
    items_acquired: readonly(items_acquired),
    items: readonly(items),

    onItemProvided
  }
});
