import { ref } from 'vue';
import type { locationFoundInterface } from './interface';

export const currentLocation = ref({} as locationFoundInterface);
export const locations_found = ref([] as locationFoundInterface[]);

