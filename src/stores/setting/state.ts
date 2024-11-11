import { ref } from 'vue';
import type { cookieInterface } from './interface';

export const isFullscreen = ref(false as boolean);

export const cookies = ref([] as cookieInterface[])