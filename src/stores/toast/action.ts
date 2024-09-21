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
  } else {
    console.error(
      `Le toast avec le message "${value.message}" n'a pas été trouvé et n'a donc pas pu être supprimé`,
    );
  }
};


// EXPORT
export function addToast(message: string, type: string, duration: number) {
  const newToast = {
    id: toasts.value.length,
    timestamp: Date.now(),
    message: message || "",
    type: type || "default",
    duration: duration || null,
  } as ToastInterface;

  if (!duration) {
    if (newToast.type === "success") {
      newToast.duration = 1600 as number;
    } else if (newToast.type === "error") {
      newToast.duration = 3000 as number;
    } else {
      newToast.duration = 1200 as number;
    }
  }
  unshiftToast(newToast as ToastInterface);

  setTimeout(() => {
    removeToast(newToast);
  }, newToast.duration);
};