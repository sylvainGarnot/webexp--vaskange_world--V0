import { ref } from 'vue';
import type { characterInterface } from './interface';


export const character = ref(null as unknown as characterInterface);
export const characters = ref([
  {
    id: "9",
    name: "jump-q1",
    found_date: new Date,
    dialog: '1',
  },
  {
    id: "9",
    name: "rick 🐝",
    found_date: new Date,
    dialog: '1',
  },
  {
    id: "9",
    name: "astro 1",
    found_date: new Date,
    dialog: '1',
  },
] as characterInterface[]);