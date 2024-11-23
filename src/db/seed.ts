import db from ".";
import { SeedDataFactory } from "./data/utils/seed-data-factory";
import Seeder from "./data/utils/seeder";
import { resetDb } from "./data/utils/setup";

const seedData = new SeedDataFactory()
  .addUsers()
  .addItems()
  .includeStats().seedData;

const seeder = new Seeder(seedData, db);

resetDb().then(() => {
  return seeder
    .seed()
    .then(() => {
      console.log("🌱🌱🌱 Database seeded! 🌱🌱🌱");
    })
    .catch((error) => {
      console.error("Error seeding database: ", error);
    })
    .finally(() => {
      seeder.db.$disconnect();
    });
});
