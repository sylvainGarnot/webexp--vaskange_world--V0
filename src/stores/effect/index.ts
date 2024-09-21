import { defineStore } from "pinia";
import { readonly } from 'vue';


import { effect, effectVolume } from './state';
import { effectSrc } from './getter';
import { setEffectVolume, playEffect } from './action';


export const useEffectStore = defineStore("effect", () => {
  
  return {
    effect: readonly(effect),
    effectVolume: readonly(effectVolume),

    effectSrc: readonly(effectSrc),
    
    setEffectVolume,
    playEffect,
  }
})