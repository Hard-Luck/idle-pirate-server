import { faker } from "@faker-js/faker";
import { Prisma } from "@prisma/client";

export function createUser(
  overrides: Partial<Prisma.UserCreateInput> = {}
): Prisma.UserCreateInput {
  return {
    username: faker.internet.username(),
    name: faker.person.fullName(),
    ...overrides,
  };
}

export function createQuest(
  overRides: Partial<Prisma.QuestCreateInput> = {}
): Prisma.QuestCreateInput {
  return {
    name: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    reward: faker.number.int({ min: 1, max: 100 }),
    successText: faker.lorem.sentence(),
    ...overRides,
  };
}

export function createQuestProgress(
  userId: string,
  questId: string,
  overRides?: Partial<Prisma.QuestProgressCreateInput>
): Prisma.QuestProgressCreateInput {
  return {
    completed: Math.random() > 0.5 ? true : false,
    user: { connect: { id: userId } },
    quest: { connect: { id: questId } },
    startedAt: faker.date.recent(),
    ...overRides,
  };
}

export function createShip(
  overRides: Partial<Prisma.ShipCreateInput> = {}
): Prisma.ShipCreateInput {
  return {
    attack: faker.number.int({ min: 1, max: 100 }),
    capacity: faker.number.int({ min: 1, max: 100 }),
    name: faker.lorem.words(2),
    cost: faker.number.int({ min: 1, max: 100 }),
    description: faker.lorem.sentence(),
    level: faker.number.int({ min: 1, max: 100 }),
    ...overRides,
  };
}
