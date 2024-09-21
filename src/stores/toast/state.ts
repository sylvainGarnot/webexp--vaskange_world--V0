import { ref } from 'vue';
import type { ToastInterface } from './interface';

export const toasts = ref([] as ToastInterface[]);
