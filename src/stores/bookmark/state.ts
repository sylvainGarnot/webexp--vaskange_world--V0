import { ref } from 'vue';
import type { bookmarkInterface } from './interface';


export  const currentBookmark = ref({} as bookmarkInterface);
export  const innerBookmarks = ref([] as bookmarkInterface[]);
export  const upperBookmarks = ref([] as bookmarkInterface[]);