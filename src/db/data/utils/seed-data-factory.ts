import { Prisma } from "@prisma/client";
import Generators from "./generators";
import { createUser } from "../create-mocks";
import { faker } from "@faker-js/faker";

export type SeedData = {
  users: Prisma.UserCreateManyInput[];
  stats: Prisma.StatsCreateManyInput[];
  items: Prisma.ItemCreateManyInput[];
  quests: Prisma.QuestCreateManyInput[];
  questRequirements: Prisma.QuestRequirementCreateManyInput[];
  questRequirementsItems: Prisma.QuestRequirementItemCreateManyInput[];
  questRewards: Prisma.QuestRewardCreateManyInput[];
  questRewardsItems: Prisma.QuestRewardItemCreateManyInput[];
  ships: Prisma.ShipCreateManyInput[];
  userShips: Prisma.UserShipCreateManyInput[];
};

export class SeedDataFactory {
  private generators: Generators;
  private data: SeedData;
  constructor() {
    this.generators = new Generators();
    this.data = {
      users: [],
      stats: [],
      items: [],
      quests: [],
      questRequirements: [],
      questRequirementsItems: [],
      questRewards: [],
      questRewardsItems: [],
      ships: [],
      userShips: [],
    };
  }

  resetGenerators() {
    this.generators.resetAllCounters();
  }

  addUsers() {
    this.resetGenerators();
    const userId = this.generators.generateUserId();
    const user = createUser({
      id: userId,
      username: `test-user-${userId}`,
    });
    this.data.users.push(user);
    return this;
  }
  includeStats() {
    const stats = {
      level: 1,
      gold: 0,
      rum: 0,
      experience: 0,
    };
    this.data.users.forEach((user) => {
      this.data.stats.push({ ...stats, userId: user.id as string });
    });

    return this;
  }
  addItems() {
    for (let i = 0; i < 10; i++) {
      const itemId = this.generators.generateItemId();
      const item = {
        id: itemId,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        value: +faker.commerce.price(),
        type: "consumable",
      };
      this.data.items.push(item);
    }
    return this;
  }
  get seedData() {
    return this.data;
  }
}
