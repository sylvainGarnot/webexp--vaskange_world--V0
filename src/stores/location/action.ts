import { location, lastLocation, locations, locations_found } from './state';
import type { locationInterface } from './interface';

import { addToast } from '../toast/action';
import { changeMusicByLocation } from '../music/action';


// PRIVATE
function setLocation(input: locationInterface) {
  lastLocation.value = JSON.parse(JSON.stringify(location.value)) as locationInterface;
  location.value = JSON.parse(JSON.stringify(input)) as locationInterface;
};
function addLocationFound(input: locationInterface) {
  locations_found.value.push(input as locationInterface);
}

// EXPORT
export function onLocationFound(input: locationInterface) {
  if (location?.value?.name !== input.name) {
    console.log('TEST - onLocationFound', input.name); // TEST

    setLocation(input as locationInterface);

    if (!locations_found.value.find(l => l.id === input.id)) {
      addLocationFound(input as locationInterface);
    }

    addToast(location.value.message as string, 'info');
    changeMusicByLocation(location.value as locationInterface);
  }
};