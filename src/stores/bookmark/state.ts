import { ref } from 'vue';
import type { bookmarkInterface } from './interface';


export  const bookmark = ref(null as unknown as bookmarkInterface);
export  const lastBookmark = ref(null as unknown as bookmarkInterface);
export  const innerBookmarks = ref([] as bookmarkInterface[]);
export  const upperBookmarks = ref([] as bookmarkInterface[]);