import { currentLocation, isLocationIsChanging, locations_found, locations } from './state';
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
  console.log('TEST - TRY setCurrentLocation', input.name, isLocationIsChanging.value); // TEST
  if (!isLocationIsChanging.value && input.name !== currentLocation.value.name) {
    console.log('TEST - setCurrentLocation', input.name, isLocationIsChanging.value); // TEST
    isLocationIsChanging.value = true;
    currentLocation.value = input as locationFoundInterface;

    setTimeout(() => {
      addToast(currentLocation.value.message as string);
      changeMusicByLocation();
      isLocationIsChanging.value = false;
    }, 1500);
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

export function setDefaultLocationFound() {
  addLocationFound({
    ...locations.value[19], found_date: new Date()
  } as locationFoundInterface);
  addLocationFound({
    ...locations.value[16], found_date: new Date()
  } as locationFoundInterface);
  addLocationFound({
    ...locations.value[0], found_date: new Date()
  } as locationFoundInterface);
}