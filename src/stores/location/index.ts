import { defineStore } from "pinia";
import { readonly } from 'vue';


import { location, locations_found } from './state';
import { getLocationsFound, updateLocation } from './action';


export const useLocationStore = defineStore("Location", () => {
  
  return {
    location: readonly(location),
    locations_found: readonly(locations_found),

    getLocationsFound,
    updateLocation,
  }
})