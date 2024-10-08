import { defineStore } from "pinia";
import { readonly } from 'vue';


// import { currentLocation, isLocationIsChanging, locations_found, locations } from './state';
import { locations_found, locations } from './state';
import { locationsName, locationsFoundProgression } from './getter';
import { setCurrentLocation, onLocationFound, setDefaultLocationFound } from './action';


export const useLocationStore = defineStore("Location", () => {
  
  return {
    // currentLocation: readonly(currentLocation),
    // isLocationIsChanging: readonly(isLocationIsChanging),
    locations: readonly(locations),
    locations_found: readonly(locations_found),

    locationsName: readonly(locationsName),
    locationsFoundProgression: readonly(locationsFoundProgression),
    
    setCurrentLocation,
    onLocationFound,
    setDefaultLocationFound,
  }
})