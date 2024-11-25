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
  console.log('BUG setItemAcquiredFromCookies 00') // TEST
  const cookieItemAcquired = cookies.value.find(c => c.key === 'items_acquired') as cookieInterface
  console.log('BUG setItemAcquiredFromCookies 01') // TEST
  if (cookieItemAcquired) {
    console.log('BUG setItemAcquiredFromCookies 02') // TEST
    
    const cookieItemAcquiredIds = cookieItemAcquired.values as string[]
    console.log('BUG setItemAcquiredFromCookies 03') // TEST
    if (cookieItemAcquiredIds && cookieItemAcquiredIds.length > 0) {
      console.log('BUG setItemAcquiredFromCookies 04') // TEST
      for (let index = 0; index < cookieItemAcquiredIds.length; index++) {
        console.log('BUG setItemAcquiredFromCookies 05') // TEST
        const item = items.value.find(i => i.id === cookieItemAcquiredIds[index]) as itemInterface
        console.log('BUG setItemAcquiredFromCookies 06') // TEST
        if (item) {
          console.log('BUG setItemAcquiredFromCookies 07') // TEST
          onItemProvided(item as itemInterface, false)
          console.log('BUG setItemAcquiredFromCookies 08') // TEST
        }
      }
    }
  }
}

export function onItemProvided(input: itemInterface, modePost:boolean=true) {
  console.log('BUG onItemProvided 01') // TEST
  if (!items_acquired.value.find(i => i.id === input.id)) {
    console.log('BUG onItemProvided 02') // TEST
    const newItemAcquired = { ...input, acquired_date: new Date } as itemAcquiredInterface;
    console.log('BUG onItemProvided 03') // TEST

    const dialog = dialogs.value.find(d => d.item_provided === newItemAcquired.id)
    console.log('BUG onItemProvided 04') // TEST
    if (dialog) {

      console.log('BUG onItemProvided 05') // TEST
      for (let index = 0; index < characters_found.value.length; index++) {
        console.log('BUG onItemProvided 06') // TEST
        const characterFound = characters_found.value[index]
        console.log('BUG onItemProvided 07') // TEST

        if (characterFound.dialog === dialog.id) {
          console.log('BUG onItemProvided 08') // TEST
          characterFound.itemAcquired = true
          console.log('BUG onItemProvided 09') // TEST

          const characterFoundLocation = locations_found.value.find(l => l.id === characterFound.location)
          console.log('BUG onItemProvided 10') // TEST
          if (characterFoundLocation) {
            console.log('BUG onItemProvided 11') // TEST
            characterFoundLocation.itemsAcquired.push(newItemAcquired.id)
            console.log('BUG onItemProvided 12') // TEST
          }
        }
      }
    }

    console.log('BUG onItemProvided 13') // TEST
    addItemAcquired(newItemAcquired as itemAcquiredInterface)
    console.log('BUG onItemProvided 14') // TEST
  }

  if (modePost) {
    console.log('BUG onItemProvided 15') // TEST
    // Request POST /items_acquired/ (id item & id player)
    // POST BROWSER COOKIES
    postBrowserCookie('items_acquired', itemsAcquiredId.value as string[])
    console.log('BUG onItemProvided 16') // TEST
  }
};