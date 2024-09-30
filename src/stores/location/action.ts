import { currentLocation, lastCurrentLocation, isLocationIsChanging, locations_found } from './state';
import type { locationInterface, locationFoundInterface } from './interface';

import { addToast } from '../toast/action';
import { changeMusicByLocation } from '../music/action';


// PRIVATE
function addLocationFound(input: locationFoundInterface) {
  console.log('TEST - addLocationFound', input.name); // TEST
  locations_found.value.push(input as locationFoundInterface);
}

// EXPORT
export function setCurrentLocation(input: locationFoundInterface) {
  if (!isLocationIsChanging.value && input.name !== currentLocation.value.name) {
    isLocationIsChanging.value = true;
    setTimeout(() => {
      console.log('TEST - setCurrentLocation', input.name); // TEST
      lastCurrentLocation.value = currentLocation.value as locationFoundInterface;
      currentLocation.value = input as locationFoundInterface;

      addToast(input.message as string, 'info');
      changeMusicByLocation();
      isLocationIsChanging.value = false;
    }, 500);
  }
};

export function onLocationFound(input: locationInterface) {

  // Request POST /location_found/ (id location & id player)
  
  const locationFound = {
    ...input,
    found_date: new Date()
  } as locationFoundInterface;

  if (!locations_found.value.find(l => l.id === locationFound.id)) {
    addLocationFound(locationFound as locationFoundInterface);
  }

  setCurrentLocation(locationFound as locationFoundInterface);
};