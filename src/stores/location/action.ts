import { location, lastLocation, locations } from './state';
import type { locationInterface } from './interface';

import { addToast } from '../toast/action';
import { changeMusicByLocation } from '../music/action';


// PRIVATE


// EXPORT
export function updateLocation(input: locationInterface) {
  if (location?.value?.name !== input.name) {
    lastLocation.value = JSON.parse(JSON.stringify(location.value)) as locationInterface;

    location.value = JSON.parse(JSON.stringify(input)) as locationInterface;
    location.value.found = true;
    location.value.found_date = new Date;

    const index = locations.value.findIndex(l => l.id === input.id);
    if (index >= 0 && !locations.value[index].found) {
      locations.value[index].found = true;
      locations.value[index].found_date = new Date;
    }
    console.log('TEST - Location', location.value.name); // TEST

    addToast(location.value.message as string, 'info');
    changeMusicByLocation(location.value as locationInterface);
  }
};