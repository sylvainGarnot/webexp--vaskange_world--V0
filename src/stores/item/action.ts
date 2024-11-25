import { items, items_acquired } from './state';
import { itemsAcquiredId } from './getter';
import type { itemAcquiredInterface, itemInterface } from './interface';

import { dialogs } from '../dialog/state';
import { characters_found } from '../character/state';
import { locations_found } from '../location/state';

import { cookies } from '../setting/state'
import { postBrowserCookie } from '../setting/action'
import type { cookieInterface } from '../setting/interface'


// PRIVATE
function addItemAcquired(input: itemAcquiredInterface) {
  console.log('TEST - addItemAcquired', input.name); // TEST
  items_acquired.value.push(input as itemAcquiredInterface);
};


// EXPORT
export function setItemAcquiredFromCookies() {
  const cookieItemAcquired = cookies.value.find(c => c.key === 'items_acquired') as cookieInterface
  if (cookieItemAcquired) {
    
    const cookieItemAcquiredIds = cookieItemAcquired.values as string[]
    if (cookieItemAcquiredIds && cookieItemAcquiredIds.length > 0) {
      for (let index = 0; index < cookieItemAcquiredIds.length; index++) {
        const item = items.value.find(i => i.id === cookieItemAcquiredIds[index]) as itemInterface
        if (item) {
          onItemProvided(item as itemInterface, false) // TEST
        }
      }
    }
  }
}

export function onItemProvided(input: itemInterface, modePost:boolean=true) {
  if (!items_acquired.value.find(i => i.id === input.id)) {
    const newItemAcquired = { ...input, acquired_date: new Date } as itemAcquiredInterface;

    const dialog = dialogs.value.find(d => d.item_provided === newItemAcquired.id)
    if (dialog) {

      for (let index = 0; index < characters_found.value.length; index++) {
        const characterFound = characters_found.value[index]

        if (characterFound.dialog === dialog.id) {
          characterFound.itemAcquired = true

          const characterFoundLocation = locations_found.value.find(l => l.id === characterFound.location)
          if (characterFoundLocation) {
            characterFoundLocation.itemsAcquired.push(newItemAcquired.id)
          }
        }
      }
    }

    addItemAcquired(newItemAcquired as itemAcquiredInterface)
  }

  if (modePost) {
    // Request POST /items_acquired/ (id item & id player)
    // POST BROWSER COOKIES
    postBrowserCookie('items_acquired', itemsAcquiredId.value as string[])
  }
};