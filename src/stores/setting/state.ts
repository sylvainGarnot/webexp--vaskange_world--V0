import { ref } from 'vue';
import type { cookieInterface } from './interface';

export const isFullscreen = ref(false as boolean);

export const cookies = ref([] as cookieInterface[])

export const cookiesKey = ref([
    'locations_found',
    'characters_found',
    'items_acquired'
] as string[])