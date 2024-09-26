import { ref } from 'vue';
import type { bookmarkInterface } from './interface';


export  const currentBookmark = ref({} as bookmarkInterface);
export  const currentBookmarkStep3B = ref(false as boolean);
export  const innerBookmarks = ref([] as bookmarkInterface[]);
export  const upperBookmarks = ref([] as bookmarkInterface[]);