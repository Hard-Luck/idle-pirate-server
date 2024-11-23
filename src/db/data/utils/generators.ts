function generateId(str: string): () => string {
  let counter = 1;
  return () => str + counter++;
}

export const generateUserId = generateId("test-user-");
export const generateItemId = generateId("test-item-");
export const generateQuestId = generateId("test-quest-");
export const generateQuestRewardId = generateId("test-quest-reward-");
export const generateQuestRequirementId = generateId("test-quest-requirement-");
export const generateQuestRewardItemId = generateId("test-quest-reward-item-");
export const generateQuestRequirementItemId = generateId(
  "test-quest-requirement-item-"
);
export const generateShipId = generateId("test-ship-");
export const generateUserShipId = generateId("test-user-ship-");
