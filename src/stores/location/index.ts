import { defineStore } from "pinia";
import { readonly } from 'vue';


import { currentLocation, lastCurrentLocation, locations_found, locations } from './state';
import { setCurrentLocation, onLocationFound } from './action';


export const useLocationStore = defineStore("Location", () => {
  
  return {
    currentLocation: readonly(currentLocation),
    lastCurrentLocation: readonly(lastCurrentLocation),
    locations: readonly(locations),
    locations_found: readonly(locations_found),

    setCurrentLocation,
    onLocationFound,
  }
})