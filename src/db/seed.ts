import { createQuest, createQuestProgress } from "./data/generators";
import db from "./index";
import {
  quest,
  questStage,
  questStageOptions,
} from "./data/quests/intro-quest";

export default async function seed() {
  await resetDb();
  const user = await db.user.create({
    data: { username: "Aloush", name: "Ali" },
  });
  const quest = await db.quest.create({
    data: createQuest({ reward: 100 }),
  });
  await db.questProgress.create({
    data: createQuestProgress(user.id, quest.id),
  });
  await db.questStage.create({
    data: {
      ...questStage,
      quest: { connect: { id: quest.id } },
    },
  });
  await db.questStageOption.createMany({
    data: questStageOptions.map((option) => ({
      ...option,
      questStageId: questStage.id,
    })),
  });
}

function deleteAllUsers() {
  return db.user.deleteMany();
}

function deleteAllQuests() {
  return db.quest.deleteMany();
}
function deleteAllQuestProgress() {
  return db.questProgress.deleteMany();
}

async function resetDb() {
  await deleteAllQuestProgress();
  await deleteAllQuests();
  await deleteAllUsers();
}
