import { ref } from 'vue';
import type { bookmarkInterface } from './interface';


export const currentBookmark = ref({} as bookmarkInterface);
export const isZoomStarted = ref(false as boolean);
export const zoomIn = ref(true as boolean);
