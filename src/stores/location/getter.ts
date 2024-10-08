import { computed } from 'vue';
import { locations, locations_found } from './state';
import { characters } from '../character/state';
import { dialogs } from '../dialog/state';
import { items, items_acquired } from '../item/state';
import type { locationFoundProgressionInterface } from './interface';


export const locationsName = computed(() => {
  return locations.value.map(l => l.name);
})

export const locationsFoundProgression = computed(() => {

  const result = [];

  for (let i = 0; i < locations_found.value.length; i++) {
    const location = {
      ...locations_found.value[i],
      nbrItemsToAcquired: 0,
      nbrItemsAcquired: 0,
    } as locationFoundProgressionInterface
   
    for (let j = 0; j < characters.value.length; j++) {
      const character = characters.value[j];
      if (character?.location === location?.id) {
        
        const dialog = dialogs.value.find(d => d.id === character?.dialog)
        if (dialog) {

          const item = items.value.find(it => it.id === dialog?.item_provided)
          if (item) {
            location.nbrItemsToAcquired++

            const itemAcquired = items_acquired.value.find(it => it.id === item?.id)
            if (itemAcquired) {
              location.nbrItemsAcquired++
            }
          }
        }
      }
    }
    result.push(location)
  }

  return result as locationFoundProgressionInterface[]
})
