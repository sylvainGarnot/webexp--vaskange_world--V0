import { ref } from 'vue';
import type { bookmarkInterface } from './interface';


export  const currentBookmark = ref({} as bookmarkInterface);
export  const zoomIn = ref(false as boolean);
export  const innerBookmarks = ref([] as bookmarkInterface[]);
export  const upperBookmarks = ref([] as bookmarkInterface[]);