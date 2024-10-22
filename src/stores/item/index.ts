import { defineStore } from "pinia";
import { readonly } from 'vue';

import { items_acquired, items } from './state';
import { itemProvidedByCurrentDialog, isAllItemsAcquired } from './getter';
import { onItemProvided } from './action';

export const useItemStore = defineStore("Item", () => {

  return {
    items_acquired: readonly(items_acquired),
    items: readonly(items),

    itemProvidedByCurrentDialog: readonly(itemProvidedByCurrentDialog),
    isAllItemsAcquired: readonly(isAllItemsAcquired),

    onItemProvided
  }
});
