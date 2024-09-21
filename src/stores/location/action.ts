import { location, locations } from './state';
import type { locationInterface } from './interface';


// PRIVATE


// EXPORT
export function updateLocation(input: locationInterface) {
  location.value = JSON.parse(JSON.stringify(input)) as locationInterface;
  location.value.found = true;
  location.value.found_date = new Date;

  const index = locations.value.findIndex(l => l.id === input.id);
  if (index >= 0 && !locations.value[index].found) {
      locations.value[index].found = true;
      locations.value[index].found_date = new Date;
  }
};