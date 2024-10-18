import { currentLocation, isLocationIsChanging, locations_found, locations, locationEndReach } from './state';
import type { locationInterface, locationFoundInterface } from './interface';

import { addToast } from '../toast/action';
import { changeMusicByLocation } from '../music/action';

import { characters } from '../character/state';
import { dialogs } from '../dialog/state';
import { items, items_acquired } from '../item/state';


// PRIVATE
function addLocationFound(input: locationFoundInterface) {
  console.log('TEST - addLocationFound', input.name); // TEST
  locations_found.value.push(input as locationFoundInterface);
}

function setLocationEndReach(input: boolean) {
  locationEndReach.value = input;
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
  onLocationFound(locations.value[19] as locationFoundInterface);
  onLocationFound(locations.value[16] as locationFoundInterface);
  onLocationFound(locations.value[0] as locationFoundInterface);
}

export function onLocationEndReach() {
  // console.log('TEST onLocationEndReach'); // TEST
  setLocationEndReach(true);
}