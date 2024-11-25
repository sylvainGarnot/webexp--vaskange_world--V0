import { currentLocation, isLocationIsChanging, isLocationEndReach, locations_found, locations } from './state';
import type { locationInterface, locationFoundInterface } from './interface';

import { addToast } from '../toast/action';
import { changeMusicByLocation } from '../music/action';

import { characters } from '../character/state';
import { dialogs } from '../dialog/state';
import { items, items_acquired } from '../item/state';
import { locationsFoundId } from './getter';

import { currentBookmark, zoomIn } from '../bookmark/state';
import { setCurrentBookmark, setZoomIn } from '../bookmark/action';
import type { bookmarkInterface } from '../bookmark/interface';

import { postBrowserCookie } from '../setting/action';
import { cookies } from '../setting/state';
import type { cookieInterface } from '../setting/interface';


// PRIVATE
function addLocationFound(input: locationFoundInterface) {
  console.log('TEST - addLocationFound', input.name); // TEST
  locations_found.value.push(input as locationFoundInterface);
}


// EXPORT - SETTER
export function setCurrentLocation(input: locationFoundInterface) {
  console.log('TEST - TRY setCurrentLocation', input.name, isLocationIsChanging.value); // TEST
  if (!isLocationIsChanging.value && input.name !== currentLocation.value.name) {
    console.log('TEST - setCurrentLocation', input.name, isLocationIsChanging.value); // TEST
    isLocationIsChanging.value = true;
    currentLocation.value = input as locationFoundInterface;

    setTimeout(() => {
      addToast(currentLocation.value.message as string);
      changeMusicByLocation();
      isLocationIsChanging.value = false;
    }, 800);
  }
};

export function setDefaultLocationFound() {
  onLocationFound(locations.value[1] as locationFoundInterface);
}

export function setLocationFoundFromCookies() {
  const cookieLocationsFound = cookies.value.find(c => c.key === 'locations_found') as cookieInterface
  if (cookieLocationsFound) {
    
    const cookieLocationsFoundIds = cookieLocationsFound.values as string[]
    if (cookieLocationsFoundIds && cookieLocationsFoundIds.length > 0) {
      for (let index = 0; index < cookieLocationsFoundIds.length; index++) {
        const location = locations.value.find(l => l.id === cookieLocationsFoundIds[index]) as locationInterface
        if (location) {
          onLocationFound(location as locationInterface, false)
        }
      }
    }
  }
}

export function setIsLocationEndReach(input: boolean) {
  console.log('TEST setIsLocationEndReach', input) // TEST
  isLocationEndReach.value = input;
}


// EXPORT - EVENTS
export function onLocationEndReach(inputBookmarks: bookmarkInterface[]) {
  console.log('TEST onLocationEndReach'); // TEST

  inputBookmarks = inputBookmarks.sort((a, b) => b.zoomFactor - a.zoomFactor);
  const closestInputBookmark = inputBookmarks[0] as bookmarkInterface;
  if (closestInputBookmark?.zoomFactor) {
    if (currentBookmark?.value?.zoomFactor) {
      if (closestInputBookmark.zoomFactor < currentBookmark.value.zoomFactor) {
        setZoomIn(true);
      } else {
        setZoomIn(false);
      }
    }
    setCurrentBookmark(closestInputBookmark as bookmarkInterface);
  }

  if (!isLocationEndReach.value && !zoomIn.value) {
    setIsLocationEndReach(true);
  }
}

export function onLocationFound(input: locationInterface, modePost:boolean=true) {
  
  const locationFound = {
    ...input,
    found_date: new Date(),
    itemsAcquired: [],
    itemsToAcquired: [],
  } as locationFoundInterface;

  if (!locations_found.value.find(l => l.id === locationFound.id)) {

    for (let j = 0; j < characters.value.length; j++) {
      const character = characters.value[j];
      if (character?.location === locationFound?.id) {

        const dialog = dialogs.value.find(d => d.id === character?.dialog)
        if (dialog && dialog.item_provided) {

          const item = items.value.find(it => it.id === dialog.item_provided)
          if (item) {
            locationFound.itemsToAcquired.push(item.id)

            const itemAcquired = items_acquired.value.find(it => it.id === item?.id)
            if (itemAcquired) {
              locationFound.itemsAcquired.push(item.id)
            }
          }
        }
      }
    }

    addLocationFound(locationFound as locationFoundInterface);
  }

  setCurrentLocation(locationFound as locationFoundInterface);

  if (modePost) {
    // Request POST /location_found/ (id location & id player)
    // POST BROWSER COOKIES
    postBrowserCookie('locations_found', locationsFoundId.value as string[])
  }
};