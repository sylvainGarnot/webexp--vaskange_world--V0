import { ref } from 'vue';

export const currentMusic = ref(new Audio as HTMLAudioElement);
export const currentMusicName = ref('' as string);
export const isMusicPlaying = ref(false as boolean);
export const lastMusic = ref(new Audio as HTMLAudioElement);
export const musicCaches = ref([] as HTMLAudioElement[]);
