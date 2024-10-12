import { items_acquired } from './state';
import type { itemAcquiredInterface, itemInterface } from './interface';
import { dialogs } from '../dialog/state';
import { characters_found } from '../character/state';


// PRIVATE


// EXPORT
export function onItemProvided(input: itemInterface) {
  if (!items_acquired.value.find(i => i.id === input.id)) {
    const newItemAcquired = { ...input, acquired_date: new Date } as itemAcquiredInterface;

    const dialog = dialogs.value.find(d => d.item_provided === newItemAcquired.id)
    if (dialog) {
      for (let index = 0; index < characters_found.value.length; index++) {
        if (characters_found.value[index].dialog === dialog.id) {
          characters_found.value[index].itemAcquired = true
        }
      }
    }

    items_acquired.value.push(newItemAcquired);
  }
};