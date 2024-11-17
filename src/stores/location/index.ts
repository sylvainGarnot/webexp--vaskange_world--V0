import { defineStore } from "pinia";
import { readonly } from 'vue';


// import { currentLocation, locations_found, locations, isLocationEndReach, locationEndName, isLocationIsChanging } from './state'; // TEST
import { currentLocation, locations_found, locations, isLocationEndReach, locationEndName } from './state';
import { locationsName, locationsFoundId, theHiddenPlace, isTheHiddenPlaceFound } from './getter';
import { setCurrentLocation, onLocationFound, setDefaultLocationFound, onLocationEndReach, setIsLocationEndReach, setLocationFoundFromCookies } from './action';


export const useLocationStore = defineStore("Location", () => {
  
  return {
    currentLocation: readonly(currentLocation),
    locations_found: readonly(locations_found),
    locations: readonly(locations),
    isLocationEndReach: readonly(isLocationEndReach),
    locationEndName: readonly(locationEndName),
    // isLocationIsChanging: readonly(isLocationIsChanging),

    locationsName: readonly(locationsName),
    locationsFoundId: readonly(locationsFoundId),
    theHiddenPlace: readonly(theHiddenPlace),
    isTheHiddenPlaceFound: readonly(isTheHiddenPlaceFound),
    
    setCurrentLocation,
    onLocationFound,
    setDefaultLocationFound,
    onLocationEndReach,
    setIsLocationEndReach,
    setLocationFoundFromCookies,
  }
})