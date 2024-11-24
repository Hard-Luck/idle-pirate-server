import app from "../src/app";
import request from "supertest";
import { resetDb } from "../src/db/data/utils/setup";
import { SeedDataFactory } from "../src/db/data/utils/seed-data-factory";
import Seeder from "../src/db/data/utils/seeder";
import db from "../src/db";

const api = request(app);
let seedDataFactory: SeedDataFactory;
let seeder: Seeder;

beforeEach(async () => {
  await resetDb();
  seedDataFactory = new SeedDataFactory();
  seeder = new Seeder(seedDataFactory.seedData, db);
});

describe("API Endpoints", () => {
  describe("GET /api/users/:id", () => {
    it("should return a user", async () => {
      seedDataFactory.addUsers().includeStats().addItems();
      seeder.seed();
      const user = seedDataFactory.seedData.users[0];
      const userId = user.id;
      const response = await api.get(`/api/users/${userId}`).expect(200);
      console.log(response.body);

      expect(response.body.user.id).toBe(userId);
    });
  });
});
