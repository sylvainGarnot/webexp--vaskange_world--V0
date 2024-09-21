import { ref } from 'vue';

export const isActive = ref(false as boolean);
export const dialogs = ref([
    'Lorem ipsum dolor sit amet elit.',
    'Libero ab vero perferendis molestias ut dicta hic maxime',
    'voluptate iste minus facilis nobis?'] as string[]);
export const responses = ref([
    'Yes ! Let s go !!',
    'Tu peux répéter ?',
    'Bof ça ne m intéresse pas, bye'] as string[]);
export const author = ref('Astro' as string);
export const stepNumber = ref(0 as number);
export const image = ref('nonnonon' as string);

// export const dialogs = ref([] as string[]);
// export const author = ref('' as string);
// export const stepNumber = ref(0 as number);
// export const image = ref('' as string);
