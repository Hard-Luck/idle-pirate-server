"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.createQuest = createQuest;
exports.createQuestProgress = createQuestProgress;
exports.createShip = createShip;
const faker_1 = require("@faker-js/faker");
function createUser(overrides = {}) {
    return Object.assign({ username: faker_1.faker.internet.username(), name: faker_1.faker.person.fullName() }, overrides);
}
function createQuest(overRides = {}) {
    return Object.assign({ name: faker_1.faker.lorem.words(3), description: faker_1.faker.lorem.paragraph(), reward: faker_1.faker.number.int({ min: 1, max: 100 }), successText: faker_1.faker.lorem.sentence() }, overRides);
}
function createQuestProgress(userId, questId, overRides) {
    return Object.assign({ completed: Math.random() > 0.5 ? true : false, user: { connect: { id: userId } }, quest: { connect: { id: questId } }, startedAt: faker_1.faker.date.recent() }, overRides);
}
function createShip(overRides = {}) {
    return Object.assign({ attack: faker_1.faker.number.int({ min: 1, max: 100 }), capacity: faker_1.faker.number.int({ min: 1, max: 100 }), name: faker_1.faker.lorem.words(2), cost: faker_1.faker.number.int({ min: 1, max: 100 }), description: faker_1.faker.lorem.sentence(), level: faker_1.faker.number.int({ min: 1, max: 100 }) }, overRides);
}
