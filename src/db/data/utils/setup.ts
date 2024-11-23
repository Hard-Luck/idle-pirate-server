import db from "../..";

export async function resetDb() {
  await db.user.deleteMany();
  await db.ship.deleteMany();
  await db.item.deleteMany();
  await db.quest.deleteMany();
  await db.questReward.deleteMany();
  await db.questRequirement.deleteMany();
  await db.questRewardItem.deleteMany();
  await db.questRequirementItem.deleteMany();
  await db.userShip.deleteMany();
}
