import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import type { Config } from "@libsql/client";

const config: Config =
  process.env.NODE_ENV === "production"
    ? {
        url: `${process.env.TURSO_DATABASE_URL}`,
        authToken: `${process.env.TURSO_AUTH_TOKEN}`,
      }
    : {
        url: `file:prisma/dev.db`,
      };
const libsql = createClient(config);

const adapter = new PrismaLibSQL(libsql);
const env = process.env.NODE_ENV;
const options = { adapter };
const db = new PrismaClient(options);

export default db;
