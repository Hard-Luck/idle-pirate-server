"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questStageOptions = exports.questStage = exports.quest = void 0;
exports.quest = {
    id: "introQuest1",
    name: "Setting Sail",
    description: "Prepare your ship and crew for your first voyage as a pirate captain.",
    requiredLevel: 1,
    reward: 10,
    difficulty: 1,
    isActive: true,
    numberOfStages: 1,
    successText: "You have successfully prepared your ship and crew for the journey. You are now ready to set sail and begin your adventure as a pirate captain. You collect your 10 gold",
};
exports.questStage = {
    id: "stage1",
    stageNumber: 1,
    text: "Gather supplies and make sure your ship is seaworthy before setting sail.",
    completed: false,
};
exports.questStageOptions = [
    {
        id: "option1",
        description: "Inspect the ship for damage and repair any weak points.",
        scores: 10,
    },
    {
        id: "option2",
        description: "Stock up on food and water for the journey.",
        scores: 10,
    },
    {
        id: "option3",
        description: "Recruit a few experienced sailors to join your crew.",
        scores: 10,
    },
    {
        id: "option4",
        description: "Ignore preparation and set sail immediately to save time.",
        scores: -100,
    },
];
