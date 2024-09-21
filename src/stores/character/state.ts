import { ref } from 'vue';
import type { characterInterface } from './interface';


export const character = ref(null as unknown as characterInterface);
export const characters_found = ref([] as characterInterface[]);