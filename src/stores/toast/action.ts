import { toasts } from './state';
import type { ToastInterface } from './interface';


// PRIVATE
function setToasts(value: ToastInterface[]) {
  toasts.value = value as ToastInterface[];
};

function unshiftToast(value: ToastInterface) {
  const newToasts = Array.from(toasts.value) as ToastInterface[];
  newToasts.unshift(value as ToastInterface);
  setToasts(newToasts as ToastInterface[]);
};

function removeToast(value: ToastInterface) {
  const newToasts = Array.from(toasts.value) as ToastInterface[];
  const indexToDelete = newToasts.findIndex(toast => toast.id === value.id) as number;
  if (indexToDelete > -1) {
    newToasts.splice(indexToDelete, 1);
    setToasts(newToasts as ToastInterface[]);
  }
};


// EXPORT
export function addToast(message: string) {
  const newToast = {
    id: toasts.value.length,
    timestamp: Date.now(),
    message: message,
    duration: 2400,
  } as ToastInterface;
  
  unshiftToast(newToast as ToastInterface);
  setTimeout(() => {
    removeToast(newToast);
  }, newToast.duration);
};