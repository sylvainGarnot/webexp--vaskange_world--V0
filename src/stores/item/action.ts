import { items_acquired } from './state';
import type { itemAcquiredInterface, itemInterface } from './interface';


// PRIVATE


// EXPORT
export function onItemProvided(input: itemInterface) {
  if (!items_acquired.value.find(i => i.id === input.id)) {
    const newItemAcquired = { ...input, acquired_date: new Date } as itemAcquiredInterface;
    items_acquired.value.push(newItemAcquired);
  }
};