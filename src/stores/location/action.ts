import { location, lastLocation, locations } from './state';
import type { locationInterface } from './interface';

import { changeMusicByLocation } from '../music/action';


// PRIVATE


// EXPORT
export function updateLocation(input: locationInterface) {
  lastLocation.value = JSON.parse(JSON.stringify(location.value)) as locationInterface;

  location.value = JSON.parse(JSON.stringify(input)) as locationInterface;
  location.value.found = true;
  location.value.found_date = new Date;

  changeMusicByLocation(location.value as locationInterface);

  const index = locations.value.findIndex(l => l.id === input.id);
  if (index >= 0 && !locations.value[index].found) {
      locations.value[index].found = true;
      locations.value[index].found_date = new Date;
  }
};