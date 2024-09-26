import { currentLocation, lastCurrentLocation, locations_found } from './state';
import type { locationInterface, locationFoundInterface } from './interface';

import { addToast } from '../toast/action';
import { changeMusicByLocation } from '../music/action';


// PRIVATE
function addLocationFound(input: locationFoundInterface) {
  console.log('TEST - addLocationFound', input.name); // TEST
  locations_found.value.push(input as locationFoundInterface);

  addToast(input.message as string, 'info');
  changeMusicByLocation();
}

// EXPORT
export function setCurrentLocation(input: locationFoundInterface) {
  console.log('TEST - setCurrentLocation', input.name); // TEST
  lastCurrentLocation.value = currentLocation.value as locationFoundInterface;
  currentLocation.value = input as locationFoundInterface;
};

export function onLocationFound(input: locationInterface) {

  const locationFound = {
    ...input,
    found_date: new Date()
  } as locationFoundInterface;

  if (!locations_found.value.find(l => l.id === input.id)) {
    addLocationFound(locationFound as locationFoundInterface);
  }

  setCurrentLocation(locationFound as locationFoundInterface);
};