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
    QuestRequirement: {
      create: {},
    },
    QuestReward: {
      create: {
        gold: faker.number.int({ min: 1, max: 100 }),
        rum: faker.number.int({ min: 1, max: 100 }),
        experience: faker.number.int({ min: 1, max: 100 }),
      },
    },
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
    maxGuns: faker.number.int({ min: 1, max: 100 }),
    requiredLevel: faker.number.int({ min: 1, max: 100 }),
    ...overRides,
  };
}

export function createItem(
  overRides: Partial<Prisma.ItemCreateInput> = {}
): Prisma.ItemCreateInput {
  return {
    name: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    type: faker.word.noun(),
    ...overRides,
  };
}
