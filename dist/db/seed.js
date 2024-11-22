"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = seed;
const generators_1 = require("./data/generators");
const index_1 = __importDefault(require("./index"));
const intro_quest_1 = require("./data/quests/intro-quest");
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield resetDb();
        const user = yield index_1.default.user.create({
            data: {
                username: "Aloush",
                name: "Ali",
                UserShip: {
                    create: {
                        ship: {
                            create: (0, generators_1.createShip)({ cost: 0, name: "Base Ship", isDefault: true }),
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
        yield index_1.default.quest.create({
            data: intro_quest_1.quest,
        });
        yield index_1.default.questProgress.create({
            data: (0, generators_1.createQuestProgress)(user.id, intro_quest_1.quest.id),
        });
        yield index_1.default.questStage.create({
            data: Object.assign(Object.assign({}, intro_quest_1.questStage), { quest: { connect: { id: intro_quest_1.quest.id } } }),
        });
        yield index_1.default.questStageOption.createMany({
            data: intro_quest_1.questStageOptions.map((option) => (Object.assign(Object.assign({}, option), { questStageId: intro_quest_1.questStage.id }))),
        });
    });
}
function deleteAllUsers() {
    return index_1.default.user.deleteMany();
}
function deleteAllQuests() {
    return index_1.default.quest.deleteMany();
}
function deleteAllQuestProgress() {
    return index_1.default.questProgress.deleteMany();
}
function deleteAllQuestStages() {
    return index_1.default.questStage.deleteMany();
}
function deleteAllQuestStageOptions() {
    return index_1.default.questStageOption.deleteMany();
}
function deleteAllShips() {
    return index_1.default.ship.deleteMany();
}
function resetDb() {
    return __awaiter(this, void 0, void 0, function* () {
        yield deleteAllQuestProgress();
        yield deleteAllQuests();
        yield deleteAllUsers();
        yield deleteAllQuestStages();
        yield deleteAllQuestStageOptions();
        yield deleteAllShips();
    });
}
