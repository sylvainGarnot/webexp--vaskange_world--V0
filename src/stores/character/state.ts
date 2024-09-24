import { ref } from 'vue';
import type { characterFoundInterface, characterInterface } from './interface';


export const nearByCharacters = ref([] as characterFoundInterface[]);

export const characters_found = ref([] as characterFoundInterface[]);

export const characters = ref([
  {
    id: "1",
    name: "jump-q1",
    dialog: '1',
  },
  {
    id: "2",
    name: "rick 🐝",
    dialog: '2',
  },
  {
    id: "3",
    name: "astro 1",
    dialog: '3',
  },
] as characterInterface[]);