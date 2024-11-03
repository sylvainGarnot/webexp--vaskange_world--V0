import { currentLocation, isLocationIsChanging, isLocationEndReach, locations_found, locations } from './state';
import type { locationInterface, locationFoundInterface } from './interface';

import { addToast } from '../toast/action';
import { changeMusicByLocation } from '../music/action';

import { characters } from '../character/state';
import { dialogs } from '../dialog/state';
import { items, items_acquired } from '../item/state';

import { currentBookmark, zoomIn } from '../bookmark/state';
import { setCurrentBookmark, setZoomIn } from '../bookmark/action';
import type { bookmarkInterface } from '../bookmark/interface';


// PRIVATE
function addLocationFound(input: locationFoundInterface) {
  console.log('TEST - addLocationFound', input.name); // TEST
  locations_found.value.push(input as locationFoundInterface);
}

// EXPORT
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

export function onLocationFound(input: locationInterface) {

  // Request POST /location_found/ (id location & id player)
  
  const locationFound = {
    ...input,
    found_date: new Date(),
    nbrItemsToAcquired: 0,
    nbrItemsAcquired: 0,
  } as locationFoundInterface;

  if (!locations_found.value.find(l => l.id === locationFound.id)) {

    for (let j = 0; j < characters.value.length; j++) {
      const character = characters.value[j];
      if (character?.location === locationFound?.id) {

        const dialog = dialogs.value.find(d => d.id === character?.dialog)
        if (dialog && dialog.item_provided) {

          const item = items.value.find(it => it.id === dialog.item_provided)
          if (item) {
            locationFound.nbrItemsToAcquired++

            const itemAcquired = items_acquired.value.find(it => it.id === item?.id)
            if (itemAcquired) {
              locationFound.nbrItemsAcquired++
            }
          }
        }
      }
    }

    addLocationFound(locationFound as locationFoundInterface);
  }

  setCurrentLocation(locationFound as locationFoundInterface);
};

export function setDefaultLocationFound() {
  // DEFAULT VALUES
  onLocationFound(locations.value[0] as locationFoundInterface);
  // onLocationFound(locations.value[19] as locationFoundInterface);
  // onLocationFound(locations.value[16] as locationFoundInterface);
}

export function setIsLocationEndReach(input: boolean) {
  console.log('TEST setIsLocationEndReach', input) // TEST
  isLocationEndReach.value = input;
}

export function onLocationEndReach(inputBookmarks: bookmarkInterface[]) {
  console.log('TEST onLocationEndReach'); // TEST

  
  // SET ZOOMIN
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