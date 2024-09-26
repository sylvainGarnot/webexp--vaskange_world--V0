import { computed } from 'vue';
import { answers } from './state';
import type { answerInterface } from './interface';
import { currentDialog } from '../dialog/getter';


export const currentDialog_answers = computed(() => {
  if (currentDialog?.value?.answers) {
    return answers.value.filter((a) => currentDialog?.value?.answers.includes(a.id)) as answerInterface[];
  }
  return [];
})
