import { PrismaClient } from "@prisma/client";
import { SeedData } from "./seed-data-factory";

class Seeder {
  data: SeedData;
  db: PrismaClient;

  constructor(data: SeedData, db: PrismaClient) {
    this.data = data;
    this.db = db;
  }

  async seed() {
    await this.seedBaseTables();
  }
  async seedBaseTables() {
    await Promise.all([
      this.db.user.createMany({ data: this.data.users }),
      this.db.ship.createMany({ data: this.data.ships }),
      this.db.item.createMany({ data: this.data.items }),
    ]);
    await this.seedStats();
    await this.seedQuests();
  }
  seedStats() {
    return this.db.stats.createMany({ data: this.data.stats });
  }
  async seedQuests() {
    await this.db.quest.createMany({
      data: this.data.quests,
    });
    await this.db.questRequirement.createMany({
      data: this.data.questRequirements,
    });
    await this.db.questRequirementItem.createMany({
      data: this.data.questRequirementsItems,
    });
    await this.db.questReward.createMany({
      data: this.data.questRewards,
    });
    await this.db.questRewardItem.createMany({
      data: this.data.questRewardsItems,
    });
  }
}

export default Seeder;
