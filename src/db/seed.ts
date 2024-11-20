import {
  createMission,
  createMissionProgress,
  createUser,
} from "./data/generators";
import db from "./index";

export default async function seed() {
  await resetDb();
  const user = await db.user.create({
    data: { username: "Aloush", name: "Ali" },
  });
  const mission = await db.mission.create({
    data: createMission({ reward: 100 }),
  });
  await db.missionProgress.create({
    data: createMissionProgress(user.id, mission.id),
  });
}

function deleteAllUsers() {
  return db.user.deleteMany();
}

function deleteAllMissions() {
  return db.mission.deleteMany();
}
function deleteAllMissionProgress() {
  return db.missionProgress.deleteMany();
}

async function resetDb() {
  await deleteAllMissionProgress();
  await deleteAllMissions();
  await deleteAllUsers();
}
