import { defineStore } from "pinia";
import { readonly } from 'vue';


import { location, lastLocation, locations_found, locations } from './state';
import { onLocationFound } from './action';


export const useLocationStore = defineStore("Location", () => {
  
  return {
    location: readonly(location),
    lastLocation: readonly(lastLocation),
    locations: readonly(locations),
    locations_found: readonly(locations_found),

    onLocationFound,
  }
})