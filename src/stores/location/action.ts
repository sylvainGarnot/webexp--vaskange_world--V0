import { location, lastLocation, locations_found } from './state';
import type { locationInterface, locationFoundInterface } from './interface';

import { addToast } from '../toast/action';
import { changeMusicByLocation } from '../music/action';


// PRIVATE
function setLocation(input: locationFoundInterface) {
  lastLocation.value = location.value as locationFoundInterface;
  location.value = input as locationFoundInterface;
};
function addLocationFound(input: locationFoundInterface) {
  locations_found.value.push(input as locationFoundInterface);
}

// EXPORT
export function onLocationFound(input: locationInterface) {
  if (location?.value?.name !== input.name) {
    console.log('TEST - onLocationFound', input.name); // TEST

    const locationFound = {
      ...input,
      found_date: new Date()
    } as locationFoundInterface;

    if (!locations_found.value.find(l => l.id === input.id)) {
      addLocationFound(locationFound as locationFoundInterface);
    }

    setLocation(locationFound as locationFoundInterface);

    addToast(input.message as string, 'info');
    changeMusicByLocation();
  }
};