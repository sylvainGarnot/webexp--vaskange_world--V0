import { ref } from 'vue';

export const effect = ref(new Audio as HTMLAudioElement);
export const effectVolume = ref(0.5 as number);
export const isEffectPlaying = ref(false as boolean);