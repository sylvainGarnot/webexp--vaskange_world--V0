import { currentLocation, locations_found } from './state';
import type { locationInterface, locationFoundInterface } from './interface';


// PRIVATE
function addLocationFound(input: locationFoundInterface) {
  // console.log('TEST - addLocationFound', input.name); // TEST
  locations_found.value.push(input as locationFoundInterface);
}


// EXPORT - SETTER
export function setCurrentLocation(input: locationFoundInterface) {
  // console.log('TEST - TRY setCurrentLocation', input.name, isLocationIsChanging.value); // TEST
  // if (!isLocationIsChanging.value && input.name !== currentLocation.value.name) {
    // console.log('TEST - setCurrentLocation', input.name, isLocationIsChanging.value); // TEST
    // isLocationIsChanging.value = true;
    currentLocation.value = input as locationFoundInterface;

    // setTimeout(() => {
    //   addToast(currentLocation.value.message as string);
    //   changeMusicByLocation();
    //   isLocationIsChanging.value = false;
    // }, 800);
  // }
};


// EXPORT - EVENTS
export function onLocationFound(input: locationInterface, modePost:boolean=true) {
  
  const locationFound = {
    ...input,
    found_date: new Date(),
    itemsAcquired: [],
    itemsToAcquired: [],
  } as locationFoundInterface;

  if (!locations_found.value.find(l => l.id === locationFound.id)) {
    addLocationFound(locationFound as locationFoundInterface);
  }
  setCurrentLocation(locationFound as locationFoundInterface);
};