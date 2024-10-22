import { defineStore } from "pinia";
import { readonly } from 'vue';


// import { currentLocation, isLocationIsChanging, locations_found, locations } from './state';
import { currentLocation, locations_found, locations, isLocationEndReach } from './state';
import { locationsName, theHiddenPlace, isTheHiddenPlaceFound } from './getter';
import { setCurrentLocation, onLocationFound, setDefaultLocationFound, onLocationEndReach, setIsLocationEndReach } from './action';


export const useLocationStore = defineStore("Location", () => {
  
  return {
    currentLocation: readonly(currentLocation),
    // isLocationIsChanging: readonly(isLocationIsChanging),
    isLocationEndReach: readonly(isLocationEndReach),
    locations: readonly(locations),
    locations_found: readonly(locations_found),

    locationsName: readonly(locationsName),
    theHiddenPlace: readonly(theHiddenPlace),
    isTheHiddenPlaceFound: readonly(isTheHiddenPlaceFound),
    
    setCurrentLocation,
    onLocationFound,
    setDefaultLocationFound,
    onLocationEndReach,
    setIsLocationEndReach,
  }
})