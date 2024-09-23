import { location, lastLocation, locations, locations_found } from './state';
import type { locationInterface } from './interface';

import { addToast } from '../toast/action';
import { changeMusicByLocation } from '../music/action';


// PRIVATE
function setLocation(input: locationInterface) {
  lastLocation.value = location.value as locationInterface;
  location.value = input as locationInterface;
};
function addLocationFound(input: locationInterface) {
  locations_found.value.push(input as locationInterface);
}

// EXPORT
export function onLocationFound(input: locationInterface) {
  if (location?.value?.name !== input.name) {
    console.log('TEST - onLocationFound', input.name); // TEST

    if (!locations_found.value.find(l => l.id === input.id)) {
      input.found_date = new Date();
      addLocationFound(input as locationInterface);
    }

    setLocation(input as locationInterface);

    addToast(location.value.message as string, 'info');
    changeMusicByLocation(location.value as locationInterface);
  }
};