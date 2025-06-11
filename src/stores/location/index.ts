import { defineStore } from "pinia";
import { readonly } from 'vue';


import { currentLocation, locations_found } from './state';
import { setCurrentLocation, onLocationFound } from './action';


export const useLocationStore = defineStore("Location", () => {
  
  return {
    currentLocation: readonly(currentLocation),
    locations_found: readonly(locations_found),
    
    setCurrentLocation,
    onLocationFound,
  }
})