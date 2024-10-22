import { computed } from 'vue';
import { items, items_acquired } from './state';
import { currentDialog } from '../dialog/getter';
import type { itemInterface } from './interface';


export const itemProvidedByCurrentDialog = computed(() => {
  if (currentDialog && currentDialog.value && currentDialog.value.item_provided && items && items.value && items.value.length > 0) {
    return items.value.find(i => i.id === currentDialog.value?.item_provided) as itemInterface;
  }
  return null;
})

export const isAllItemsAcquired = computed(() => {
  return items_acquired.value.length >= items.value.length
})