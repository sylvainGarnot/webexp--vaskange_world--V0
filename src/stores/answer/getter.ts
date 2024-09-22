import { computed } from 'vue';
import { answers } from './state';
import type { answerInterface } from './interface';
import { dialog } from '../dialog/getter';


export const dialog_answers = computed(() => {
  if (dialog?.value?.answers) {
    return answers.value.filter((a) => dialog?.value?.answers.includes(a.id)) as answerInterface[];
  }
  return [];
})
