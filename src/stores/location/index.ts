import { defineStore } from "pinia";
import { readonly } from 'vue';


import { location, lastLocation, locations } from './state';
import { updateLocation } from './action';


export const useLocationStore = defineStore("Location", () => {
  
  return {
    location: readonly(location),
    lastLocation: readonly(lastLocation),
    locations: readonly(locations),

    updateLocation,
  }
})