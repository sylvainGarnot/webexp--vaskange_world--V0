import { defineStore } from "pinia";
import { readonly } from 'vue';


import { currentLocation, isLocationIsChanging, locations_found, locations } from './state';
import { locationsName } from './getter';
import { setCurrentLocation, onLocationFound } from './action';


export const useLocationStore = defineStore("Location", () => {
  
  return {
    currentLocation: readonly(currentLocation),
    locations: readonly(locations),
    locations_found: readonly(locations_found),
    isLocationIsChanging: readonly(isLocationIsChanging),

    locationsName: readonly(locationsName),
    
    setCurrentLocation,
    onLocationFound,
  }
})