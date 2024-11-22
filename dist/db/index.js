"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_libsql_1 = require("@prisma/adapter-libsql");
const client_2 = require("@libsql/client");
const config = process.env.NODE_ENV === "production"
    ? {
        url: `${process.env.TURSO_DATABASE_URL}`,
        authToken: `${process.env.TURSO_AUTH_TOKEN}`,
    }
    : {
        url: `file:prisma/db/dev.db`,
    };
const libsql = (0, client_2.createClient)(config);
const adapter = new adapter_libsql_1.PrismaLibSQL(libsql);
const options = { adapter };
const db = new client_1.PrismaClient(options);
exports.default = db;
