import { ref } from 'vue';
import type { answerInterface } from './interface';

export const answers = ref([
  {
    id: '0',
    speech_writen: 'Merci, bye',
    type: 'leave',
  },
  {
    id: '1',
    speech_writen: 'Peux tu répéter ?',
    type: 'repeat',
  },
] as answerInterface[]);