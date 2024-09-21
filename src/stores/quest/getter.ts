import { computed } from 'vue';
import { quests_found } from './state';
import type { QuestInterface } from './interface';


export const numberOfQuestFound = computed(() => {
  return quests_found.value.length as number;
});

export const numberOfQuestPaid = computed(() => {
  return questsPaid.value.length as number;
});

export const numberOfQuestStarted = computed(() => {
  return questsStarted.value.length as number;
});

export const numberOfQuestCompleted = computed(() => {
  return questsCompleted.value.length as number;
});



export const questsPaid = computed(() => {
  let result = [];
  for (let index = 0; index < quests_found.value.length; index++) {
    if (quests_found.value[index].paid) {
      result.push(quests_found.value[index])
    }
  }
  return result as QuestInterface[];
});

export const questsStarted = computed(() => {
  let result = [];
  for (let index = 0; index < quests_found.value.length; index++) {
    if (quests_found.value[index].started) {
      result.push(quests_found.value[index])
    }
  }
  return result as QuestInterface[];
});

export const questsCompleted = computed(() => {
  let result = [];
  for (let index = 0; index < quests_found.value.length; index++) {
    if (quests_found.value[index].completed) {
      result.push(quests_found.value[index])
    }
  }
  return result as QuestInterface[];
});