import {
  createQuest,
  createQuestProgress,
  createShip,
} from "./data/generators";
import db from "./index";
import {
  quest,
  questStage,
  questStageOptions,
} from "./data/quests/intro-quest";

export default async function seed() {
  await resetDb();
  const user = await db.user.create({
    data: {
      username: "Aloush",
      name: "Ali",
      UserShip: {
        create: {
          ship: {
            create: createShip({ cost: 0, name: "Base Ship", isDefault: true }),
          },
        },
      },
      Stats: {
        create: {
          gold: 100,
          level: 1,
        },
      },
    },
  });
  await db.quest.create({
    data: quest,
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
function deleteAllQuestStages() {
  return db.questStage.deleteMany();
}
function deleteAllQuestStageOptions() {
  return db.questStageOption.deleteMany();
}
function deleteAllShips() {
  return db.ship.deleteMany();
}

async function resetDb() {
  await deleteAllQuestProgress();
  await deleteAllQuests();
  await deleteAllUsers();
  await deleteAllQuestStages();
  await deleteAllQuestStageOptions();
  await deleteAllShips();
}
