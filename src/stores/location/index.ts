import { defineStore } from "pinia";
import { readonly } from 'vue';


import { location, lastLocation, locations } from './state';
import { onLocationFound } from './action';


export const useLocationStore = defineStore("Location", () => {
  
  return {
    location: readonly(location),
    lastLocation: readonly(lastLocation),
    locations: readonly(locations),

    onLocationFound,
  }
})