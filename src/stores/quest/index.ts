import { defineStore } from "pinia";
import { readonly } from 'vue';


import { quests_found } from './state';
import { numberOfQuestFound, numberOfQuestPaid, numberOfQuestStarted, numberOfQuestCompleted, questsPaid, questsStarted, questsCompleted } from './getter';
import { getQuestFound, paidQuest, startQuest, completeQuest } from './action';


export const useDialogStore = defineStore("dialog", () => {

  return {
    quests_found: readonly(quests_found),

    numberOfQuestFound: readonly(numberOfQuestFound),
    numberOfQuestPaid: readonly(numberOfQuestPaid),
    numberOfQuestStarted: readonly(numberOfQuestStarted),
    numberOfQuestCompleted: readonly(numberOfQuestCompleted),

    questsPaid: readonly(questsPaid),
    questsStarted: readonly(questsStarted),
    questsCompleted: readonly(questsCompleted),

    getQuestFound,
    paidQuest,
    startQuest,
    completeQuest,
  }
});
