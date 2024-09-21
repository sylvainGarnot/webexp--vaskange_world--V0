import { defineStore } from "pinia";
import { readonly } from 'vue';


import { location, locations } from './state';
import { updateLocation } from './action';


export const useLocationStore = defineStore("Location", () => {
  
  return {
    location: readonly(location),
    locations: readonly(locations),

    updateLocation,
  }
})