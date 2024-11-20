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

export function createMission(
  overRides: Partial<Prisma.MissionCreateInput> = {}
): Prisma.MissionCreateInput {
  return {
    name: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    reward: faker.number.int({ min: 1, max: 100 }),
    secondsToComplete: faker.number.int({ min: 60, max: 1200, multipleOf: 60 }),
    ...overRides,
  };
}

export function createMissionProgress(
  userId: string,
  missionId: string,
  overRides?: Partial<Prisma.MissionProgressCreateInput>
): Prisma.MissionProgressCreateInput {
  return {
    completed: Math.random() > 0.5 ? true : false,
    user: { connect: { id: userId } },
    mission: { connect: { id: missionId } },
    startedAt: faker.date.recent(),
    ...overRides,
  };
}
