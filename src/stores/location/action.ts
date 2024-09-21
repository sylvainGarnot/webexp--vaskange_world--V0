import { location, locations_found } from './state';
import type { locationInterface } from './interface';


// PRIVATE


// EXPORT
export function getLocationsFound() {
  // GET LOCATIONS FOUND
  // const response = { }
  // locations_found.value = response;
}

export function updateLocation(input: locationInterface) {
  location.value = input as locationInterface;
  if (!locations_found.value.find(l => l.id === input.id)) {
    // POST new location_found with input
    // Then :
    locations_found.value.push(input as locationInterface);
  }
};