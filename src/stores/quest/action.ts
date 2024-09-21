import type { QuestInterface } from './interface';
import { quests_found } from './state';


// PRIVATE


// EXPORT
export function getQuestFound(input: number) {
  // GET Quest by id
  const quest = {
    id: '',
    name: '',
    difficulty: 0,
    creation: new Date,
    image: '',
    paid: new Date,
    started: new Date,
    completed: new Date,
  }
  quests_found.value.push(quest as QuestInterface);
};

export function paidQuest(input: string) {
  const index = quests_found.value.findIndex(q => q.id === input) as number;
  quests_found.value[index].paid = new Date;
};

export function startQuest(input: string) {
  const index = quests_found.value.findIndex(q => q.id === input) as number;
  quests_found.value[index].started = new Date;
};

export function completeQuest(input: string) {
  const index = quests_found.value.findIndex(q => q.id === input) as number;
  quests_found.value[index].completed = new Date;
};